import React, { useState } from 'react';
import { HeartPulse, Brain, Zap, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function MentalWellness() {
    const [moodData] = useState([
        { day: 'Mon', score: 7 },
        { day: 'Tue', score: 8 },
        { day: 'Wed', score: 6 },
        { day: 'Thu', score: 5 },
        { day: 'Fri', score: 6 },
        { day: 'Sat', score: 9 },
        { day: 'Sun', score: 8 },
    ]);

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">
            <div className="bg-[#12121A] p-8 rounded-3xl border border-neon-purple/30 shadow-[0_0_30px_rgba(178,0,255,0.15)] relative overflow-hidden flex flex-col md:flex-row justify-between items-center">
                <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 mb-6 md:mb-0">
                    <h1 className="text-4xl font-extrabold text-white mb-2 flex items-center">
                        <HeartPulse className="w-8 h-8 mr-3 text-neon-purple" />
                        Mental Wellness Center
                    </h1>
                    <p className="text-neon-blue font-medium text-lg">Your safe space for emotional tracking and support.</p>
                </div>

                <button className="relative z-10 px-6 py-4 bg-red-500/20 hover:bg-red-500 border border-red-500 text-white rounded-xl shadow-[0_0_15px_rgba(239,68,68,0.5)] font-bold transition-all flex items-center group">
                    <ShieldAlert className="w-5 h-5 mr-2 group-hover:animate-bounce" /> Get Immediate Help
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border hover:border-neon-purple transition-all shadow-md group">
                    <div className="w-12 h-12 bg-neon-purple/10 rounded-xl flex justify-center items-center mb-4 group-hover:scale-110 transition-transform">
                        <Brain className="w-6 h-6 text-neon-purple" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Log Daily Mood</h3>
                    <p className="text-sm text-dark-text-muted mb-4">Track your emotional state to help AI identify stress patterns.</p>
                    <button className="w-full py-2.5 bg-neon-bg border border-neon-border hover:border-neon-purple text-white rounded-lg transition-colors text-sm font-bold">
                        Check-in Now
                    </button>
                </div>

                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border hover:border-[#00ff88] transition-all shadow-md group">
                    <div className="w-12 h-12 bg-[#00ff88]/10 rounded-xl flex justify-center items-center mb-4 group-hover:scale-110 transition-transform">
                        <Sparkles className="w-6 h-6 text-[#00ff88]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Mindfulness Audio</h3>
                    <p className="text-sm text-dark-text-muted mb-4">Access 5-minute guided meditations tailored for student stress.</p>
                    <button className="w-full py-2.5 bg-neon-bg border border-neon-border hover:border-[#00ff88] text-white rounded-lg transition-colors text-sm font-bold">
                        Browse Library
                    </button>
                </div>

                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border hover:border-neon-blue transition-all shadow-md group">
                    <div className="w-12 h-12 bg-neon-blue/10 rounded-xl flex justify-center items-center mb-4 group-hover:scale-110 transition-transform">
                        <MessageSquare className="w-6 h-6 text-neon-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Anonymous Chat</h3>
                    <p className="text-sm text-dark-text-muted mb-4">Talk to an AI empath or connect anonymously with peers.</p>
                    <button className="w-full py-2.5 bg-neon-bg border border-neon-border hover:border-neon-blue text-white rounded-lg transition-colors text-sm font-bold">
                        Start Session
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border h-80">
                    <h3 className="text-lg font-bold text-white mb-4">Recent Emotional Trajectory</h3>
                    <ResponsiveContainer width="100%" height="85%">
                        <AreaChart data={moodData}>
                            <defs>
                                <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#B200FF" stopOpacity={0.6} />
                                    <stop offset="95%" stopColor="#B200FF" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#232333" />
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                            <YAxis domain={[0, 10]} axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} hide />
                            <Tooltip contentStyle={{ backgroundColor: '#12121A', borderColor: '#232333', color: '#fff' }} />
                            <Area type="monotone" dataKey="score" stroke="#B200FF" strokeWidth={4} fillOpacity={1} fill="url(#colorMood)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute right-[-20%] bottom-[-20%] w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl"></div>
                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">AI Stress Analysis</h3>
                    <p className="text-dark-text-muted mb-6 relative z-10 leading-relaxed">
                        Based on your recent academic load and mood logs, your stress levels are <span className="text-amber-400 font-bold">elevated</span>.
                        We recommend taking the upcoming weekend off from intense studies and engaging in our deeply relaxing "Focus reset" audio session.
                    </p>

                    <button className="self-start px-6 py-3 bg-neon-blue/20 hover:bg-neon-blue/40 border border-neon-blue text-white rounded-xl font-bold transition-all flex items-center relative z-10 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                        <Zap className="w-4 h-4 mr-2 text-neon-blue" /> Generate Custom Action Plan
                    </button>
                </div>
            </div>
        </div>
    );
}
