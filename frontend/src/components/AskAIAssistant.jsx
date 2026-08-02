import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, Bot, User } from 'lucide-react';

export default function AskAIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello Neel! I'm Saarthi, your AI mentor. How can I help you accelerate your academic journey today?", sender: "ai" }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (customInput = null) => {
        const textToSend = typeof customInput === 'string' ? customInput : input;
        if (!textToSend.trim()) return;

        const userMsg = { text: textToSend, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        if (typeof customInput !== 'string') setInput('');
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/ai/ask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: userMsg.text })
            });
            const data = await response.json();

            if (data.response) {
                setMessages(prev => [...prev, { text: data.response, sender: 'ai' }]);
            } else {
                setMessages(prev => [...prev, { text: "I'm currently recalibrating my neural net. Could you try asking me again later?", sender: 'ai' }]);
            }
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { text: "Error connecting to AI mainframe.", sender: 'ai' }]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const handleOpen = (e) => {
            setIsOpen(true);
            if (e.detail && typeof e.detail === 'string') {
                handleSend(e.detail);
            }
        };
        window.addEventListener('open-saarthi-chat', handleOpen);
        return () => window.removeEventListener('open-saarthi-chat', handleOpen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [/* dependencies are handled because handleSend only uses functional updates for messages */]);

    return (
        <>
            {/* Floating Action Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-8 right-8 py-3 px-6 bg-neon-blue text-neon-bg font-bold rounded-full shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:scale-105 transition-all z-50 flex items-center"
                >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Ask Saarthi AI
                </button>
            )}

            {/* Chatbot Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-4 md:right-8 w-[calc(100vw-2rem)] md:w-96 h-[500px] bg-neon-panel border border-neon-blue/50 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col z-50 overflow-hidden animate-in slide-in-from-bottom-8">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 p-4 border-b border-neon-border flex justify-between items-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/20 rounded-full blur-xl"></div>
                        <div className="flex items-center relative z-10">
                            <div className="w-10 h-10 bg-neon-bg rounded-full flex items-center justify-center border border-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                                <Bot className="w-6 h-6 text-neon-blue" />
                            </div>
                            <div className="ml-3">
                                <h3 className="font-bold text-white text-md">Saarthi AI Core</h3>
                                <p className="text-xs text-[#00ff88] flex items-center"><span className="w-2 h-2 rounded-full bg-[#00ff88] mr-1 animate-pulse"></span> Online</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors relative z-10">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-neon-bg/50 scroll-smooth">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm flex items-start ${msg.sender === 'user'
                                    ? 'bg-neon-blue text-neon-bg ml-4 rounded-tr-none'
                                    : 'bg-neon-panel border border-neon-border text-slate-200 mr-4 rounded-tl-none shadow-[0_0_10px_rgba(0,240,255,0.1)]'
                                    }`}>
                                    {msg.sender === 'ai' && <Sparkles className="w-4 h-4 mr-2 text-neon-blue flex-shrink-0 mt-0.5" />}
                                    <span className="leading-relaxed whitespace-pre-wrap">{msg.text}</span>
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="bg-neon-panel border border-neon-border rounded-2xl rounded-tl-none px-4 py-3 text-sm flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-neon-purple animate-bounce"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-2 h-2 rounded-full bg-neon-blue animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-neon-panel border-t border-neon-border">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask me anything..."
                                className="w-full bg-neon-bg border border-neon-border focus:border-neon-blue text-white rounded-xl py-3 pl-4 pr-12 outline-none text-sm transition-colors shadow-inner"
                            />
                            <button
                                onClick={handleSend}
                                disabled={loading || !input.trim()}
                                className={`absolute right-2 p-2 rounded-lg bg-neon-blue text-neon-bg transition-colors ${loading || !input.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 shadow-[0_0_10px_rgba(0,240,255,0.5)]'}`}
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="text-center mt-2">
                            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Powered By Saarthi AI</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
