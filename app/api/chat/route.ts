import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { history } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: "Gemini API key not configured" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const companyInfo = `
      LUBECK ELEVATORS is one of the world's leading quality assured elevators company based in India, established in the year 2009.
      Tagline: Lifting With Luxury Since 2009.
      We are a well-known household name in lift manufacturing, engaged in the design and production of Passenger Elevators, Home Elevators, Goods Elevators, and much more.
      With more than 750 systems delivered, we design, build, and install award-worthy elevators, especially for your needs, offering solutions for both Residential and Commercial properties.
      
      Our key features include:
      - Customized For You: Lifts customized according to your exact needs and building specifications.
      - Ultra Premium Luxury Cabins: High-end, modern designer steel sheets and cabin interiors.
      - German Technology: Built with state-of-the-art German technology for reliability and performance.
      - Maintenance Free: Designed to be maintenance-free and dependable.
      - Noise Free & Smooth: Engineered for a silent and exceptionally smooth ride experience.
      - Verified Quality: A verified business on both Justdial and Indiamart.

      Our Mission: To ascend as the premier elevator company by delivering unparalleled vertical transportation solutions. We are committed to innovation, quality, and customer satisfaction, ensuring every journey with Lubeck Elevators is a testament to our dedication to excellence.
      Our Vision: To redefine the standards of the elevator industry by integrating cutting-edge technology with sustainable practices. We envision a future where our elevators not only enhance accessibility but also contribute to smarter, more efficient urban environments, elevating the quality of life for all.
    `;

    const systemInstruction = `
        You are the "Lubeck Assistant", a friendly and professional AI guide for Lubeck Elevators.
        You ONLY answer questions related to Lubeck Elevators, its products, services, and the company information provided below.
        Do not mention that you are an AI model from Google or Gemini. Refer to yourself only as the "Lubeck Assistant".
        If a user asks about anything else, you must politely decline and steer the conversation back to Lubeck Elevators.
        
        <COMPANY_INFORMATION>
        ${companyInfo}
        </COMPANY_INFORMATION>

        Your primary task is to answer user questions based on the provided information.
        However, you have a special capability. If you determine that the user's message is an inquiry for a quote, a request to get in touch, or an attempt to contact the company for business purposes (like asking for price, consultation, or to buy), you MUST respond ONLY with a specific JSON object in this exact format:
        {"intent": "contact_inquiry"}

        For all other questions that are related to Lubeck Elevators, provide a helpful, conversational answer as plain text.

        Examples:
        User: "Tell me about your maintenance services." -> You: "Our elevators are designed to be maintenance-free and dependable, ensuring peace of mind."
        User: "How much does a home elevator cost?" -> You: {"intent": "contact_inquiry"}
        User: "I want to get a free consultation." -> You: {"intent": "contact_inquiry"}
        User: "What is the best color for a car?" -> You: "I am the Lubeck Assistant. I can only answer questions about our products and services. How may I help you with your elevator needs today?"
    `;

    try {
        const chat = model.startChat({
            history: [{ role: "user", parts: [{ text: systemInstruction }] }, ...history],
            generationConfig: {
                maxOutputTokens: 200,
            },
        });
        
        const lastUserMessage = history[history.length - 1]?.parts[0]?.text || "";
        const result = await chat.sendMessage(lastUserMessage);
        const response = result.response;
        const text = response.text();
        
        return NextResponse.json({ text });

    } catch (error) {
        console.error("Gemini API call failed:", error);
        return NextResponse.json({ error: "Failed to communicate with the AI model." }, { status: 500 });
    }
} 