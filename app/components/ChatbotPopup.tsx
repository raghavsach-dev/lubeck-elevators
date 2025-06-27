'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import Link from 'next/link';

interface Message {
  role: 'user' | 'model' | 'system';
  content: string | JSX.Element;
}

const initialMessage: Message = {
    role: 'model',
    content: "Hello! I'm the Lubeck Assistant. How can I help you today?"
};

export default function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const historyForApi = messages.map(msg => ({
        role: msg.role === 'system' ? 'model' : msg.role,
        parts: [{ text: typeof msg.content === 'string' ? msg.content : "Here are some options for you." }],
    }));
    historyForApi.push({ role: 'user', parts: [{ text: input }] });
    
    try {
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ history: historyForApi }),
        });

        if (!res.ok) throw new Error("API call failed");

        const data = await res.json();
        let botMessage: Message;

        // Clean the response text before parsing
        let cleanedText = data.text.trim();
        const jsonMatch = cleanedText.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch && jsonMatch[1]) {
            cleanedText = jsonMatch[1];
        }

        try {
            const parsed = JSON.parse(cleanedText);
            if (parsed.intent === 'contact_inquiry') {
                botMessage = {
                    role: 'system',
                    content: (
                        <div>
                            <p>For inquiries about pricing, quotes, or consultations, the best way to get detailed information is by reaching out to our team directly.</p>
                            <Link href="/contact" passHref>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="mt-4 w-full px-4 py-2 bg-[#D4AF37] text-black font-semibold rounded-lg transition-all duration-300 hover:bg-[#FFD700]"
                                >
                                    Go to Contact Page
                                </button>
                            </Link>
                            <p className="text-xs text-center mt-2 text-white/50">You can also ask me about our products or company history!</p>
                        </div>
                    )
                };
            } else {
                 throw new Error("Not a special intent.");
            }
        } catch (parseError) {
             botMessage = { role: 'model', content: data.text || "I'm sorry, I encountered an issue. Please try again." };
        }
        
        setMessages(prev => [...prev, botMessage]);

    } catch (error) {
        const errorMessage: Message = { role: 'model', content: "Sorry, I'm having trouble connecting right now. Please try again later."};
        setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#D4AF37] text-black px-5 py-3 rounded-full shadow-lg hover:bg-[#FFD700] transition-all duration-300 z-50 transform hover:scale-105 flex items-center gap-3"
        aria-label="Toggle Chat"
      >
        <span className="font-semibold">Chat With Lubeck AI</span>
        {isOpen ? <X size={24} className="transition-transform duration-300 rotate-90" /> : <MessageSquare size={24} className="transition-transform duration-300" />}
      </button>

      {isOpen && (
        <div className={`fixed bottom-24 right-6 w-full max-w-sm h-[70vh] max-h-[700px] flex flex-col z-50 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          <div className="w-full h-full bg-[#1C1C1C] border-2 border-[#D4AF37]/50 rounded-xl shadow-2xl flex flex-col">
            <header className="p-4 border-b border-white/10 text-center bg-gradient-to-b from-white/5 to-transparent rounded-t-xl">
              <h3 className="font-heading text-xl text-[#D4AF37]">Lubeck Assistant</h3>
            </header>

            <div className="flex-grow p-4 overflow-y-auto chat-scrollbar">
              <div className="space-y-6">
                  {messages.map((msg, index) => (
                      <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                          {msg.role !== 'user' && <div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-[#D4AF37]"><Bot size={20} /></div>}
                          <div className={`px-4 py-3 max-w-xs break-words ${msg.role === 'user' ? 'bg-[#D4AF37] text-black rounded-t-2xl rounded-bl-2xl' : 'bg-black/50 text-white rounded-t-2xl rounded-br-2xl'}`}>
                              {msg.content}
                          </div>
                           {msg.role === 'user' && <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center text-white"><User size={20} /></div>}
                      </div>
                  ))}
                  {isLoading && (
                      <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-[#D4AF37]"><Bot size={20} /></div>
                          <div className="px-4 py-3 rounded-lg bg-black/50 text-white">
                              <div className="flex items-center space-x-1">
                                  <span className="w-2 h-2 bg-white/50 rounded-full animate-pulse-fast"></span>
                                  <span className="w-2 h-2 bg-white/50 rounded-full animate-pulse-medium"></span>
                                  <span className="w-2 h-2 bg-white/50 rounded-full animate-pulse-slow"></span>
                              </div>
                          </div>
                      </div>
                  )}
                   <div ref={messagesEndRef} />
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our elevators..."
                className="w-full bg-black/50 border border-white/20 rounded-full py-2 px-4 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                disabled={isLoading}
              />
              <button type="submit" className="bg-[#D4AF37] text-black p-3 rounded-full disabled:opacity-50" disabled={isLoading}>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 