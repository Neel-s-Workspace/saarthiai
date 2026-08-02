import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, AlertCircle, Play, CheckCircle2 } from 'lucide-react';

export default function ExamPlanner() {
    const [exams] = useState([
        { subject: 'Advanced Algorithms', date: '2023-11-15', diff: 'Hard', status: 'upcoming', topics: ['Dynamic Programming', 'Graph Theory', 'Flow Networks'] },
        { subject: 'Database Systems', date: '2023-11-18', diff: 'Medium', status: 'upcoming', topics: ['Transaction Management', 'Concurrency Control', 'Indexing'] },
        { subject: 'Cloud Computing', date: '2023-11-22', diff: 'Medium', status: 'upcoming', topics: ['AWS Architecture', 'Microservices', 'Docker'] },
    ]);

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">
            <div className="bg-[#12121A] p-8 rounded-3xl border border-[#00ff88]/30 shadow-[0_0_30px_rgba(0,255,136,0.1)] relative overflow-hidden flex flex-col md:flex-row justify-between items-center">
                <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-[#00ff88]/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 mb-6 md:mb-0">
                    <h1 className="text-4xl font-extrabold text-white mb-2 flex items-center">
                        <Calendar className="w-8 h-8 mr-3 text-[#00ff88]" />
                        Neural Exam Planner
                    </h1>
                    <p className="text-neon-blue font-medium text-lg">AI-Optimized Study Schedules & Micro-learning Modules.</p>
                </div>

                <div className="relative z-10 flex space-x-4">
                    <div className="bg-neon-bg/80 backdrop-blur-md px-6 py-4 rounded-xl border border-neon-border text-center">
                        <p className="text-xs text-dark-text-muted uppercase tracking-wider mb-1">Days to First Exam</p>
                        <p className="text-3xl font-extrabold text-[#00ff88]">12</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2 text-amber-500" /> Upcoming Assessments
                    </h3>

                    {exams.map((exam, i) => (
                        <div key={i} className="bg-neon-panel p-6 rounded-2xl border border-neon-border hover:border-[#00ff88]/50 transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors">{exam.subject}</h4>
                                    <p className="text-sm text-dark-text-muted mt-1 flex items-center">
                                        <Clock className="w-4 h-4 mr-1 text-neon-blue" /> Scheduled: {exam.date}
                                    </p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${exam.diff === 'Hard' ? 'bg-red-500/10 text-red-500 border-red-500/50' : 'bg-amber-500/10 text-amber-500 border-amber-500/50'}`}>
                                    {exam.diff}
                                </span>
                            </div>

                            <div className="bg-neon-bg p-4 rounded-xl border border-neon-border">
                                <p className="text-xs text-neon-purple font-bold uppercase tracking-wider mb-2">AI Suggested Focus Topics</p>
                                <div className="flex flex-wrap gap-2">
                                    {exam.topics.map((t, idx) => (
                                        <span key={idx} className="text-sm text-slate-300 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700 font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 flex space-x-3">
                                <button className="flex-1 py-2.5 bg-[#00ff88]/10 hover:bg-[#00ff88] border border-[#00ff88]/50 hover:border-[#00ff88] text-[#00ff88] hover:text-[#12121A] rounded-xl font-bold transition-all text-sm flex items-center justify-center">
                                    <Play className="w-4 h-4 mr-2" /> Start Micro-Session
                                </button>
                                <button className="flex-1 py-2.5 bg-neon-bg hover:bg-neon-blue/10 border border-neon-border hover:border-neon-blue/50 text-white rounded-xl font-bold transition-all text-sm flex items-center justify-center">
                                    <BookOpen className="w-4 h-4 mr-2 text-neon-blue" /> Generate Mock Test
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border">
                        <h3 className="text-lg font-bold text-white mb-6 border-b border-neon-border pb-3">AI Study Plan for Today</h3>

                        <div className="space-y-4">
                            {[
                                { time: '18:00', task: 'Review DP Concepts', subject: 'Advanced Algorithms', done: true },
                                { time: '19:30', task: 'Solve 2 Graph Problems', subject: 'Advanced Algorithms', done: false },
                                { time: '21:00', task: 'Read Concurrency Chapter', subject: 'Database Systems', done: false }
                            ].map((task, i) => (
                                <div key={i} className="flex items-start space-x-4">
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs font-bold text-neon-blue">{task.time}</span>
                                        <div className="w-px h-10 bg-neon-border my-1"></div>
                                    </div>
                                    <div className={`flex-1 p-3 rounded-xl border ${task.done ? 'bg-[#00ff88]/5 border-[#00ff88]/20' : 'bg-neon-bg border-neon-border'} transition-colors`}>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className={`text-sm font-bold ${task.done ? 'text-slate-500 line-through' : 'text-white'}`}>{task.task}</p>
                                                <p className="text-xs text-dark-text-muted mt-0.5">{task.subject}</p>
                                            </div>
                                            {task.done ? <CheckCircle2 className="w-4 h-4 text-[#00ff88]" /> : <div className="w-4 h-4 rounded-full border border-slate-500"></div>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-6 py-3 bg-neon-purple/10 hover:bg-neon-purple border border-neon-purple/50 hover:border-neon-purple text-neon-purple hover:text-white rounded-xl font-bold transition-all text-sm shadow-[0_0_15px_rgba(178,0,255,0.2)]">
                            Resync Time-table
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
