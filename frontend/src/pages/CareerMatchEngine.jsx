import React, { useState } from 'react';
import { Target, Search, BarChart3, Star, Zap } from 'lucide-react';

export default function CareerMatchEngine() {
    const [searchQuery, setSearchQuery] = useState('');
    const matches = [
        { role: 'Security Engineer', match: 92, salary: '₹18-24 LPA', demand: 'High', tags: ['Network Sec', 'Cryptography', 'Python'] },
        { role: 'Backend Developer', match: 85, salary: '₹12-18 LPA', demand: 'Very High', tags: ['Node.js', 'PostgreSQL', 'Microservices'] },
        { role: 'DevOps Engineer', match: 78, salary: '₹15-22 LPA', demand: 'High', tags: ['AWS', 'Docker', 'CI/CD'] },
        { role: 'Data Scientist', match: 65, salary: '₹14-25 LPA', demand: 'High', tags: ['Machine Learning', 'Python', 'SQL'] },
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">
            <div className="bg-[#12121A] p-8 rounded-3xl border border-neon-blue/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-[#00ff88]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-50%] right-[-10%] w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-4xl font-extrabold text-white mb-4">Neural Career Match Engine</h1>
                    <p className="text-dark-text-muted text-lg mb-8">
                        Our AI has analyzed your academic performance, skill assessments, and interests to predict your optimal career trajectories in the tech industry.
                    </p>

                    <div className="relative w-full max-w-md mx-auto">
                        <input
                            type="text"
                            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Explore specific roles..."
                            className="w-full pl-12 pr-4 py-4 bg-neon-bg/80 border border-neon-border rounded-xl focus:ring-2 focus:ring-[#00ff88] focus:border-[#00ff88] text-white placeholder-slate-500 outline-none backdrop-blur-md"
                        />
                        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
                    </div>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-neon-blue" />
                AI Compatibility Analysis
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {matches.filter(m => m.role.toLowerCase().includes(searchQuery.toLowerCase())).map((match, idx) => (
                    <div key={idx} className="bg-neon-panel p-6 rounded-2xl border border-neon-border hover:border-[#00ff88]/50 transition-all hover:shadow-[0_0_15px_rgba(0,255,136,0.1)] group">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors">{match.role}</h4>
                                <div className="flex space-x-2 mt-2">
                                    {match.tags.map((tag, i) => (
                                        <span key={i} className="text-xs bg-neon-bg border border-neon-border text-slate-400 px-2 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="w-16 h-16 rounded-full border-4 border-[#00ff88]/20 flex items-center justify-center relative shadow-[0_0_10px_rgba(0,255,136,0.2)]">
                                <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 64 64">
                                    <circle cx="32" cy="32" r="26" fill="transparent" stroke="rgba(0, 255, 136, 0.1)" strokeWidth="4" />
                                    <circle cx="32" cy="32" r="26" fill="transparent" stroke="#00ff88" strokeWidth="4" strokeDasharray="163" strokeDashoffset={163 - (163 * match.match) / 100} className="transition-all duration-1000 ease-out" />
                                </svg>
                                <span className={`text-lg font-extrabold text-[#00ff88]`}>{match.match}%</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-6 border-t border-neon-border pt-4">
                            <div>
                                <p className="text-xs text-dark-text-muted uppercase tracking-wider mb-1">Avg. Salary</p>
                                <p className="text-sm font-bold text-white flex items-center"><Zap className="w-3 h-3 text-neon-purple mr-1" /> {match.salary}</p>
                            </div>
                            <div>
                                <p className="text-xs text-dark-text-muted uppercase tracking-wider mb-1">Industry Demand</p>
                                <p className="text-sm font-bold text-white flex items-center"><Target className="w-3 h-3 text-neon-blue mr-1" /> {match.demand}</p>
                            </div>
                        </div>

                        <button className="w-full mt-6 py-3 bg-neon-bg border border-neon-border group-hover:bg-[#00ff88]/10 group-hover:border-[#00ff88]/50 text-white group-hover:text-[#00ff88] rounded-xl font-bold transition-all text-sm flex items-center justify-center">
                            Explore Path <Star className="w-4 h-4 ml-2 fill-current" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
