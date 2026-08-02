import React from 'react';
import { Terminal, Play, Crosshair, Award, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function PlacementPrep() {
    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">
            <div className="bg-[#12121A] p-8 rounded-3xl border border-[#B200FF]/30 shadow-[0_0_30px_rgba(178,0,255,0.1)] relative overflow-hidden flex flex-col md:flex-row justify-between items-center">
                <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-[#B200FF]/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 mb-6 md:mb-0 max-w-xl">
                    <h1 className="text-4xl font-extrabold text-white mb-2 flex items-center">
                        <Crosshair className="w-8 h-8 mr-3 text-[#B200FF]" />
                        Placement Prep Simulator
                    </h1>
                    <p className="text-neon-blue font-medium text-lg mb-4">Master coding rounds and system design interviews with AI-driven mock sessions.</p>
                </div>

                <div className="relative z-10 text-center bg-neon-panel p-4 rounded-xl border border-neon-border shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <p className="text-xs text-dark-text-muted uppercase tracking-wider mb-1">Pre-Placement Score</p>
                    <div className="text-4xl font-extrabold text-[#00ff88] flex items-center justify-center">
                        78% <Award className="w-6 h-6 ml-2 text-amber-500" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border group hover:border-neon-blue transition-colors relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                        <Terminal className="w-12 h-12 text-neon-blue/20 group-hover:text-neon-blue/40 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Coding Arena</h3>
                    <p className="text-sm text-dark-text-muted mb-6 w-3/4">Practice algorithmic problem solving in real-time with our AI proctor analyzing your complexity.</p>

                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center p-3 bg-neon-bg border border-neon-border rounded-xl">
                            <div>
                                <p className="text-sm font-bold text-white">Two Sum [Optimized]</p>
                                <p className="text-xs text-neon-blue">Easy • Array/Map</p>
                            </div>
                            <CheckCircle2 className="w-5 h-5 text-[#00ff88]" />
                        </div>
                        <div className="flex justify-between items-center p-3 bg-neon-bg border border-neon-border border-l-4 border-l-amber-500 rounded-xl">
                            <div>
                                <p className="text-sm font-bold text-white">LRU Cache</p>
                                <p className="text-xs text-amber-500">Medium • Design/List</p>
                            </div>
                            <button className="text-xs px-2 py-1 bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-white transition-colors rounded-lg font-bold border border-amber-500/30">Resume</button>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-neon-bg border border-neon-border rounded-xl opacity-60">
                            <div>
                                <p className="text-sm font-bold text-white">Alien Dictionary</p>
                                <p className="text-xs text-red-500">Hard • Graph/Topo-Sort</p>
                            </div>
                            <button className="text-xs px-2 py-1 bg-neon-bg border border-neon-border text-slate-400 hover:text-white transition-colors rounded-lg font-bold">Start</button>
                        </div>
                    </div>

                    <button className="w-full py-3 bg-neon-blue/20 hover:bg-neon-blue border border-neon-blue text-neon-blue hover:text-neon-bg rounded-xl font-bold transition-all flex justify-center items-center shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                        <Play className="w-4 h-4 mr-2" /> Enter Coding Arena
                    </button>
                </div>

                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border group hover:border-[#B200FF] transition-colors relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-4">
                        <Crosshair className="w-12 h-12 text-neon-purple/20 group-hover:text-neon-purple/40 transition-colors" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">AI Mock Interviews</h3>
                        <p className="text-sm text-dark-text-muted mb-6 w-3/4">Engage in vocal, technical, or HR interviews with an AI bot that evaluates confidence and clarity.</p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="p-4 bg-neon-bg border border-neon-border rounded-xl hover:border-neon-purple/50 cursor-pointer transition-colors text-center group/card">
                                <div className="text-2xl mb-2 group-hover/card:scale-110 transition-transform">🗣️</div>
                                <h4 className="text-sm font-bold text-white">HR / Behavioral</h4>
                                <p className="text-xs text-slate-400 mt-1">STAR Method Prep</p>
                            </div>
                            <div className="p-4 bg-neon-purple/10 border border-neon-purple/50 rounded-xl cursor-pointer transition-colors text-center relative overflow-hidden group/card shadow-[0_0_10px_rgba(178,0,255,0.2)]">
                                <div className="absolute inset-0 bg-neon-purple/20 animate-pulse"></div>
                                <div className="relative z-10 text-2xl mb-2 group-hover/card:scale-110 transition-transform">⚙️</div>
                                <h4 className="text-sm font-bold text-white relative z-10">System Design</h4>
                                <p className="text-xs text-neon-blue font-medium mt-1 relative z-10">Scalability Focus</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-full mt-4 py-3 bg-neon-purple/20 hover:bg-neon-purple border border-neon-purple text-neon-purple hover:text-white rounded-xl font-bold transition-all flex justify-center items-center shadow-[0_0_15px_rgba(178,0,255,0.3)]">
                        Initialize Voice Session <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
}
