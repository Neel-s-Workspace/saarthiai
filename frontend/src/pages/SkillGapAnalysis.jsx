import React, { useState } from 'react';
import { Target, Layers, Zap, ArrowRight, BookOpen } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function SkillGapAnalysis() {
    const careerDataMap = {
        'Full Stack Developer': [
            { subject: 'Frontend (React)', A: 85, fullMark: 100 },
            { subject: 'Backend (Node)', A: 65, fullMark: 100 },
            { subject: 'Database (SQL)', A: 50, fullMark: 100 },
            { subject: 'Cloud (AWS)', A: 30, fullMark: 100 },
            { subject: 'System Design', A: 45, fullMark: 100 },
            { subject: 'Algorithms', A: 70, fullMark: 100 },
        ],
        'Data Scientist': [
            { subject: 'Python', A: 90, fullMark: 100 },
            { subject: 'Machine Learning', A: 75, fullMark: 100 },
            { subject: 'Statistics', A: 80, fullMark: 100 },
            { subject: 'Data Viz', A: 70, fullMark: 100 },
            { subject: 'SQL', A: 60, fullMark: 100 },
            { subject: 'Deep Learning', A: 40, fullMark: 100 },
        ]
    };
    const [targetCareer, setTargetCareer] = useState('Full Stack Developer');

    const [data] = useState([
        { subject: 'Frontend (React)', A: 85, fullMark: 100 },
        { subject: 'Backend (Node)', A: 65, fullMark: 100 },
        { subject: 'Database (SQL)', A: 50, fullMark: 100 },
        { subject: 'Cloud (AWS)', A: 30, fullMark: 100 },
        { subject: 'System Design', A: 45, fullMark: 100 },
        { subject: 'Algorithms', A: 70, fullMark: 100 },
    ]);

    const gaps = [
        { skill: 'Cloud (AWS)', discrepancy: 'high', recommendation: 'Take "AWS Certified Developer" course. Expected timeframe: 4 weeks.' },
        { skill: 'Database (SQL)', discrepancy: 'medium', recommendation: 'Complete advanced indexing and query optimization module.' },
        { skill: 'System Design', discrepancy: 'medium', recommendation: 'Read "Designing Data-Intensive Applications".' }
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">
            <div className="bg-neon-panel p-8 rounded-3xl border border-neon-border shadow-[0_0_15px_rgba(0,240,255,0.1)] flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
                        <Layers className="w-8 h-8 mr-3 text-neon-blue" />
                        AI Skill Gap Analyzer
                    </h1>
                    <p className="text-dark-text-muted">Compare your current proficiencies against enterprise requirements.</p>
                </div>

                <div className="hidden md:flex items-center space-x-4 bg-neon-bg border border-neon-border rounded-xl p-2 px-4">
                    <span className="text-sm font-bold text-neon-purple uppercase tracking-wider">Target Role:</span>
                    <select
                        value={targetCareer}
                        onChange={(e) => setTargetCareer(e.target.value)}
                        className="bg-transparent text-white border-none outline-none font-bold cursor-pointer"
                    >
                        <option value="Full Stack Developer">Full Stack Developer</option>
                        <option value="Data Scientist">Data Scientist</option>
                        <option value="Cloud Architect">Cloud Architect</option>
                        <option value="Cybersec Analyst">Cybersec Analyst</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border h-96 relative group hover:border-neon-blue transition-colors">
                    <div className="absolute top-4 right-4 bg-neon-blue/10 text-neon-blue border border-neon-blue/30 px-3 py-1 rounded-lg text-xs font-bold animate-pulse">
                        Live Profile Sync
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 text-center">Competency Matrix vs. {targetCareer}</h3>

                    <ResponsiveContainer width="100%" height="90%">
                        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={careerDataMap[targetCareer] || data}>
                            <PolarGrid stroke="#232333" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar name="Student Profile" dataKey="A" stroke="#00F0FF" strokeWidth={3} fill="#00F0FF" fillOpacity={0.2} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                    <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border">
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center border-b border-neon-border pb-3">
                            <Target className="w-5 h-5 mr-2 text-neon-purple" /> Focus Areas Identified
                        </h3>

                        <div className="space-y-4">
                            {gaps.map((gap, i) => (
                                <div key={i} className="p-4 bg-neon-bg border border-neon-border rounded-xl hover:border-neon-blue/50 transition-colors">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-white">{gap.skill}</h4>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-lg border ${gap.discrepancy === 'high'
                                                ? 'bg-red-500/10 text-red-500 border-red-500/50'
                                                : 'bg-amber-500/10 text-amber-500 border-amber-500/50'
                                            }`}>
                                            {gap.discrepancy === 'high' ? 'Critical Gap' : 'Moderate Gap'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-dark-text-muted mb-4">{gap.recommendation}</p>

                                    <button className="text-xs font-bold text-neon-blue flex items-center hover:text-white transition-colors">
                                        <BookOpen className="w-3 h-3 mr-1" /> View Recommended Modules <ArrowRight className="w-3 h-3 ml-1" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="w-full py-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 hover:from-neon-blue hover:to-neon-purple border border-neon-blue text-white rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(0,240,255,0.2)] flex items-center justify-center">
                        <Zap className="w-5 h-5 mr-2" />
                        Generate Weekly Study Plan
                    </button>
                </div>
            </div>
        </div>
    );
}
