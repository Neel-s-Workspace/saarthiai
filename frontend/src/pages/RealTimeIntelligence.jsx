import React from 'react';
import { ShieldAlert, TrendingUp, Lightbulb, Activity, Cpu, Target } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function RealTimeIntelligence() {
    const attendanceData = [
        { week: 'W1', avg: 95 }, { week: 'W2', avg: 92 }, { week: 'W3', avg: 88 },
        { week: 'W4', avg: 85 }, { week: 'W5', avg: 82 }, { week: 'W6', avg: 84 },
    ];

    const readinessData = [
        { subject: 'Data Structures', A: 85, fullMark: 100 },
        { subject: 'System Design', A: 60, fullMark: 100 },
        { subject: 'Algorithms', A: 78, fullMark: 100 },
        { subject: 'Communication', A: 90, fullMark: 100 },
        { subject: 'Aptitude', A: 70, fullMark: 100 },
        { subject: 'Core CS', A: 82, fullMark: 100 },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-12">

            <div className="bg-neon-panel p-8 rounded-3xl border border-neon-purple shadow-[0_0_20px_rgba(178,0,255,0.15)] flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="relative z-10 flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-2xl bg-neon-purple/20 flex items-center justify-center border border-neon-purple shadow-[inset_0_0_15px_rgba(178,0,255,0.5)]">
                        <Cpu className="w-8 h-8 text-neon-purple" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-white tracking-widest uppercase mb-1">Saarthi AI Intelligence</h1>
                        <p className="text-dark-text-muted">Real-time telemetry and predictive models of your academic trajectory.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Placement Readiness Radar */}
                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border h-[450px] relative flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-[#00ff88]" /> Placement Readiness Matrix
                    </h3>
                    <div className="flex-1 w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={readinessData}>
                                <PolarGrid stroke="#232333" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#232333" />
                                <Radar name="Student" dataKey="A" stroke="#00ff88" strokeWidth={2} fill="#00ff88" fillOpacity={0.3} />
                                <Tooltip contentStyle={{ backgroundColor: '#12121A', borderColor: '#00ff88' }} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 p-3 bg-neon-bg rounded-xl border border-neon-border">
                        <p className="text-xs text-dark-text-muted"><strong className="text-white">AI Insight:</strong> Strong communication and core CS fundamentals. Immediate focus required on <span className="text-amber-400 font-bold">System Design</span> to match top-tier company requirements.</p>
                    </div>
                </div>

                {/* Attendance Predictive Trend */}
                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border h-[450px] flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-neon-blue" /> Attendance Volatility Tracker
                    </h3>
                    <div className="flex-1 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={attendanceData}>
                                <defs>
                                    <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00F0FF" stopOpacity={0.5} />
                                        <stop offset="95%" stopColor="#00F0FF" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#232333" vertical={false} />
                                <XAxis dataKey="week" stroke="#94a3b8" />
                                <YAxis domain={[60, 100]} stroke="#94a3b8" />
                                <Tooltip contentStyle={{ backgroundColor: '#12121A', borderColor: '#232333', color: '#fff' }} />
                                <Area type="monotone" dataKey="avg" stroke="#00F0FF" strokeWidth={3} fillOpacity={1} fill="url(#colorAvg)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 p-3 bg-neon-bg border-l-4 border-l-amber-500 rounded-r-xl">
                        <p className="text-xs text-dark-text-muted"><strong className="text-amber-500">Warning:</strong> Downward trend detected over the last 3 weeks. If this continues, you will breach the 75% threshold by Week 8.</p>
                    </div>
                </div>

            </div>

            {/* Smart Alerts */}
            <h2 className="text-xl font-bold text-white tracking-wider uppercase mt-8 border-b border-neon-border pb-2">Cognitive Alerts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-neon-panel p-5 rounded-2xl border border-amber-500/50 flex space-x-4">
                    <ShieldAlert className="w-8 h-8 text-amber-500 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-white text-sm">Coursework Risk</h4>
                        <p className="text-xs text-dark-text-muted mt-1">Quiz scores in Cryptography are falling below your moving average. Consider booking a tutor session.</p>
                    </div>
                </div>
                <div className="bg-neon-panel p-5 rounded-2xl border border-neon-blue/50 flex space-x-4">
                    <TrendingUp className="w-8 h-8 text-neon-blue flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-white text-sm">Roadmap Milestone</h4>
                        <p className="text-xs text-dark-text-muted mt-1">You are 1 project away from completing your Python Development milestone.</p>
                    </div>
                </div>
                <div className="bg-neon-panel p-5 rounded-2xl border border-[#00ff88]/50 flex space-x-4">
                    <Lightbulb className="w-8 h-8 text-[#00ff88] flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-white text-sm">Opportunity Match</h4>
                        <p className="text-xs text-dark-text-muted mt-1">A new internship listing highly matches your current skill vector. Check the Opportunity Builder.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
