import React, { useState } from 'react';
import { Send, User, MessageSquare, Clock, CheckCircle } from 'lucide-react';

export default function CounselorConnect() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        if (subject && message) {
            setIsSent(true);
            setTimeout(() => {
                setSubject('');
                setMessage('');
                setIsSent(false);
            }, 3000);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-12">
            <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                <h1 className="text-3xl font-bold text-white mb-2">Counselor Connect</h1>
                <p className="text-dark-text-muted">Direct communication channel with your assigned mentor.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 space-y-6">
                    {/* Counselor Info */}
                    <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full border-4 border-neon-blue p-1 mb-4 flex-shrink-0 flex justify-center items-center overflow-hidden">
                            <img src="https://i.pravatar.cc/150?img=11" alt="Counselor" className="rounded-full rounded-full w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Mr. Amit Sharma</h3>
                        <p className="text-neon-blue text-sm mb-4">Senior Counselor (CSE)</p>

                        <div className="w-full bg-neon-bg border border-neon-border rounded-xl p-3 text-left">
                            <p className="text-xs text-dark-text-muted mb-1 flex items-center"><Clock className="w-3 h-3 mr-1" /> Average Response Time</p>
                            <p className="text-white font-medium">&lt; 4 Hours</p>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border">
                        <h3 className="text-lg font-bold text-white mb-6 border-b border-neon-border pb-2 flex items-center">
                            <MessageSquare className="w-5 h-5 mr-2 text-neon-purple" /> Secure Messaging Portal
                        </h3>

                        {isSent ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center h-64">
                                <div className="w-16 h-16 bg-[#00ff88]/20 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle className="w-8 h-8 text-[#00ff88]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Message Transmitted Successfully</h3>
                                <p className="text-dark-text-muted max-w-sm">Your counselor has been notified and will respond via the platform shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-dark-text-muted mb-2">Recipient</label>
                                    <div className="w-full px-4 py-3 bg-neon-bg/50 border border-neon-border rounded-xl text-white flex items-center opacity-70 cursor-not-allowed">
                                        <User className="w-4 h-4 mr-2 text-neon-blue" />
                                        Mr. Amit Sharma (Pre-assigned)
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-dark-text-muted mb-2">Subject Header</label>
                                    <input
                                        type="text"
                                        required
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full px-4 py-3 bg-neon-bg border border-neon-border rounded-xl focus:ring-2 focus:ring-neon-blue focus:border-neon-blue text-white placeholder-slate-600 transition-all outline-none"
                                        placeholder="Brief subject of your inquiry"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-dark-text-muted mb-2">Encrypted Message</label>
                                    <textarea
                                        required
                                        rows="5"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full px-4 py-3 bg-neon-bg border border-neon-border rounded-xl focus:ring-2 focus:ring-neon-blue focus:border-neon-blue text-white placeholder-slate-600 transition-all outline-none resize-none"
                                        placeholder="Type your message here. Explain your academic issue, career question, or general inquiry..."
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-neon-blue/20 hover:bg-neon-blue/40 border border-neon-blue text-neon-blue hover:text-white rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] flex items-center justify-center w-full md:w-auto"
                                    >
                                        <Send className="w-4 h-4 mr-2" /> Transmit Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
