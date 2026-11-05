import React, { useState } from 'react';
import { Users, BookOpen, AlertCircle, CalendarCheck, Search } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', attendance: 85, performance: 7.2 },
    { name: 'Feb', attendance: 88, performance: 7.5 },
    { name: 'Mar', attendance: 82, performance: 7.3 },
    { name: 'Apr', attendance: 89, performance: 7.8 },
    { name: 'May', attendance: 92, performance: 8.1 },
    { name: 'Jun', attendance: 90, performance: 8.0 },
];

export default function AdminDashboard() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div className="space-y-6 max-w-7xl mx-auto pb-12">
            {/* Header section with search */}
            <div className="flex justify-between items-center bg-neon-panel p-6 rounded-2xl border border-neon-border shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1">University Analytics Overview</h1>
                    <p className="text-sm text-neon-blue font-medium">Global AI Predictor Status: Nominal</p>
                </div>
                <div className="relative w-80">
                    <input
                        type="text"
                        value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search student or counselor..."
                        className="w-full pl-10 pr-4 py-3 bg-neon-bg border border-neon-border rounded-xl focus:ring-2 focus:ring-neon-blue focus:border-neon-blue text-white placeholder-slate-600 outline-none"
                    />
                    <Search className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { title: "Total Students", value: "4,209", icon: Users, color: "text-neon-blue", border: "border-neon-blue", shadow: "shadow-[0_0_10px_rgba(0,240,255,0.2)]" },
                    { title: "Active Counselors", value: "128", icon: BookOpen, color: "text-neon-purple", border: "border-neon-purple", shadow: "shadow-[0_0_10px_rgba(178,0,255,0.2)]" },
                    { title: "AI Sessions This Wk", value: "312", icon: CalendarCheck, color: "text-[#00ff88]", border: "border-[#00ff88]", shadow: "shadow-[0_0_10px_rgba(0,255,136,0.2)]" },
                    { title: "Alerts (At-Risk)", value: "45", icon: AlertCircle, color: "text-red-500", border: "border-red-500", shadow: "shadow-[0_0_10px_rgba(239,68,68,0.2)]" }
                ].map((stat, i) => (
                    <div key={i} className={`bg-neon-panel p-6 rounded-2xl border border-neon-border hover:border-gray-500 transition-all ${stat.shadow}`}>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-dark-text-muted">{stat.title}</p>
                                <h3 className="text-3xl font-bold text-white mt-2">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-xl bg-neon-bg border border-neon-border/50`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts & Tables Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart */}
                <div className="lg:col-span-2 bg-neon-panel p-6 rounded-2xl border border-neon-border shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-white">Digital Twin AI Predictor vs Actual Performance</h3>
                        <button className="text-sm text-neon-blue font-bold px-4 py-2 bg-neon-blue/10 rounded-lg hover:bg-neon-blue/20 transition-colors">Generate AI Report</button>
                    </div>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorAtt" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00F0FF" stopOpacity={0.5} />
                                        <stop offset="95%" stopColor="#00F0FF" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#232333" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#12121A', borderColor: '#232333', color: '#fff' }}
                                    itemStyle={{ color: '#00F0FF' }}
                                />
                                <Area type="monotone" dataKey="attendance" stroke="#00F0FF" strokeWidth={3} fillOpacity={1} fill="url(#colorAtt)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Alerts List */}
                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-white flex items-center">
                            <AlertCircle className="w-5 h-5 text-red-500 mr-2" /> Live AI Alerts
                        </h3>
                        <div className="h-2 w-2 bg-red-500 rounded-full animate-ping"></div>
                    </div>

                    <div className="space-y-4 flex-1">
                        {[
                            { text: "Low Attendance Predicted: John Doe (CS)", status: "Critical", time: "2m ago" },
                            { text: "Missed Session: Jane Smith", status: "Warning", time: "15m ago" },
                            { text: "CGPA Drop Detected: Alice Johnson", status: "Critical", time: "1h ago" },
                            { text: "Feedback Received from AI Bot", status: "Info", time: "2h ago" },
                        ].map((alert, i) => (
                            <div key={i} className="flex items-start space-x-3 p-4 rounded-xl bg-neon-bg border border-neon-border hover:border-neon-blue/50 transition-colors cursor-pointer group">
                                <div className={`mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0 ${alert.status === 'Critical' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]' : alert.status === 'Warning' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]' : 'bg-neon-blue shadow-[0_0_8px_rgba(0,240,255,0.8)]'
                                    }`} />
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-white group-hover:text-neon-blue transition-colors">{alert.text}</p>
                                    <p className="text-xs text-dark-text-muted mt-1">{alert.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-6 py-3 text-sm font-bold text-neon-purple border border-neon-purple/50 bg-neon-purple/10 hover:bg-neon-purple hover:text-white rounded-xl transition-all shadow-[0_0_15px_rgba(178,0,255,0.2)]">
                        Open Control Center
                    </button>
                </div>
            </div>
        </div>
    );
}
