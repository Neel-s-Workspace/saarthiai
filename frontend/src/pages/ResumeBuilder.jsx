import React, { useState } from 'react';
import { FileText, Download, Wand2, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export default function ResumeBuilder() {
    const [generating, setGenerating] = useState(false);
    const [score, setScore] = useState(72);
    const [bullets, setBullets] = useState([
        'Architected a dark-neon themed AI-powered student success platform using React and Node.js.',
        'Integrated Google Gemini AI to provide predictive analytics and automated career roadmaps.',
        'Improved data visualization using Recharts, resulting in a 40% clearer diagnostic view for counselors.'
    ]);

    const handleGenerate = () => {
        setGenerating(true);
        setTimeout(() => {
            setGenerating(false);
            setScore(94);
            setBullets([
                'Architected high-throughput microservices using React, TypeScript, and Node.js with 99.9% uptime.',
                'Integrated Gemini AI neural pipelines for real-time predictive student analytics and skill gap evaluation.',
                'Engineered Recharts telemetry dashboards reducing counselor cognitive triage latency by 45%.'
            ]);
        }, 3000);
    };

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">
            <div className="bg-[#12121A] p-8 rounded-3xl border border-neon-purple/30 shadow-[0_0_30px_rgba(178,0,255,0.1)] flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
                <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 mb-6 md:mb-0">
                    <h1 className="text-4xl font-extrabold text-white mb-2 flex items-center">
                        <Wand2 className="w-8 h-8 mr-3 text-neon-purple" />
                        Neural Resume Architect
                    </h1>
                    <p className="text-neon-blue font-medium text-lg">Generate ATS-optimized resumes instantly using your academic profile.</p>
                </div>

                <div className="relative z-10">
                    <button
                        onClick={handleGenerate}
                        disabled={generating}
                        className={`px-8 py-4 bg-neon-purple/20 hover:bg-neon-purple border border-neon-purple text-neon-purple hover:text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(178,0,255,0.4)] flex items-center ${generating ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {generating ? <RefreshCw className="w-5 h-5 mr-3 animate-spin" /> : <Wand2 className="w-5 h-5 mr-3" />}
                        {generating ? 'Optimizing Parameters...' : 'Auto-Generate Resume'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border text-center">
                        <h3 className="text-lg font-bold text-white mb-6">ATS Compatibility Score</h3>

                        <div className="w-40 h-40 mx-auto rounded-full border-8 border-neon-bg flex items-center justify-center relative shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-gradient-to-tr from-neon-purple/10 to-neon-blue/10">
                            <span className={`text-5xl font-extrabold ${score > 85 ? 'text-[#00ff88]' : 'text-amber-500'}`}>{score}</span>
                        </div>

                        <p className="text-sm text-dark-text-muted mt-6 mb-2">Based on analysis of 10,000+ technical job descriptions in your target field.</p>

                        {score > 85 ? (
                            <div className="flex items-center justify-center text-[#00ff88] text-sm font-bold bg-[#00ff88]/10 py-2 rounded-lg border border-[#00ff88]/30">
                                <CheckCircle2 className="w-4 h-4 mr-2" /> Resume Highly Optimized
                            </div>
                        ) : (
                            <div className="flex items-center justify-center text-amber-500 text-sm font-bold bg-amber-500/10 py-2 rounded-lg border border-amber-500/30">
                                <AlertCircle className="w-4 h-4 mr-2" /> Improvement Recommended
                            </div>
                        )}
                    </div>

                    <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border">
                        <h3 className="text-lg font-bold text-white mb-4 border-b border-neon-border pb-2">AI Suggestions</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="w-2 h-2 rounded-full bg-neon-blue mt-1.5 mr-2 flex-shrink-0"></span>
                                <p className="text-sm text-dark-text-muted"><strong className="text-white">Action Verbs:</strong> Replace "did" with "architected" and "managed".</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 rounded-full bg-neon-purple mt-1.5 mr-2 flex-shrink-0"></span>
                                <p className="text-sm text-dark-text-muted"><strong className="text-white">Quantification:</strong> Add specific metrics to your internship experience.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 rounded-full bg-[#00ff88] mt-1.5 mr-2 flex-shrink-0"></span>
                                <p className="text-sm text-dark-text-muted"><strong className="text-white">Keywords:</strong> Include "TypeScript" as it is highly requested for your target role.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="bg-white p-8 rounded-2xl shadow-2xl h-[800px] border border-slate-200 overflow-y-auto relative">
                        {generating && (
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10 flex-col">
                                <div className="w-16 h-16 rounded-full border-4 border-slate-200 border-t-neon-purple animate-spin mb-4"></div>
                                <h3 className="text-xl font-bold text-slate-800">Synthesizing Experiences...</h3>
                                <p className="text-slate-500 mt-2">Connecting academic records with skill matrices.</p>
                            </div>
                        )}

                        {/* Mock Resume Content */}
                        <div className="text-slate-900 border-b-2 border-slate-800 pb-4 mb-4">
                            <h1 className="text-3xl font-extrabold uppercase tracking-widest text-center">Neel Patel</h1>
                            <p className="text-center text-sm font-medium mt-1">Computer Science Engineering | Expected Graduation: 2025</p>
                            <p className="text-center text-xs text-slate-600 mt-1">neel@sarthi.edu | linkedin.com/in/neel-patel | github.com/neelP</p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 mb-2">Education</h2>
                            <div>
                                <div className="flex justify-between font-bold">
                                    <span>B.Tech in Computer Science Engineering</span>
                                    <span>Aug 2021 - Present</span>
                                </div>
                                <div className="flex justify-between text-sm italic">
                                    <span>University Name, City</span>
                                    <span>CGPA: 8.2/10.0</span>
                                </div>
                                <ul className="list-disc list-inside text-sm mt-1">
                                    <li>Relevant Coursework: Data Structures, AI, Cloud Computing, Database Systems.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 mb-2">Technical Skills</h2>
                            <p className="text-sm"><strong className="font-bold">Languages:</strong> JavaScript/TypeScript, Python, Java, C++</p>
                            <p className="text-sm"><strong className="font-bold">Frameworks:</strong> React, Node.js, Express, Tailwind CSS</p>
                            <p className="text-sm"><strong className="font-bold">Tools & Cloud:</strong> Git, Docker, AWS (EC2, S3), PostgreSQL, MongoDB</p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 mb-2">Projects</h2>
                            <div className="mb-3">
                                <div className="flex justify-between font-bold">
                                    <span>Sarthi E-Governance Platform</span>
                                    <span>Jan 2023 - Present</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 text-sm mt-1 space-y-1 text-slate-700">
                                    {bullets.map((b, i) => <li key={i}>{b}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button className="px-6 py-3 bg-neon-bg border border-neon-border hover:border-neon-blue text-white rounded-xl font-bold transition-all text-sm flex items-center shadow-md mr-3">
                            <FileText className="w-4 h-4 mr-2 text-neon-blue" /> Download PDF
                        </button>
                        <button className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-200 border border-slate-300 rounded-xl font-bold transition-all text-sm flex items-center shadow-md">
                            <Download className="w-4 h-4 mr-2" /> Export to Word
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
