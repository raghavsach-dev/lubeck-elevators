'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader, User, Bot, X, Send, ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: React.ReactNode;
}

export default function ChatbotPopup({ mobileMenuOpen }: { mobileMenuOpen?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [view, setView] = useState<'chat' | 'contact_form'>('chat');
    
    const [contactData, setContactData] = useState({ name: '', email: '', phone: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<'success' | 'error' | null>(null);

    const router = useRouter();
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages, view]);

    useEffect(() => {
        if (isOpen && view === 'chat') {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen, view]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                { role: 'assistant', content: "Hi! I'm the Lubeck Assistant. How can I help you today? You can ask me about our products, company, or request a consultation." }
            ]);
        }
    }, [isOpen, messages.length]);

    useEffect(() => {
        if (isOpen && view === 'chat' && !isLoading && messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.role === 'assistant') {
                inputRef.current?.focus();
            }
        }
    }, [messages, isLoading, isOpen, view]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const newMessages: Message[] = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        const historyForApi = newMessages
            .filter(msg => typeof msg.content === 'string')
            .map(msg => ({
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content as string }],
            }));
        
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ history: historyForApi }),
            });

            if (!res.ok) throw new Error("API call failed");

            const data = await res.json();
            let botMessage: Message;

            let cleanedText = data.text.trim();
            const jsonMatch = cleanedText.match(/```json\s*([\s\S]*?)\s*```/);
            if (jsonMatch && jsonMatch[1]) {
                cleanedText = jsonMatch[1];
            }

            try {
                const parsed = JSON.parse(cleanedText);
                if (parsed.intent === 'collect_contact_details') {
                    setView('contact_form');
                    botMessage = { role: 'system', content: 'Redirecting to contact form.' };
                } else if (parsed.intent === 'product_inquiry' && parsed.product) {
                    const productPath = `/products/${parsed.product}`;
                    botMessage = {
                        role: 'assistant',
                        content: (
                            <div>
                                <p>Of course! Here is the information on our {parsed.product} elevators.</p>
                                <Link href={productPath} passHref>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="mt-2 w-full px-4 py-2 bg-[#D4AF37] text-black font-semibold rounded-lg transition-all duration-300 hover:bg-[#FFD700] flex items-center justify-center gap-2"
                                    >
                                        View {parsed.product.charAt(0).toUpperCase() + parsed.product.slice(1)} Elevators <ArrowRight size={16} />
                                    </button>
                                </Link>
                            </div>
                        )
                    };
                    router.push(productPath);
                } else {
                     throw new Error("Not a special intent.");
                }
            } catch {
                botMessage = { role: 'assistant', content: data.text };
            }
            
            setMessages(prev => [...prev, botMessage]);

        } catch (error) {
            console.error(error);
            const errorMessage: Message = { role: 'assistant', content: "Sorry, I'm having trouble connecting. Please try again later." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus(null);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...contactData, message: 'Enquiry About Elevators' }),
            });

            if (response.ok) {
                setFormStatus('success');
                setContactData({ name: '', email: '', phone: '' });
                setTimeout(() => {
                    setView('chat');
                    setMessages(prev => [...prev, {role: 'assistant', content: "Thanks! Our team will get in touch with you shortly. Is there anything else I can help with?"}]);
                }, 2000);
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            console.error(error);
            setFormStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderContactForm = () => (
        <div className="p-4">
            <h3 className="font-bold text-lg mb-4 text-white">Contact Details</h3>
            <p className="text-sm text-white/70 mb-4">Please provide your details, and our team will contact you shortly.</p>
            {formStatus === 'success' ? (
                <div className="text-center text-green-400 p-4">
                    <p>Great! We&apos;ve received your information. Our team will be in touch soon.</p>
                </div>
            ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        required
                        className="w-full bg-black/50 border border-white/20 rounded-md p-3 focus:ring-[#D4AF37] focus:border-[#D4AF37] text-white"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        required
                        className="w-full bg-black/50 border border-white/20 rounded-md p-3 focus:ring-[#D4AF37] focus:border-[#D4AF37] text-white"
                    />
                    <div className="relative flex items-center">
                        <span className="absolute left-3 text-white/50 pointer-events-none">+91</span>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={contactData.phone}
                            onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                            required
                            className="w-full bg-black/50 border border-white/20 rounded-md p-3 pl-12 focus:ring-[#D4AF37] focus:border-[#D4AF37] text-white"
                        />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#D4AF37] text-black font-semibold rounded-md p-3 transition-all duration-300 hover:bg-[#FFD700] disabled:bg-gray-500">
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    {formStatus === 'error' && <p className="text-red-500 text-sm text-center">Failed to submit. Please try again.</p>}
                     <button type="button" onClick={() => setView('chat')} className="w-full text-center text-white/50 mt-2 text-sm">
                        Back to Chat
                    </button>
                </form>
            )}
        </div>
    );

    const renderChatMessage = (msg: Message, index: number) => (
        <div key={index} className={`flex items-start gap-3 my-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
            {msg.role === 'assistant' && <Bot className="w-8 h-8 p-1.5 rounded-full bg-[#D4AF37] text-black flex-shrink-0" />}
            <div className={`prose prose-invert prose-sm p-3 rounded-2xl max-w-[80%] ${msg.role === 'user' ? 'bg-[#D4AF37] text-black rounded-br-none' : 'bg-[#2a2a2a] text-white rounded-bl-none'}`}>
                {typeof msg.content === 'string' ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
                ) : (
                    msg.content
                )}
            </div>
            {msg.role === 'user' && <User className="w-8 h-8 p-1.5 rounded-full bg-gray-600 text-white flex-shrink-0" />}
        </div>
    );

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className={`fixed bottom-24 right-5 w-[90vw] max-w-sm h-[70vh] bg-[#1C1C1C] rounded-2xl shadow-2xl flex flex-col border border-white/10 z-50 ${mobileMenuOpen ? 'hidden' : 'flex'}`}
                    >
                        <header className="flex items-center justify-between p-4 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <Bot className="w-8 h-8 p-1.5 rounded-full bg-[#D4AF37] text-black" />
                                <div>
                                    <h2 className="font-bold text-white">Lubeck Assistant</h2>
                                    <p className="text-xs text-green-400">● Online</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)}><X className="text-white/70 hover:text-white" /></button>
                        </header>

                        <div className="flex-1 overflow-y-auto p-4">
                            <AnimatePresence>
                                {view === 'chat' ? (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        {messages.map(renderChatMessage)}
                                        {isLoading && (
                                            <div className="flex items-start gap-3 my-4">
                                                <Bot className="w-8 h-8 p-1.5 rounded-full bg-[#D4AF37] text-black flex-shrink-0" />
                                                <div className="p-3 rounded-2xl bg-[#2a2a2a] text-white rounded-bl-none">
                                                    <Loader className="w-5 h-5 animate-spin" />
                                                </div>
                                            </div>
                                        )}
                                        <div ref={messagesEndRef} />
                                    </motion.div>
                                ) : (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        {renderContactForm()}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {view === 'chat' && (
                            <div className="p-4 border-t border-white/10">
                                <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask about our elevators..."
                                        className="flex-1 bg-black/50 border border-white/20 rounded-lg p-3 focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] text-white"
                                        disabled={isLoading}
                                    />
                                    <button type="submit" disabled={isLoading} className="bg-[#D4AF37] p-3 rounded-lg text-black disabled:bg-gray-600">
                                        {isLoading ? <Loader className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
                                    </button>
                                </form>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-5 right-5 p-3 bg-[#D4AF37] rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110 flex items-center gap-2 text-black ${mobileMenuOpen ? 'hidden' : 'block'} hover:bg-[#FFD700] px-4`}
            >
                {!isOpen && <span className="font-semibold">Chat With Lubeck AI</span>}
                {isOpen ? <X className="text-black" /> : <MessageSquare className="text-black" />}
            </button>
        </>
    );
}