import React, { useState } from 'react';
import { GraduationCap, Zap, FileText, CheckSquare, BarChart3, Users, Sparkles, Copy, ChevronDown, ChevronUp } from 'lucide-react';

const generatedQuiz = [
    { q: 'What is the time complexity of accessing an element in a hash map?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'], correct: 2 },
    { q: 'Which data structure uses LIFO (Last In, First Out) order?', options: ['Queue', 'Stack', 'Tree', 'Graph'], correct: 1 },
    { q: 'In a Binary Search Tree, what is the time complexity of search in the best case?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'], correct: 1 },
];

const classPerformance = [
    { name: 'Priya S.', score: 92, status: 'excellent' },
    { name: 'Rohan G.', score: 78, status: 'good' },
    { name: 'Arjun M.', score: 61, status: 'needs attention' },
    { name: 'Sneha P.', score: 85, status: 'good' },
    { name: 'Rahul D.', score: 44, status: 'critical' },
];

const statusColor = {
    excellent: '#00ff88',
    good: '#00F0FF',
    'needs attention': '#f59e0b',
    critical: '#ef4444',
};

export default function FacultyCopilot() {
    const [activeTab, setActiveTab] = useState('quiz');
    const [topic, setTopic] = useState('');
    const [questionCount, setQuestionCount] = useState('5');
    const [difficulty, setDifficulty] = useState('medium');
    const [isGenerating, setIsGenerating] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);
    const [expandedQ, setExpandedQ] = useState(null);
    const [gradingText, setGradingText] = useState('');
    const [gradingResult, setGradingResult] = useState(null);

    const handleGenerate = () => {
        if (!topic.trim()) return;
        setIsGenerating(true);
        setShowQuiz(false);
        setTimeout(() => {
            setIsGenerating(false);
            setShowQuiz(true);
        }, 1800);
    };

    const handleGrade = () => {
        if (!gradingText.trim()) return;
        setTimeout(() => {
            setGradingResult({ score: 76, feedback: 'Good understanding of core concepts. Minor gaps in explaining time complexity trade-offs. Recommend reviewing BST deletion cases.', grade: 'B+' });
        }, 1200);
    };

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12 p-4 lg:p-6">

            {/* Header */}
            <div className="bg-neon-panel border border-neon-purple/30 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(178,0,255,0.1)]">
                <div className="absolute top-0 right-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                    <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
                        <GraduationCap className="w-8 h-8 text-neon-purple" />
                        Faculty AI Copilot
                    </h1>
                    <p className="text-dark-text-muted">Your AI teaching assistant: generate quizzes, auto-grade answers, and get class performance insights.</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
                {[
                    { id: 'quiz', label: 'Quiz Generator', icon: Zap },
                    { id: 'grade', label: 'Auto Grader', icon: CheckSquare },
                    { id: 'analytics', label: 'Class Analytics', icon: BarChart3 },
                ].map(tab => {
                    const Icon = tab.icon;
                    return (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === tab.id
                                ? 'bg-neon-purple text-white shadow-[0_0_15px_rgba(178,0,255,0.4)]'
                                : 'bg-neon-panel border border-neon-border text-dark-text-muted hover:text-white hover:border-neon-purple/30'}`}>
                            <Icon className="w-4 h-4" />{tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Quiz Generator Tab */}
            {activeTab === 'quiz' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3">
                    <div className="bg-neon-panel border border-neon-border rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-neon-purple" /> AI Quiz Generation
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="md:col-span-1">
                                <label className="text-xs font-bold text-dark-text-muted uppercase tracking-wider mb-2 block">Topic</label>
                                <input
                                    type="text"
                                    value={topic}
                                    onChange={e => setTopic(e.target.value)}
                                    placeholder="e.g., Data Structures, Newton's Laws…"
                                    className="w-full bg-neon-bg border border-neon-border rounded-xl px-4 py-3 text-white outline-none focus:border-neon-purple/60 transition-all text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-dark-text-muted uppercase tracking-wider mb-2 block">Questions</label>
                                <select value={questionCount} onChange={e => setQuestionCount(e.target.value)}
                                    className="w-full bg-neon-bg border border-neon-border rounded-xl px-4 py-3 text-white outline-none focus:border-neon-purple/60 transition-all text-sm">
                                    {['3', '5', '10', '15', '20'].map(n => <option key={n} value={n}>{n} questions</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-dark-text-muted uppercase tracking-wider mb-2 block">Difficulty</label>
                                <select value={difficulty} onChange={e => setDifficulty(e.target.value)}
                                    className="w-full bg-neon-bg border border-neon-border rounded-xl px-4 py-3 text-white outline-none focus:border-neon-purple/60 transition-all text-sm">
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                    <option value="mixed">Mixed</option>
                                </select>
                            </div>
                        </div>
                        <button onClick={handleGenerate} disabled={!topic.trim() || isGenerating}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${topic.trim()
                                ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-[0_0_20px_rgba(178,0,255,0.3)] hover:shadow-[0_0_30px_rgba(178,0,255,0.5)]'
                                : 'bg-white/5 text-slate-500 cursor-not-allowed'}`}>
                            {isGenerating ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Generating…</> : <><Zap className="w-4 h-4" />Generate Quiz</>}
                        </button>
                    </div>

                    {showQuiz && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold text-white">Generated Quiz: <span className="text-neon-purple">{topic}</span></h3>
                                <button className="flex items-center gap-2 text-sm text-dark-text-muted hover:text-white transition-colors">
                                    <Copy className="w-4 h-4" /> Copy All
                                </button>
                            </div>
                            {generatedQuiz.map((q, i) => (
                                <div key={i} className="bg-neon-panel border border-neon-border rounded-2xl overflow-hidden transition-all hover:border-neon-purple/30">
                                    <div className="p-5 flex items-start justify-between gap-4 cursor-pointer" onClick={() => setExpandedQ(expandedQ === i ? null : i)}>
                                        <div className="flex items-start gap-3">
                                            <span className="w-7 h-7 rounded-lg bg-neon-purple/10 border border-neon-purple/30 text-neon-purple font-black text-sm flex items-center justify-center shrink-0">
                                                {i + 1}
                                            </span>
                                            <p className="text-white font-medium text-sm leading-relaxed">{q.q}</p>
                                        </div>
                                        {expandedQ === i ? <ChevronUp className="w-4 h-4 text-dark-text-muted shrink-0" /> : <ChevronDown className="w-4 h-4 text-dark-text-muted shrink-0" />}
                                    </div>
                                    {expandedQ === i && (
                                        <div className="px-5 pb-5 border-t border-neon-border animate-in fade-in">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                                                {q.options.map((opt, j) => (
                                                    <div key={j} className={`px-4 py-2.5 rounded-xl text-sm border font-medium ${j === q.correct ? 'bg-[#00ff88]/10 border-[#00ff88]/40 text-[#00ff88]' : 'bg-neon-bg border-neon-border text-dark-text-muted'}`}>
                                                        {j === q.correct ? '✓ ' : ''}{String.fromCharCode(65 + j)}. {opt}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="flex gap-3 flex-wrap">
                                <button className="px-5 py-2.5 bg-neon-purple/10 border border-neon-purple/30 text-neon-purple rounded-xl font-bold text-sm hover:bg-neon-purple hover:text-white transition-all">
                                    Export as PDF
                                </button>
                                <button className="px-5 py-2.5 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue rounded-xl font-bold text-sm hover:bg-neon-blue hover:text-neon-bg transition-all">
                                    Publish to Students
                                </button>
                                <button onClick={handleGenerate} className="px-5 py-2.5 bg-neon-panel border border-neon-border text-dark-text-muted rounded-xl font-bold text-sm hover:text-white transition-all">
                                    Regenerate
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Auto Grader Tab */}
            {activeTab === 'grade' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3">
                    <div className="bg-neon-panel border border-neon-border rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                            <CheckSquare className="w-5 h-5 text-[#00ff88]" /> AI Auto Grader
                        </h3>
                        <p className="text-sm text-dark-text-muted mb-4">Paste a student's answer below. AI will analyze it against the topic and provide a score + detailed feedback.</p>
                        <textarea rows={6} value={gradingText} onChange={e => setGradingText(e.target.value)}
                            placeholder="Paste student's answer here…"
                            className="w-full bg-neon-bg border border-neon-border rounded-xl px-4 py-3 text-white outline-none focus:border-[#00ff88]/50 transition-all text-sm resize-none mb-4" />
                        <button onClick={handleGrade} disabled={!gradingText.trim()}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${gradingText.trim()
                                ? 'bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] hover:bg-[#00ff88] hover:text-neon-bg'
                                : 'bg-white/5 text-slate-500 cursor-not-allowed border border-transparent'}`}>
                            <CheckSquare className="w-4 h-4" /> Auto Grade
                        </button>
                    </div>

                    {gradingResult && (
                        <div className="bg-neon-panel border border-[#00ff88]/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(0,255,136,0.1)] animate-in fade-in slide-in-from-bottom-3">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-5xl font-black text-[#00ff88]">{gradingResult.grade}</div>
                                <div>
                                    <div className="text-2xl font-bold text-white">{gradingResult.score}/100</div>
                                    <div className="text-xs text-dark-text-muted uppercase tracking-wider font-bold">AI Score</div>
                                </div>
                                <div className="flex-1 h-3 bg-neon-bg rounded-full ml-4">
                                    <div className="h-full rounded-full bg-[#00ff88] transition-all" style={{ width: `${gradingResult.score}%`, boxShadow: '0 0 8px #00ff88' }} />
                                </div>
                            </div>
                            <div className="bg-neon-bg border border-neon-border rounded-xl p-4">
                                <h4 className="text-sm font-bold text-white mb-2">AI Feedback</h4>
                                <p className="text-sm text-slate-300 leading-relaxed">{gradingResult.feedback}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3">
                    <div className="bg-neon-panel border border-neon-border rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                            <Users className="w-5 h-5 text-neon-blue" /> Class Performance Overview
                        </h3>
                        <div className="space-y-3">
                            {classPerformance.map((s, i) => (
                                <div key={i} className="flex items-center gap-4 bg-neon-bg border border-neon-border rounded-xl p-4">
                                    <div className="w-10 h-10 rounded-full bg-neon-panel border border-neon-border flex items-center justify-center font-bold text-white shrink-0">
                                        {s.name.charAt(0)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-bold text-white">{s.name}</span>
                                            <span className="text-sm font-bold" style={{ color: statusColor[s.status] }}>{s.score}%</span>
                                        </div>
                                        <div className="h-2 bg-neon-panel rounded-full overflow-hidden">
                                            <div className="h-full rounded-full transition-all" style={{ width: `${s.score}%`, backgroundColor: statusColor[s.status], boxShadow: `0 0 6px ${statusColor[s.status]}` }} />
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold px-2 py-1 rounded-lg capitalize" style={{ color: statusColor[s.status], backgroundColor: `${statusColor[s.status]}15`, border: `1px solid ${statusColor[s.status]}30` }}>
                                        {s.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 grid grid-cols-3 gap-4">
                            <div className="bg-neon-bg border border-neon-border rounded-xl p-4 text-center">
                                <div className="text-2xl font-black text-[#00ff88]">72%</div>
                                <div className="text-xs text-dark-text-muted mt-1">Class Average</div>
                            </div>
                            <div className="bg-neon-bg border border-neon-border rounded-xl p-4 text-center">
                                <div className="text-2xl font-black text-amber-400">2</div>
                                <div className="text-xs text-dark-text-muted mt-1">Need Attention</div>
                            </div>
                            <div className="bg-neon-bg border border-neon-border rounded-xl p-4 text-center">
                                <div className="text-2xl font-black text-neon-blue">5</div>
                                <div className="text-xs text-dark-text-muted mt-1">Total Students</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
