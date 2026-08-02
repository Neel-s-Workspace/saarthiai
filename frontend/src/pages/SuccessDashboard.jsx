import React, { useState } from 'react';
import { Star, TrendingUp, Target, Award, Flame, BookOpen, Zap, Activity, BarChart3, CheckCircle, AlertCircle, ArrowUp, ArrowDown, ChevronRight } from 'lucide-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    RadialBarChart, RadialBar, PieChart, Pie, Cell
} from 'recharts';

const weeklyProgress = [
    { day: 'Mon', study: 2.5, quizzes: 3 },
    { day: 'Tue', study: 3.2, quizzes: 5 },
    { day: 'Wed', study: 1.8, quizzes: 2 },
    { day: 'Thu', study: 4.1, quizzes: 6 },
    { day: 'Fri', study: 3.5, quizzes: 4 },
    { day: 'Sat', study: 5.2, quizzes: 8 },
    { day: 'Sun', study: 2.0, quizzes: 1 },
];

const moduleScores = [
    { name: 'Career', value: 82, fill: '#00F0FF' },
    { name: 'Academic', value: 74, fill: '#B200FF' },
    { name: 'Wellness', value: 91, fill: '#00ff88' },
    { name: 'Skills', value: 63, fill: '#f59e0b' },
];

const RADIAN = Math.PI / 180;
const healthData = [{ name: 'Success Score', value: 78, fill: '#00F0FF' }];

const achievements = [
    { icon: '🏆', title: '7-Day Streak', subtitle: 'Consecutive login days', color: 'amber' },
    { icon: '🎯', title: 'Quiz Master', subtitle: '50 quizzes completed', color: 'blue' },
    { icon: '🚀', title: 'Roadmap Pioneer', subtitle: 'Career path set up', color: 'purple' },
    { icon: '📚', title: 'Note Scholar', subtitle: '20 notes summarized by AI', color: 'green' },
];

const aiInsights = [
    { type: 'warning', icon: AlertCircle, text: 'Your Cloud (AWS) skill score dropped 8% this week. Consider dedicating 1hr to AWS modules.', color: 'amber' },
    { type: 'tip', icon: TrendingUp, text: 'Placement readiness is up 12% — great progress on mock interviews this week!', color: 'green' },
    { type: 'action', icon: Zap, text: '3 new internships match your skill profile. Visit Opportunities before they expire.', color: 'blue' },
];

