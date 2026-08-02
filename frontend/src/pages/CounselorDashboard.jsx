import React from 'react';
import { Calendar, Users, AlertTriangle, BookOpen, Clock, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'CS', risk: 8, safe: 120 },
    { name: 'IT', risk: 5, safe: 95 },
    { name: 'EC', risk: 12, safe: 80 },
    { name: 'ME', risk: 3, safe: 45 },
];

export default function CounselorDashboard() {
    return (
        <div className="space-y-6 max-w-7xl mx-auto pb-12">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Counselor AI Command Center</h1>
                    <p className="text-sm text-neon-blue font-medium flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" /> Digital Twin Analytics Synchronized
                    </p>
                </div>
                <button className="px-5 py-3 bg-neon-purple/20 border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white rounded-xl shadow-[0_0_15px_rgba(178,0,255,0.3)] font-bold transition-all flex items-center">
                    <Clock className="w-5 h-5 mr-2" /> Auto-Schedule AI Sessions
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Alerts Box */}
                <div className="bg-[#12121A] border border-red-500/50 p-6 rounded-2xl shadow-[0_0_20px_rgba(239,68,68,0.2)] relative overflow-hidden">
                    <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>

                    <div className="flex items-center space-x-3 mb-4 relative z-10">
                        <AlertTriangle className="w-7 h-7 text-red-500 animate-pulse" />
                        <h3 className="text-lg font-bold text-red-400">Intervention Required</h3>
                    </div>
                    <h2 className="text-5xl font-extrabold text-white mb-2 relative z-10">12</h2>
                    <p className="text-red-300 text-sm mb-6 relative z-10">High risk flag: &lt;75% attendance or predicted GPA drop.</p>
                    <button className="relative z-10 w-full px-4 py-3 bg-red-500/20 hover:bg-red-500 border border-red-500 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                        Launch Rescue Protocol
                    </button>
                </div>

                {/* Stats Box 1 */}
                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border flex flex-col justify-between hover:border-neon-blue transition-colors group">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-dark-text-muted font-bold text-sm uppercase tracking-wider">Monitored Profiles</h3>
                            <span className="p-2 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue rounded-lg group-hover:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all"><Users className="w-5 h-5" /></span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-2">145</h2>
                    </div>
                    <p className="text-[#00ff88] text-sm flex items-center font-medium">
                        <CheckCircle className="w-4 h-4 mr-1" /> 100% profiles synced with Digital Twin
                    </p>
                </div>

                {/* Stats Box 2 */}
                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border flex flex-col justify-between hover:border-neon-purple transition-colors group">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-dark-text-muted font-bold text-sm uppercase tracking-wider">Pending Interventions</h3>
                            <span className="p-2 bg-neon-purple/10 border border-neon-purple/50 text-neon-purple rounded-lg group-hover:shadow-[0_0_10px_rgba(178,0,255,0.5)] transition-all"><Calendar className="w-5 h-5" /></span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-2">8</h2>
                    </div>
                    <p className="text-amber-400 text-sm flex items-center font-medium">
                        <Clock className="w-4 h-4 mr-1" /> Next priority sync at 2:30 PM
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                {/* At-Risk Students List */}
                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-neon-border pb-3">AI Priority Watchlist</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-dark-text-muted uppercase border-b border-neon-border">
                                <tr>
                                    <th className="px-4 py-3">Digital Twin Profile</th>
                                    <th className="px-4 py-3">Identified Risk Factor</th>
                                    <th className="px-4 py-3 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: 'Rahul Mehta', id: '21DCS014', issue: 'Attendance Trajectory (62%)', color: 'text-amber-500' },
                                    { name: 'Pooja Shah', id: '21DCS089', issue: 'Predicted CGPA Drop (5.6)', color: 'text-red-500' },
                                    { name: 'Karan Patel', id: '21DCS102', issue: 'High Stress Indicator', color: 'text-rose-500' },
                                    { name: 'Neha Joshi', id: '21DCS045', issue: 'Skill Gap Detected', color: 'text-neon-blue' }
                                ].map((student, idx) => (
                                    <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                                        <td className="px-4 py-4">
                                            <p className="font-bold text-white">{student.name}</p>
                                            <p className="text-xs text-neon-purple font-mono mt-1 pr-2 inline-block bg-neon-purple/10 rounded px-1">{student.id}</p>
                                        </td>
                                        <td className={`px-4 py-4 font-bold ${student.color}`}>{student.issue}</td>
                                        <td className="px-4 py-4 text-right">
                                            <button className="px-3 py-1.5 text-xs font-bold text-neon-blue border border-neon-blue hover:bg-neon-blue hover:text-neon-bg rounded-lg transition-colors">Engage</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Analytics */}
                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-neon-border pb-3">Departmental Risk Mapping</h3>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#232333" />
                                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontWeight: 'bold' }} />
                                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#12121A', borderColor: '#232333', color: '#fff', borderRadius: '12px' }} />
                                <Bar dataKey="safe" stackId="a" fill="#00F0FF" radius={[0, 0, 0, 0]} barSize={20} />
                                <Bar dataKey="risk" stackId="a" fill="#B200FF" radius={[0, 4, 4, 0]} barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
