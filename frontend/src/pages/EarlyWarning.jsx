import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, TrendingDown, User, Activity, Bell, Search, MessageSquare, Eye } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const atRiskStudents = [
    {
        id: 1, name: 'Priya Sharma', rollNo: 'CS21045', riskScore: 92, riskLevel: 'critical',
        issues: ['Attendance: 58%', 'Failing 2 subjects', 'No counseling in 3 weeks'],
        trend: [{ w: 'W1', s: 74 }, { w: 'W2', s: 68 }, { w: 'W3', s: 61 }, { w: 'W4', s: 55 }, { w: 'W5', s: 45 }],
        enrolled: 'B.Tech CSE 3rd Year',
    },
    {
        id: 2, name: 'Arjun Mehta', rollNo: 'CS21032', riskScore: 74, riskLevel: 'high',
        issues: ['Attendance: 71%', 'Deteriorating quiz scores', 'Mental wellness alert'],
        trend: [{ w: 'W1', s: 82 }, { w: 'W2', s: 79 }, { w: 'W3', s: 74 }, { w: 'W4', s: 71 }, { w: 'W5', s: 68 }],
        enrolled: 'B.Tech CSE 3rd Year',
    },
    {
        id: 3, name: 'Sneha Patel', rollNo: 'CE21019', riskScore: 61, riskLevel: 'moderate',
        issues: ['Assignment submissions low', 'Skill gap in core subjects'],
        trend: [{ w: 'W1', s: 88 }, { w: 'W2', s: 84 }, { w: 'W3', s: 82 }, { w: 'W4', s: 77 }, { w: 'W5', s: 72 }],
        enrolled: 'B.Tech CE 2nd Year',
    },
    {
        id: 4, name: 'Rohan Gupta', rollNo: 'IT21055', riskScore: 45, riskLevel: 'low',
        issues: ['Slight attendance dip', 'Low quiz engagement'],
        trend: [{ w: 'W1', s: 91 }, { w: 'W2', s: 90 }, { w: 'W3', s: 88 }, { w: 'W4', s: 85 }, { w: 'W5', s: 83 }],
        enrolled: 'B.Tech IT 2nd Year',
    },
];

const riskConfig = {
    critical: { color: '#ef4444', label: 'Critical', border: 'border-red-500/40', bg: 'bg-red-500/10' },
    high: { color: '#f59e0b', label: 'High Risk', border: 'border-amber-500/40', bg: 'bg-amber-500/10' },
    moderate: { color: '#facc15', label: 'Moderate', border: 'border-yellow-400/40', bg: 'bg-yellow-400/10' },
    low: { color: '#00F0FF', label: 'Low Risk', border: 'border-neon-blue/30', bg: 'bg-neon-blue/10' },
};

const batchTrend = [
    { month: 'Sep', avgScore: 82 }, { month: 'Oct', avgScore: 79 }, { month: 'Nov', avgScore: 76 },
    { month: 'Dec', avgScore: 71 }, { month: 'Jan', avgScore: 74 }, { month: 'Feb', avgScore: 70 },
];

const alertCategories = [
    { label: 'Attendance < 75%', count: 14, color: '#ef4444' },
    { label: 'Grade Decline', count: 9, color: '#f59e0b' },
    { label: 'Mental Wellness', count: 5, color: '#B200FF' },
    { label: 'No Engagement', count: 7, color: '#00F0FF' },
];