export default function SuccessDashboard() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-12 p-4 lg:p-6">

            {/* Header Banner */}
            <div className="bg-neon-panel rounded-3xl border border-neon-border p-8 relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.08)]">
                <div className="absolute top-0 right-0 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
                            <Star className="w-8 h-8 text-amber-400" />
                            Student Success Dashboard
                        </h1>
                        <p className="text-dark-text-muted">Your complete 360° academic, career & wellness performance at a glance.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-center">
                            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">78</div>
                            <div className="text-xs text-dark-text-muted font-bold uppercase tracking-wider">Success Score</div>
                        </div>
                        <div className="h-16 w-px bg-neon-border" />
                        <div className="text-center">
                            <div className="flex items-center gap-1 text-2xl font-black text-[#00ff88]">
                                <ArrowUp className="w-5 h-5" /> 12%
                            </div>
                            <div className="text-xs text-dark-text-muted font-bold uppercase tracking-wider">vs Last Week</div>
                        </div>
                        <div className="h-16 w-px bg-neon-border" />
                        <div className="text-center">
                            <div className="flex items-center gap-1 text-2xl font-black text-amber-400">
                                <Flame className="w-5 h-5" /> 7
                            </div>
                            <div className="text-xs text-dark-text-muted font-bold uppercase tracking-wider">Day Streak</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 flex-wrap">
                {['overview', 'academic', 'career', 'wellness'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2.5 rounded-xl font-bold text-sm capitalize transition-all ${activeTab === tab
                            ? 'bg-neon-blue text-neon-bg shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                            : 'bg-neon-panel border border-neon-border text-dark-text-muted hover:text-white hover:border-neon-blue/30'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3">

                    {/* KPI Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: 'Attendance', value: '84%', delta: '+2%', trend: 'up', color: 'neon-blue', icon: Activity },
                            { label: 'CGPA', value: '8.4', delta: '+0.2', trend: 'up', color: 'neon-purple', icon: BookOpen },
                            { label: 'Quizzes Won', value: '23', delta: '+5', trend: 'up', color: '[#00ff88]', icon: Target },
                            { label: 'Skills Mapped', value: '14', delta: '-1', trend: 'down', color: 'amber-400', icon: BarChart3 },
                        ].map((card) => {
                            const Icon = card.icon;
                            return (
                                <div key={card.label} className="bg-neon-panel border border-neon-border rounded-2xl p-5 hover:border-neon-blue/30 transition-all group">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-xs font-bold text-dark-text-muted uppercase tracking-wider">{card.label}</p>
                                        <Icon className={`w-4 h-4 text-${card.color}`} />
                                    </div>
                                    <p className={`text-3xl font-black text-${card.color} mb-1`}>{card.value}</p>
                                    <div className={`flex items-center gap-1 text-xs font-bold ${card.trend === 'up' ? 'text-[#00ff88]' : 'text-red-400'}`}>
                                        {card.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                                        {card.delta} this week
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Charts Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Weekly Study Activity */}
                        <div className="lg:col-span-2 bg-neon-panel border border-neon-border rounded-2xl p-6 h-72">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-neon-blue" /> Weekly Study Activity
                            </h3>
                            <ResponsiveContainer width="100%" height="80%">
                                <AreaChart data={weeklyProgress}>
                                    <defs>
                                        <linearGradient id="studyGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#00F0FF" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#00F0FF" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#232333" vertical={false} />
                                    <XAxis dataKey="day" stroke="#94a3b8" tick={{ fontSize: 12 }} />
                                    <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} />
                                    <Tooltip contentStyle={{ backgroundColor: '#12121A', borderColor: '#232333', color: '#fff', borderRadius: '12px' }} />
                                    <Area type="monotone" dataKey="study" name="Hours Studied" stroke="#00F0FF" strokeWidth={2.5} fill="url(#studyGrad)" />
                                    <Area type="monotone" dataKey="quizzes" name="Quizzes Done" stroke="#B200FF" strokeWidth={2} fill="transparent" strokeDasharray="4 4" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Module Performance Breakdown */}
                        <div className="bg-neon-panel border border-neon-border rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <BarChart3 className="w-5 h-5 text-neon-purple" /> Module Scores
                            </h3>
                            <div className="space-y-4">
                                {moduleScores.map((m) => (
                                    <div key={m.name}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-dark-text-muted font-medium">{m.name}</span>
                                            <span className="font-bold text-white">{m.value}%</span>
                                        </div>
                                        <div className="h-2 bg-neon-bg rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000"
                                                style={{ width: `${m.value}%`, backgroundColor: m.fill, boxShadow: `0 0 8px ${m.fill}` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* AI Insights */}
                    <div className="bg-neon-panel border border-neon-border rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-amber-400" /> AI Insights & Recommendations
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {aiInsights.map((insight, i) => {
                                const Icon = insight.icon;
                                const colorMap = { amber: 'amber-400', green: '[#00ff88]', blue: 'neon-blue' };
                                const c = colorMap[insight.color];
                                return (
                                    <div key={i} className={`bg-neon-bg border border-${c === 'amber-400' ? 'amber-500' : c === '[#00ff88]' ? '[#00ff88]' : 'neon-blue'}/20 rounded-xl p-4 flex gap-3`}>
                                        <Icon className={`w-5 h-5 text-${c} shrink-0 mt-0.5`} />
                                        <p className="text-sm text-slate-300 leading-relaxed">{insight.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="bg-neon-panel border border-neon-border rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-amber-400" /> Recent Achievements
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {achievements.map((ach, i) => (
                                <div key={i} className="bg-neon-bg border border-neon-border rounded-xl p-4 flex flex-col items-center text-center hover:border-neon-purple/30 transition-all group">
                                    <div className="text-4xl mb-3">{ach.icon}</div>
                                    <h4 className="font-bold text-white text-sm">{ach.title}</h4>
                                    <p className="text-xs text-dark-text-muted mt-1">{ach.subtitle}</p>
                                    <div className="w-6 h-1 bg-neon-purple/40 mt-3 rounded-full group-hover:bg-neon-purple transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Academic Tab */}
            {activeTab === 'academic' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3">
                    <div className="bg-neon-panel border border-neon-border rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-6">Academic Performance</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { subject: 'Data Structures', grade: 'A+', score: 94, trend: '+4' },
                                { subject: 'Database Systems', grade: 'B+', score: 78, trend: '-2' },
                                { subject: 'Computer Networks', grade: 'A', score: 88, trend: '+6' },
                                { subject: 'Software Engineering', grade: 'B', score: 74, trend: '0' },
                                { subject: 'Machine Learning', grade: 'A+', score: 96, trend: '+8' },
                                { subject: 'Cryptography', grade: 'C+', score: 62, trend: '-5' },
                            ].map((s, i) => (
                                <div key={i} className="bg-neon-bg border border-neon-border rounded-xl p-4">
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="font-bold text-white text-sm">{s.subject}</h4>
                                        <span className={`text-sm font-black px-2 py-0.5 rounded ${s.score >= 90 ? 'text-[#00ff88] bg-[#00ff88]/10' : s.score >= 75 ? 'text-neon-blue bg-neon-blue/10' : s.score >= 60 ? 'text-amber-400 bg-amber-400/10' : 'text-red-400 bg-red-500/10'}`}>{s.grade}</span>
                                    </div>
                                    <div className="h-2 bg-neon-panel rounded-full mb-2">
                                        <div className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" style={{ width: `${s.score}%` }} />
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-dark-text-muted">{s.score}%</span>
                                        <span className={parseInt(s.trend) > 0 ? 'text-[#00ff88]' : parseInt(s.trend) < 0 ? 'text-red-400' : 'text-dark-text-muted'}>{s.trend !== '0' ? s.trend + '%' : 'Stable'}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Career Tab */}
            {activeTab === 'career' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3">
                    <div className="bg-neon-panel border border-neon-border rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Career Readiness Score</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Resume Score', value: '88%', color: '#00F0FF' },
                                { label: 'Interview Ready', value: '72%', color: '#B200FF' },
                                { label: 'Skill Match', value: '80%', color: '#00ff88' },
                                { label: 'Projects Done', value: '5/8', color: '#f59e0b' },
                            ].map((item, i) => (
                                <div key={i} className="bg-neon-bg border border-neon-border rounded-xl p-5 text-center">
                                    <div className="text-3xl font-black mb-2" style={{ color: item.color }}>{item.value}</div>
                                    <p className="text-xs text-dark-text-muted font-bold uppercase tracking-wider">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Wellness Tab */}
            {activeTab === 'wellness' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3">
                    <div className="bg-neon-panel border border-neon-border rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Wellness Overview</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: 'Mental Score', value: 91, icon: '🧠', color: '#00ff88', note: 'Excellent – Keep it up' },
                                { label: 'Stress Level', value: 34, icon: '😌', color: '#00F0FF', note: 'Low – Well managed' },
                                { label: 'Sleep Quality', value: 68, icon: '🌙', color: '#B200FF', note: 'Fair – Try 8hrs' },
                            ].map((w, i) => (
                                <div key={i} className="bg-neon-bg border border-neon-border rounded-2xl p-6 text-center">
                                    <div className="text-4xl mb-3">{w.icon}</div>
                                    <div className="text-4xl font-black mb-2" style={{ color: w.color }}>{w.value}%</div>
                                    <p className="font-bold text-white mb-1">{w.label}</p>
                                    <p className="text-xs text-dark-text-muted">{w.note}</p>
                                    <div className="mt-4 h-2 bg-neon-panel rounded-full overflow-hidden">
                                        <div className="h-full rounded-full transition-all" style={{ width: `${w.value}%`, backgroundColor: w.color }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
