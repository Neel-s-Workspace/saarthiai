import React, { useState } from 'react';
import { Compass, ExternalLink, Sparkles, Target, Zap } from 'lucide-react';

export default function CareerRoadmap() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [roadmap, setRoadmap] = useState(null);
    const [details, setDetails] = useState({
        major: 'Computer Science',
        currentSemester: '6th Semester',
        interests: 'Artificial Intelligence, Backend Development'
    });

    const handleGenerate = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/ai/roadmap', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(details)
            });
            const data = await response.json();
            if (data.roadmap) {
                setRoadmap(data.roadmap);
            }
        } catch (error) {
            console.error("Failed to fetch roadmap", error);
            setErrorMessage("Unable to generate roadmap from AI service. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6 pb-12">
            <div className="bg-[#12121A] p-8 rounded-3xl border border-neon-blue/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] relative overflow-hidden">
                <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <h1 className="text-4xl font-extrabold text-white mb-2 flex items-center">
                        <Compass className="w-8 h-8 mr-3 text-neon-blue" />
                        AI Career Roadmap Generator
                    </h1>
                    <p className="text-neon-purple font-medium text-lg mb-6">Powered by Gemini Deep Learning</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div>
                            <label className="block text-xs font-medium text-dark-text-muted mb-1 uppercase tracking-wider">Major / Field</label>
                            <input
                                type="text"
                                value={details.major}
                                onChange={(e) => setDetails({ ...details, major: e.target.value })}
                                className="w-full bg-neon-bg border border-neon-border rounded-xl px-4 py-3 text-white focus:border-neon-blue outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-dark-text-muted mb-1 uppercase tracking-wider">Current Standing</label>
                            <input
                                type="text"
                                value={details.currentSemester}
                                onChange={(e) => setDetails({ ...details, currentSemester: e.target.value })}
                                className="w-full bg-neon-bg border border-neon-border rounded-xl px-4 py-3 text-white focus:border-neon-blue outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-dark-text-muted mb-1 uppercase tracking-wider">Key Interests</label>
                            <input
                                type="text"
                                value={details.interests}
                                onChange={(e) => setDetails({ ...details, interests: e.target.value })}
                                className="w-full bg-neon-bg border border-neon-border rounded-xl px-4 py-3 text-white focus:border-neon-blue outline-none"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className={`px-6 py-3 bg-neon-blue/20 hover:bg-neon-blue border border-neon-blue text-neon-blue hover:text-neon-bg rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? <Sparkles className="w-5 h-5 mr-2 animate-spin" /> : <Zap className="w-5 h-5 mr-2" />}
                        {loading ? 'Synthesizing Path...' : 'Generate Neural Roadmap'}
                    </button>
                </div>
            </div>

            {errorMessage && <div className="p-4 bg-red-900/40 border border-red-500 rounded-xl text-red-200 text-sm">{errorMessage}</div>}
            {roadmap && (
                <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                    <h2 className="text-2xl font-bold text-white flex items-center">
                        <Target className="w-6 h-6 mr-2 text-[#00ff88]" /> Recommended Path
                    </h2>

                    <div className="relative border-l-2 border-neon-border ml-4 space-y-8">
                        {roadmap.map((step, index) => (
                            <div key={index} className="relative pl-8">
                                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-neon-bg border-4 border-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border hover:border-neon-blue/50 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                        <span className="text-xs font-bold text-neon-purple px-2 py-1 bg-neon-purple/10 rounded-lg border border-neon-purple/30">
                                            {step.timeframe}
                                        </span>
                                    </div>
                                    <p className="text-dark-text-muted leading-relaxed">{step.description}</p>

                                    <div className="mt-4 pt-4 border-t border-neon-border flex space-x-3">
                                        <button className="text-xs text-neon-blue font-bold flex items-center hover:underline">
                                            Find Courses <ExternalLink className="w-3 h-3 ml-1" />
                                        </button>
                                        <button className="text-xs text-[#00ff88] font-bold flex items-center hover:underline">
                                            Add to Planner <ExternalLink className="w-3 h-3 ml-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