export default function EarlyWarning() {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const filtered = atRiskStudents.filter(s => {
        const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.rollNo.toLowerCase().includes(search.toLowerCase());
        const matchFilter = filter === 'all' || s.riskLevel === filter;
        return matchSearch && matchFilter;
    });

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-12 p-4 lg:p-6">

            {/* Header */}
            <div className="bg-neon-panel rounded-3xl border border-red-500/30 p-8 relative overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.12)]">
                <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
                            <ShieldAlert className="w-8 h-8 text-red-500" />
                            AI Early Warning System
                        </h1>
                        <p className="text-dark-text-muted">Predictive risk analytics to identify and support struggling students before it's too late.</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                        <div className="text-center">
                            <div className="text-3xl font-black text-red-500">35</div>
                            <div className="text-xs text-dark-text-muted font-bold uppercase tracking-wide">Total Alerts</div>
                        </div>
                        <div className="h-12 w-px bg-neon-border" />
                        <div className="text-center">
                            <div className="text-3xl font-black text-amber-400">4</div>
                            <div className="text-xs text-dark-text-muted font-bold uppercase tracking-wide">Critical Risk</div>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-red-500/10 border border-red-500/40 text-red-400 rounded-xl font-bold text-sm hover:bg-red-500 hover:text-white transition-all ml-4">
                            <Bell className="w-4 h-4" /> Send Alerts
                        </button>
                    </div>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-neon-panel border border-neon-border rounded-2xl p-6 h-64">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-amber-400" /> Batch Avg Success Score
                    </h3>
                    <ResponsiveContainer width="100%" height="80%">
                        <AreaChart data={batchTrend}>
                            <defs>
                                <linearGradient id="batchGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#232333" vertical={false} />
                            <XAxis dataKey="month" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                            <YAxis domain={[60, 90]} stroke="#94a3b8" tick={{ fontSize: 11 }} />
                            <Tooltip contentStyle={{ backgroundColor: '#12121A', borderColor: '#232333', color: '#fff', borderRadius: '10px' }} />
                            <Area type="monotone" dataKey="avgScore" name="Avg Score" stroke="#ef4444" strokeWidth={2.5} fill="url(#batchGrad)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-neon-panel border border-neon-border rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" /> Alert Breakdown
                    </h3>
                    <div className="space-y-4">
                        {alertCategories.map((cat, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <span className="text-sm text-dark-text-muted w-36 shrink-0">{cat.label}</span>
                                <div className="flex-1 h-2.5 bg-neon-bg rounded-full overflow-hidden">
                                    <div className="h-full rounded-full" style={{ width: `${(cat.count / 20) * 100}%`, backgroundColor: cat.color, boxShadow: `0 0 6px ${cat.color}` }} />
                                </div>
                                <span className="text-sm font-bold text-white w-6">{cat.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Student List */}
            <div className="bg-neon-panel border border-neon-border rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <User className="w-5 h-5 text-red-500" /> At-Risk Student Profiles
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        <div className="flex items-center bg-neon-bg border border-neon-border rounded-lg px-3 py-2">
                            <Search className="w-4 h-4 text-dark-text-muted mr-2" />
                            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}
                                className="bg-transparent text-white text-sm outline-none w-28" />
                        </div>
                        <div className="flex items-center gap-1 bg-neon-bg border border-neon-border rounded-lg p-1">
                            {['all', 'critical', 'high', 'moderate', 'low'].map(f => (
                                <button key={f} onClick={() => setFilter(f)}
                                    className={`px-3 py-1 rounded-md text-xs font-bold capitalize transition-all ${filter === f ? 'bg-neon-blue text-neon-bg' : 'text-dark-text-muted hover:text-white'}`}>
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    {filtered.map((student) => {
                        const rc = riskConfig[student.riskLevel];
                        const isSelected = selectedStudent?.id === student.id;
                        return (
                            <div key={student.id} className={`bg-neon-bg rounded-2xl overflow-hidden border transition-all ${rc.border}`}>
                                <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer"
                                    onClick={() => setSelectedStudent(isSelected ? null : student)}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg shrink-0 ${rc.bg}`}
                                            style={{ color: rc.color, border: `2px solid ${rc.color}30` }}>
                                            {student.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{student.name}</h4>
                                            <p className="text-xs text-dark-text-muted">{student.rollNo} • {student.enrolled}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <span className={`px-3 py-1 rounded-lg text-xs font-black border ${rc.bg} ${rc.border}`} style={{ color: rc.color }}>{rc.label}</span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-2xl font-black" style={{ color: rc.color }}>{student.riskScore}</span>
                                            <span className="text-xs text-dark-text-muted">risk</span>
                                        </div>
                                        <button className="p-2 bg-neon-panel border border-neon-border rounded-lg hover:border-neon-blue/50 text-dark-text-muted hover:text-neon-blue transition-colors" onClick={e => e.stopPropagation()}>
                                            <MessageSquare className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 bg-neon-panel border border-neon-border rounded-lg hover:border-neon-blue/50 text-dark-text-muted hover:text-neon-blue transition-colors" onClick={e => e.stopPropagation()}>
                                            <Eye className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {isSelected && (
                                    <div className="px-4 pb-4 border-t border-neon-border animate-in fade-in slide-in-from-top-2">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                                    <AlertTriangle className="w-4 h-4 text-amber-400" /> Risk Factors
                                                </h5>
                                                <div className="space-y-2">
                                                    {student.issues.map((issue, i) => (
                                                        <div key={i} className="flex items-center gap-2 text-sm text-dark-text-muted">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />{issue}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-4 flex gap-2">
                                                    <button className="text-xs px-3 py-1.5 bg-neon-panel border border-neon-blue/30 text-neon-blue rounded-lg font-bold hover:bg-neon-blue hover:text-neon-bg transition-all">Schedule Session</button>
                                                    <button className="text-xs px-3 py-1.5 bg-neon-panel border border-amber-500/30 text-amber-400 rounded-lg font-bold hover:bg-amber-500 hover:text-white transition-all">Send Alert</button>
                                                </div>
                                            </div>
                                            <div className="h-32">
                                                <h5 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                                    <Activity className="w-4 h-4 text-neon-blue" /> Score Trend
                                                </h5>
                                                <ResponsiveContainer width="100%" height="90%">
                                                    <AreaChart data={student.trend}>
                                                        <defs>
                                                            <linearGradient id={`tG${student.id}`} x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                                                                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                                            </linearGradient>
                                                        </defs>
                                                        <XAxis dataKey="w" stroke="#94a3b8" tick={{ fontSize: 10 }} />
                                                        <YAxis domain={[40, 100]} stroke="#94a3b8" tick={{ fontSize: 10 }} />
                                                        <Tooltip contentStyle={{ backgroundColor: '#12121A', borderColor: '#232333', color: '#fff', borderRadius: '8px', fontSize: '11px' }} />
                                                        <Area type="monotone" dataKey="s" stroke="#ef4444" strokeWidth={2} fill={`url(#tG${student.id})`} />
                                                    </AreaChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
