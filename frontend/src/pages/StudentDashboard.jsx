import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Paperclip, Bot, User, Sparkles, Image, Code, FileText, Compass, Clock, Zap, MessageSquare, Search, Calendar, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StudentDashboard() {
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'ai',
            text: "Hello! I am SAARTHI AI, your personal academic, career, and placement guide. How can I assist you today?",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const handleSend = async (customText = null) => {
        const textToSend = typeof customText === 'string' ? customText : input;
        if (!textToSend.trim()) return;

        const newUserMsg = {
            id: Date.now(),
            sender: 'user',
            text: textToSend,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        // Capture history before adding the new message
        const currentHistory = messages.map(msg => ({
            role: msg.sender,
            content: msg.text
        }));

        setMessages(prev => [...prev, newUserMsg]);
        if (typeof customText !== 'string') setInput('');
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/ai/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: textToSend,
                    history: currentHistory
                })
            });

            const data = await response.json();
            
            const aiResponse = {
                id: Date.now() + 1,
                sender: 'ai',
                text: data.response || "Sorry, I couldn't understand that.",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, aiResponse]);
        } catch (error) {
            console.error("Error asking AI:", error);
            const errorResponse = {
                id: Date.now() + 1,
                sender: 'ai',
                text: "My connection to the server was interrupted. Please check if the backend is running.",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, errorResponse]);
        } finally {
            setLoading(false);
        }
    };

    const homeActions = [
        { label: "Ask AI", icon: MessageSquare, action: () => { const el = document.querySelector('textarea'); if (el) el.focus(); } },
        { label: "Upload Notes", icon: FileText, action: () => navigate('/student/forms') },
        { label: "Search Materials", icon: Search, action: () => navigate('/student/squeeze') },
        { label: "Plan Study", icon: Calendar, action: () => navigate('/student/exams') }
    ];

    return (
        <div className="flex flex-col h-full bg-neon-bg relative">

            {/* Main Chat Area */}
            <div className="flex-1 overflow-y-auto w-full max-w-5xl mx-auto px-4 py-8 pb-40 scroll-smooth no-scrollbar">

                {messages.length === 1 && (
                    <div className="flex flex-col items-center justify-center text-center mt-12 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">

                        {/* 1. Main Title with Glow */}
                        <div className="relative mb-2 inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
                            <h1 className="relative z-10 text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple tracking-tight flex items-center justify-center gap-4">
                                <Brain className="w-12 h-12 text-neon-blue animate-pulse" />
                                Saarthi AI
                            </h1>
                        </div>

                        {/* 2. Welcome Message */}
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-poppins">
                            Welcome to Saarthi AI
                        </h2>

                        {/* 3. Description Text */}
                        <p className="text-lg md:text-xl text-dark-text-muted max-w-3xl px-4 leading-relaxed mb-12 font-inter">
                            “I am your personal academic guide. Use AI tools to understand concepts, organize study materials, prepare for exams, and build your career.”
                        </p>

                        {/* 4. Quick Action Buttons */}
                        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-4xl px-4">
                            {homeActions.map((action, idx) => (
                                <button
                                    key={idx}
                                    onClick={action.action}
                                    className="flex items-center justify-center px-6 py-4 rounded-2xl bg-neon-panel border border-neon-border hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 group min-w-[180px]"
                                >
                                    <div className="p-2 rounded-xl bg-neon-blue/10 text-neon-blue mr-3 group-hover:bg-neon-blue group-hover:text-neon-bg transition-colors duration-300">
                                        <action.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-base font-bold text-slate-200 group-hover:text-white transition-colors duration-300 tracking-wide font-poppins">
                                        {action.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="space-y-6">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                            <div className="flex max-w-[85%] md:max-w-[75%]">

                                {/* AI Avatar */}
                                {msg.sender === 'ai' && (
                                    <div className="w-8 h-8 rounded-lg bg-neon-panel border border-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.3)] flex justify-center items-center flex-shrink-0 mr-3 mt-1">
                                        <Bot className="w-5 h-5 text-neon-blue" />
                                    </div>
                                )}

                                <div className={`px-5 py-4 text-sm md:text-base leading-relaxed ${msg.sender === 'user'
                                    ? 'bg-neon-blue text-neon-bg rounded-2xl rounded-tr-sm shadow-[0_0_15px_rgba(0,240,255,0.2)] font-medium'
                                    : 'bg-neon-panel border border-neon-border text-slate-200 rounded-2xl rounded-tl-sm'
                                    }`}>
                                    <div className="whitespace-pre-wrap">{msg.text}</div>
                                    <div className={`text-[10px] mt-2 ${msg.sender === 'user' ? 'text-neon-bg/70 text-right' : 'text-slate-500'}`}>
                                        {msg.time}
                                    </div>
                                </div>

                                {/* User Avatar */}
                                {msg.sender === 'user' && (
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neon-blue to-neon-purple shadow-[0_0_10px_rgba(178,0,255,0.3)] border border-white/20 flex justify-center items-center flex-shrink-0 ml-3 mt-1 text-white">
                                        <User className="w-5 h-5" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    {loading && (
                        <div className="flex justify-start">
                            <div className="flex max-w-[85%]">
                                <div className="w-8 h-8 rounded-lg bg-neon-panel border border-neon-blue flex justify-center items-center flex-shrink-0 mr-3 mt-1">
                                    <Sparkles className="w-4 h-4 text-neon-blue animate-pulse" />
                                </div>
                                <div className="bg-neon-panel border border-neon-border rounded-2xl rounded-tl-sm px-5 py-4 flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-neon-blue animate-bounce"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#B200FF] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} className="h-4" />
                </div>
            </div>

            {/* Input Area (Sticky Bottom) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neon-bg via-neon-bg to-transparent pt-10 pb-6 px-4 z-30">
                <div className="max-w-4xl mx-auto w-full relative">
                    <div className="absolute inset-0 bg-neon-blue/5 rounded-2xl blur-xl pb-4"></div>

                    <div className="bg-neon-panel border border-neon-border hover:border-neon-blue/50 focus-within:border-neon-blue focus-within:ring-1 focus-within:ring-neon-blue rounded-2xl p-2 transition-all shadow-2xl relative">

                        <div className="flex items-end min-h-[56px]">

                            <div className="flex items-center space-x-1 pb-2 pl-2">
                                <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => alert("Selected file: " + e.target.files[0]?.name)} />
                                <button onClick={() => fileInputRef.current?.click()} className="p-2 text-dark-text-muted hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Upload File">
                                    <Paperclip className="w-5 h-5" />
                                </button>
                                <button className="p-2 text-dark-text-muted hover:text-white hover:bg-white/10 rounded-lg transition-colors hidden sm:block" title="Upload Image">
                                    <Image className="w-5 h-5" />
                                </button>
                            </div>

                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Message Saarthi AI... (Ask about syllabus, career, coding etc.)"
                                className="flex-1 bg-transparent border-none outline-none text-white text-sm px-3 py-4 placeholder:text-dark-text-muted resize-none max-h-32 overflow-y-auto"
                                rows="1"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSend();
                                    }
                                }}
                            />

                            <div className="flex items-center space-x-1 pb-2 pr-2">
                                <button className="p-2 text-dark-text-muted hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                                    <Mic className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={() => handleSend()}
                                    disabled={!input.trim()}
                                    className={`p-3 rounded-xl flex items-center justify-center transition-all ${input.trim()
                                        ? 'bg-neon-blue text-neon-bg hover:scale-105 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                                        : 'bg-white/10 text-dark-text-muted cursor-not-allowed'
                                        }`}
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="text-center mt-3 text-xs text-dark-text-muted flex justify-center items-center">
                        <Sparkles className="w-3 h-3 mr-1 text-neon-purple" />
                        Saarthi AI can generate assignments, code, study plans, and career roadmaps.
                    </div>
                </div>
            </div>

        </div>
    );
}
