import React from 'react';
import { Swords, Trophy, Flame, Users, Zap, Shield } from 'lucide-react';

export default function QuizBattle() {
    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">
            <div className="bg-[#12121A] p-8 rounded-3xl border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.15)] relative overflow-hidden flex flex-col md:flex-row justify-between items-center">
                <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-amber-500/20 rounded-full blur-2xl"></div>

                <div className="relative z-10 mb-6 md:mb-0 max-w-xl">
                    <h1 className="text-4xl font-extrabold text-white mb-2 flex items-center">
                        <Swords className="w-8 h-8 mr-3 text-red-500" />
                        Live Cyber Quiz Battle
                    </h1>
                    <p className="text-amber-400 font-medium text-lg mb-4">Challenge classmates in real-time academic duels to climb the department leaderboard.</p>
                </div>

                <div className="relative z-10 flex space-x-4">
                    <div className="bg-neon-panel p-4 rounded-xl border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)] text-center w-32">
                        <Flame className="w-8 h-8 text-amber-500 mx-auto mb-1 animate-pulse" />
                        <p className="text-2xl font-extrabold text-white">Lv. 14</p>
                        <p className="text-xs text-red-400 font-bold uppercase tracking-wider mt-1">Combat Rating</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border hover:shadow-[0_0_20px_rgba(239,68,68,0.1)] transition-all">
                        <div className="flex justify-between items-center mb-6 border-b border-neon-border pb-3">
                            <h3 className="text-xl font-bold text-white flex items-center">
                                <Zap className="w-5 h-5 mr-2 text-amber-500" /> Active Battle Arenas
                            </h3>
                            <span className="flex items-center text-sm font-bold text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-full border border-neon-blue/30">
                                <Users className="w-4 h-4 mr-2" /> 42 Players Online
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-neon-bg border border-neon-border p-5 rounded-xl flex flex-col md:flex-row justify-between md:items-center hover:border-red-500/50 group transition-colors">
                                <div className="mb-4 md:mb-0">
                                    <h4 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">Data Structures Gauntlet</h4>
                                    <p className="text-sm text-dark-text-muted mt-1">1v1 Fast-Paced MCQ • Topics: Trees, Graphs, Hash Maps</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/30">Win: +50 XP</span>
                                    <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-[0_0_10px_rgba(239,68,68,0.5)] transition-colors">
                                        Join Match
                                    </button>
                                </div>
                            </div>

                            <div className="bg-neon-bg border border-neon-border p-5 rounded-xl flex flex-col md:flex-row justify-between md:items-center hover:border-neon-blue/50 group transition-colors">
                                <div className="mb-4 md:mb-0">
                                    <h4 className="text-lg font-bold text-white group-hover:text-neon-blue transition-colors">Computer Networks Royale</h4>
                                    <p className="text-sm text-dark-text-muted mt-1">4-Player Free-for-All • Topics: OSI Model, TCP/IP</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-xs font-bold text-neon-blue bg-neon-blue/10 px-2 py-1 rounded border border-neon-blue/30">Win: +120 XP</span>
                                    <button className="px-6 py-2 bg-neon-blue/20 hover:bg-neon-blue border border-neon-blue hover:text-neon-bg text-neon-blue font-bold rounded-lg shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-colors">
                                        Queue (2/4)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Trophy className="w-32 h-32 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center relative z-10 border-b border-neon-border pb-3">
                            <Trophy className="w-5 h-5 mr-2 text-amber-500" /> Global Leaderboard
                        </h3>

                        <div className="space-y-4 relative z-10">
                            {[
                                { rank: 1, name: 'Alex M.', points: 14200, color: 'text-amber-500' },
                                { rank: 2, name: 'Sarah K.', points: 13850, color: 'text-slate-300' },
                                { rank: 3, name: 'Rahul D.', points: 12900, color: 'text-amber-700' },
                                { rank: 4, name: 'You', points: 10450, color: 'text-neon-blue', highlight: true },
                                { rank: 5, name: 'Priya S.', points: 9800, color: 'text-white' },
                            ].map((user) => (
                                <div key={user.rank} className={`flex items-center justify-between p-3 rounded-xl ${user.highlight ? 'bg-neon-blue/10 border border-neon-blue/30' : 'bg-neon-bg border border-neon-border'}`}>
                                    <div className="flex items-center space-x-3">
                                        <span className={`font-bold w-6 text-center ${user.color}`}>#{user.rank}</span>
                                        <span className={`font-bold ${user.highlight ? 'text-neon-blue' : 'text-slate-300'}`}>{user.name}</span>
                                    </div>
                                    <span className="text-sm font-mono text-dark-text-muted">{user.points} XP</span>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-6 py-3 bg-neon-bg border border-neon-border text-slate-400 hover:text-white rounded-xl font-bold transition-colors text-sm flex items-center justify-center">
                            <Shield className="w-4 h-4 mr-2" /> View Full Rankings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
