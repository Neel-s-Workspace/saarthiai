import React, { useState } from 'react';
import { Briefcase, MapPin, Building, ExternalLink, Filter, Search, Zap } from 'lucide-react';

export default function OpportunityFinder() {
    const [jobs] = useState([
        { title: 'Frontend Developer Intern', company: 'Google', location: 'Bengaluru / Remote', match: 94, type: 'Internship', tags: ['React', 'TypeScript', 'UI/UX'] },
        { title: 'Backend Engineering Intern', company: 'Amazon', location: 'Hyderabad', match: 88, type: 'Internship', tags: ['Node.js', 'AWS', 'Microservices'] },
        { title: 'Full Stack Web Developer', company: 'Startup Inc', location: 'Remote', match: 82, type: 'Full-Time', tags: ['MERN', 'GraphQL'] },
        { title: 'Data Analyst Intern', company: 'Microsoft', location: 'Noida', match: 65, type: 'Internship', tags: ['SQL', 'Python', 'PowerBI'] },
    ]);

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#12121A] p-6 rounded-2xl border border-neon-blue/30 shadow-[0_0_15px_rgba(0,240,255,0.1)] gap-6">
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
                        <Briefcase className="w-8 h-8 mr-3 text-neon-blue" />
                        Opportunity Finder
                    </h1>
                    <p className="text-dark-text-muted">Discover internships and full-time roles matched by AI to your current skill matrix.</p>
                </div>

                <div className="w-full md:w-96 space-y-3">
                    <div className="relative border border-neon-border bg-neon-bg rounded-xl flex items-center px-4 py-3 focus-within:border-neon-blue transition-colors shadow-inner">
                        <Search className="w-5 h-5 text-slate-500 mr-2" />
                        <input type="text" placeholder="Search roles, skills, or companies..." className="bg-transparent border-none outline-none text-white w-full placeholder-slate-600" />
                    </div>
                </div>
            </div>

            <div className="flex space-x-2 overflow-x-auto pb-2">
                <button className="px-4 py-2 bg-neon-blue/20 text-neon-blue border border-neon-blue rounded-full text-sm font-bold whitespace-nowrap shadow-[0_0_10px_rgba(0,240,255,0.2)]">AI Top Matches</button>
                <button className="px-4 py-2 bg-neon-bg border border-neon-border text-slate-300 hover:text-white hover:border-neon-purple rounded-full text-sm font-bold whitespace-nowrap transition-colors">Software Engineering</button>
                <button className="px-4 py-2 bg-neon-bg border border-neon-border text-slate-300 hover:text-white hover:border-neon-purple rounded-full text-sm font-bold whitespace-nowrap transition-colors">Remote Internships</button>
                <button className="px-4 py-2 bg-neon-bg border border-neon-border text-slate-300 hover:text-white hover:border-neon-purple rounded-full text-sm font-bold whitespace-nowrap transition-colors flex items-center">
                    <Filter className="w-4 h-4 mr-1" /> Filters
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job, idx) => (
                    <div key={idx} className="bg-neon-panel p-6 rounded-2xl border border-neon-border hover:border-neon-blue transition-all group flex flex-col justify-between hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <span className={`text-xs font-bold px-3 py-1 rounded-md border ${job.type === 'Internship' ? 'bg-neon-purple/10 text-neon-purple border-neon-purple/30' : 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30'}`}>
                                    {job.type}
                                </span>
                                <span className="bg-neon-blue/10 text-neon-blue border border-neon-blue/30 px-2 py-1 rounded-md text-xs font-bold flex items-center">
                                    <Zap className="w-3 h-3 mr-1 fill-current" /> {job.match}% AI Match
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors leading-tight">{job.title}</h3>

                            <div className="space-y-2 mb-4">
                                <p className="text-sm text-slate-300 flex items-center">
                                    <Building className="w-4 h-4 mr-2 text-dark-text-muted" /> {job.company}
                                </p>
                                <p className="text-sm text-slate-300 flex items-center">
                                    <MapPin className="w-4 h-4 mr-2 text-dark-text-muted" /> {job.location}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {job.tags.map(tag => (
                                    <span key={tag} className="text-xs text-dark-text-muted bg-neon-bg border border-neon-border px-2 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-neon-border">
                            <button className="py-2.5 bg-neon-bg border border-neon-border hover:bg-slate-800 text-white rounded-xl text-sm font-bold transition-all text-center">
                                Save
                            </button>
                            <button className="py-2.5 bg-neon-blue/20 hover:bg-neon-blue border border-neon-blue text-neon-blue hover:text-neon-bg rounded-xl text-sm font-bold transition-all flex justify-center items-center shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                                Apply <ExternalLink className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
