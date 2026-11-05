import React, { useState } from 'react';
import { Monitor, Code, Cpu, Shield, Database, ChevronRight, PlayCircle, Star, Search, Compass, BookOpen, User, Clock, Target, Calendar, CheckCircle2, RefreshCw, Award } from 'lucide-react';

export default function TechHub() {
    const [activeTab, setActiveTab] = useState('all');
    const [techSearch, setTechSearch] = useState('');
    const [showAIForm, setShowAIForm] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedPath, setGeneratedPath] = useState(null);

    const [formData, setFormData] = useState({
        educationLevel: '',
        currentSkills: '',
        domainToLearn: '',
        timeAvailable: '',
        goal: ''
    });

    const categories = [
        { id: 'all', label: 'All Fields' },
        { id: 'programming', label: 'Programming' },
        { id: 'web', label: 'Web Developement' },
        { id: 'ai', label: 'Artificial Intelligence' },
        { id: 'cyber', label: 'Cybersecurity' },
        { id: 'data', label: 'Data Science' }
    ];

    const roadmaps = [
        { title: "Full-Stack Web Dev", category: "web", icon: Code, level: "Beginner to Advanced", color: "text-[#00ff88]", steps: 24, users: "12.4k" },
        { title: "AI & Machine Learning", category: "ai", icon: Cpu, level: "Intermediate", color: "text-neon-blue", steps: 18, users: "8.2k" },
        { title: "Ethical Hacking", category: "cyber", icon: Shield, level: "Advanced", color: "text-red-500", steps: 32, users: "5.1k" },
        { title: "Data Engineering", category: "data", icon: Database, level: "Intermediate", color: "text-neon-purple", steps: 20, users: "6.7k" },
        { title: "Mastering Python", category: "programming", icon: Code, level: "Beginner", color: "text-yellow-400", steps: 15, users: "20.1k" },
        { title: "Cloud Architecture", category: "web", icon: Monitor, level: "Advanced", color: "text-blue-400", steps: 28, users: "4.5k" },
    ];

    const filteredRoadmaps = activeTab === 'all' ? roadmaps : roadmaps.filter(r => r.category === activeTab);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            const response = await fetch('http://localhost:5000/api/ai/techhub-path', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (!response.ok) {
                throw new Error("API returned status " + response.status);
            }
            
            const data = await response.json();
            setGeneratedPath(data.roadmap);
        } catch (error) {
            console.error("Error generating path:", error);
            // Fallback so the user can still see the UI even if backend fails or isn't restarted
            setGeneratedPath({
                userAnalysis: "Since the backend API couldn't be reached (did you restart the server?), here is a preview of how the UI looks! You are determined to learn and that's exactly what counts.",
                phases: [
                    { title: "Foundations", duration: "Weeks 1-2", topics: formData.domainToLearn ? `Intro to ${formData.domainToLearn}` : "Fundamentals", projects: "Hello World Application", resources: "Official Documentation" },
                    { title: "Advanced Application", duration: "Weeks 3-4", topics: "Complex architecture, real-world patterns", projects: "Full clone project", resources: "YouTube, GitHub repositories" }
                ],
                timeline: formData.timeAvailable ? `About 4 weeks at ${formData.timeAvailable} hrs/day` : "4 Weeks",
                weeklyPlan: "Spend weekdays learning new theory, weekends focusing solely on projects.",
                careerGuidance: `Keep building to reach your ultimate goal: ${formData.goal || 'Success'}.`
            });
        } finally {
            setIsGenerating(false);
        }
    };

    const handleReset = () => {
        setGeneratedPath(null);
        setShowAIForm(false);
        setFormData({
            educationLevel: '',
            currentSkills: '',
            domainToLearn: '',
            timeAvailable: '',
            goal: ''
        });
    };

    return (
        <div className="flex flex-col h-full bg-neon-bg p-6 lg:p-10 space-y-8 animate-in fade-in duration-500 overflow-y-auto pb-32">
            
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neon-border">
                <div>
                    <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center">
                        <Monitor className="w-8 h-8 mr-3 text-neon-blue" />
                        Tech Hub
                    </h1>
                    <p className="text-dark-text-muted mt-2 max-w-2xl">
                        Interactive tutorials, coding challenges, and AI-generated learning roadmaps. Master the skills demanded by top tech companies.
                    </p>
                </div>

                {!showAIForm && (
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-text-muted" />
                        <input
                            type="text"
                            value={techSearch}
                        onChange={(e) => setTechSearch(e.target.value)}
                        placeholder="Search for skills, languages..."
                            className="w-full bg-neon-panel border border-neon-border focus:border-neon-blue text-white rounded-xl py-2 pl-10 pr-4 outline-none text-sm transition-all shadow-inner placeholder:text-dark-text-muted"
                        />
                    </div>
                )}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                
                {/* Left Sidebar - Categories */}
                <div className="col-span-1 space-y-6">
                    <div className="bg-neon-panel border border-neon-border rounded-2xl p-4 shadow-xl">
                        <h3 className="text-xs font-bold text-dark-text-muted uppercase tracking-wider mb-4 px-2">Skill Domains</h3>
                        <div className="space-y-1">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => { setActiveTab(cat.id); setShowAIForm(false); }}
                                    className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === cat.id && !showAIForm
                                            ? 'bg-neon-blue/10 border border-neon-blue/30 text-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                                            : 'text-slate-300 hover:bg-white/5 hover:text-white border border-transparent'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div 
                        onClick={() => { setShowAIForm(true); setActiveTab(''); }}
                        className={`bg-gradient-to-br border rounded-2xl p-5 relative overflow-hidden group transition-all cursor-pointer ${showAIForm ? 'from-neon-purple/30 to-neon-blue/20 border-neon-purple/80 shadow-[0_0_20px_rgba(168,85,247,0.3)]' : 'from-neon-purple/20 to-neon-blue/10 border-neon-purple/30 hover:border-neon-purple/50'}`}
                    >
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-neon-purple/20 blur-2xl rounded-full"></div>
                        <Compass className="w-8 h-8 text-neon-purple mb-4 relative z-10" />
                        <h3 className="text-white font-bold text-lg mb-2 relative z-10">Generate AI Path</h3>
                        <p className="text-xs text-slate-300 relative z-10 mb-4">
                            Tell SAARTHI AI your dream job, and it will generate a custom learning roadmap.
                        </p>
                        <div className="flex items-center text-xs font-bold text-neon-purple group-hover:text-white transition-colors">
                            Start Generator <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                    </div>
                </div>

                {/* Right Area */}
                <div className="col-span-1 lg:col-span-3">
                    
                    {!showAIForm ? (
                        <>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-white flex items-center">
                                    <BookOpen className="w-5 h-5 mr-2 text-neon-blue" />
                                    Curated Learning Paths ({categories.find(c => c.id === activeTab)?.label || 'All Fields'})
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {filteredRoadmaps.map((r, idx) => (
                                    <div key={idx} className="bg-neon-panel border border-neon-border hover:border-neon-blue/50 rounded-2xl p-5 transition-all group hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] cursor-pointer flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`p-3 rounded-xl bg-neon-bg border border-neon-border ${r.color} shadow-inner`}>
                                                <r.icon className="w-6 h-6" />
                                            </div>
                                            <span className="bg-neon-bg border border-neon-border text-xs px-3 py-1 rounded-full text-slate-300 font-medium">
                                                {r.level}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">{r.title}</h3>
                                        <div className="flex items-center text-xs text-dark-text-muted space-x-4 mt-auto pt-4">
                                            <div className="flex items-center">
                                                <PlayCircle className="w-4 h-4 mr-1 text-slate-400" />
                                                {r.steps} Modules
                                            </div>
                                            <div className="flex items-center">
                                                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                                                {r.users} Enrolled
                                            </div>
                                        </div>
                                        <div className="w-full bg-neon-bg h-1.5 rounded-full mt-5 overflow-hidden">
                                            <div className="bg-neon-blue h-full w-0 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="bg-neon-panel border border-neon-border rounded-2xl p-6 lg:p-8 animate-in slide-in-from-right-8 duration-500">
                            
                            {!generatedPath && !isGenerating && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-white flex items-center mb-6">
                                        <Compass className="w-6 h-6 mr-3 text-neon-purple" />
                                        Create Your Personalized Learning Path
                                    </h2>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 flex items-center">
                                                <Award className="w-4 h-4 mr-2 text-neon-blue" /> Current Education Level
                                            </label>
                                            <input name="educationLevel" value={formData.educationLevel} onChange={handleInputChange} placeholder="e.g. 3rd Year B.Tech CS" className="w-full bg-neon-bg border border-neon-border focus:border-neon-blue text-white rounded-xl p-3 outline-none transition-all placeholder:text-slate-600" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 flex items-center">
                                                <User className="w-4 h-4 mr-2 text-neon-blue" /> Current Skills
                                            </label>
                                            <input name="currentSkills" value={formData.currentSkills} onChange={handleInputChange} placeholder="e.g. Basic Python, HTML, CSS" className="w-full bg-neon-bg border border-neon-border focus:border-neon-blue text-white rounded-xl p-3 outline-none transition-all placeholder:text-slate-600" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 flex items-center">
                                                <Target className="w-4 h-4 mr-2 text-neon-purple" /> Skills / Domain to Learn
                                            </label>
                                            <input name="domainToLearn" value={formData.domainToLearn} onChange={handleInputChange} placeholder="e.g. MERN Stack, AI Engineering" className="w-full bg-neon-bg border border-neon-border focus:border-neon-purple text-white rounded-xl p-3 outline-none transition-all placeholder:text-slate-600" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 flex items-center">
                                                <Clock className="w-4 h-4 mr-2 text-neon-purple" /> Time Available / Day
                                            </label>
                                            <input name="timeAvailable" type="number" min="1" max="15" value={formData.timeAvailable} onChange={handleInputChange} placeholder="e.g. 2" className="w-full bg-neon-bg border border-neon-border focus:border-neon-purple text-white rounded-xl p-3 outline-none transition-all placeholder:text-slate-600" />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-sm font-medium text-slate-300 flex items-center">
                                                <Award className="w-4 h-4 mr-2 text-yellow-400" /> Ultimate Goal (Job / Internship / Startup)
                                            </label>
                                            <input name="goal" value={formData.goal} onChange={handleInputChange} placeholder="e.g. Land a 6-month internship in Web Dev" className="w-full bg-neon-bg border border-neon-border focus:border-yellow-400 text-white rounded-xl p-3 outline-none transition-all placeholder:text-slate-600" />
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <button 
                                            onClick={handleGenerate}
                                            disabled={!formData.domainToLearn || !formData.goal}
                                            className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex justify-center items-center"
                                        >
                                            <Cpu className="w-5 h-5 mr-2" /> Generate My AI Learning Path
                                        </button>
                                    </div>
                                </div>
                            )}

                            {isGenerating && (
                                <div className="flex flex-col items-center justify-center py-20 space-y-6">
                                    <div className="relative w-20 h-20 flex items-center justify-center">
                                        <div className="absolute inset-0 rounded-full border-4 border-neon-purple/20 border-t-neon-purple animate-spin"></div>
                                        <div className="absolute inset-2 rounded-full border-4 border-neon-blue/20 border-b-neon-blue animate-spin" style={{animationDirection: "reverse"}}></div>
                                        <Cpu className="w-8 h-8 text-white animate-pulse" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-white mb-2">Analyzing your profile...</h3>
                                        <p className="text-dark-text-muted">SAARTHI AI is crafting the perfect roadmap for your goal.</p>
                                    </div>
                                </div>
                            )}

                            {generatedPath && !isGenerating && (
                                <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-700">
                                    
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <h2 className="text-xl lg:text-3xl font-bold text-white flex items-center">
                                            <Target className="w-8 h-8 mr-3 text-[#00ff88]" />
                                            Your Personalized Roadmap
                                        </h2>
                                        <div className="flex gap-3">
                                            <button onClick={() => setGeneratedPath(null)} className="flex items-center px-4 py-2 bg-neon-bg border border-neon-border rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-all">
                                                <RefreshCw className="w-4 h-4 mr-2" /> Regenerate
                                            </button>
                                            <button className="flex items-center px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg text-sm font-bold text-white shadow-lg shadow-neon-blue/20 hover:shadow-neon-blue/50 transition-all">
                                                Save Plan
                                            </button>
                                        </div>
                                    </div>

                                    {/* User Analysis & Timeline summary */}
                                    <div className="p-5 rounded-2xl bg-gradient-to-r from-neon-blue/10 to-transparent border-l-4 border-neon-blue text-slate-200">
                                        <p className="font-medium text-white mb-2">Analysis:</p>
                                        <p className="text-sm leading-relaxed">{generatedPath.userAnalysis}</p>
                                    </div>

                                    {/* Meta info */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="p-4 rounded-xl bg-neon-bg border border-neon-border text-center">
                                            <Clock className="w-6 h-6 mx-auto mb-2 text-neon-blue" />
                                            <h4 className="text-xs text-slate-400">Timeline</h4>
                                            <p className="text-sm font-bold text-white">{generatedPath.timeline}</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-neon-bg border border-neon-border text-center md:col-span-3 text-left flex flex-col justify-center">
                                            <h4 className="text-xs text-slate-400 flex items-center mb-1">
                                                <Calendar className="w-4 h-4 mr-1 text-neon-purple hidden md:block" />
                                                Weekly Structure
                                            </h4>
                                            <p className="text-sm font-bold text-white">{generatedPath.weeklyPlan}</p>
                                        </div>
                                    </div>

                                    {/* Phases Timeline */}
                                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[50px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-neon-blue before:via-neon-purple before:to-transparent">
                                        {generatedPath.phases?.map((phase, idx) => (
                                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-neon-panel bg-neon-blue shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                                    <CheckCircle2 className="w-5 h-5 text-neon-panel" />
                                                </div>
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neon-bg border border-neon-border p-5 rounded-2xl hover:border-neon-blue/50 transition-colors shadow-lg">
                                                    <span className="text-neon-blue font-bold text-xs mb-1 block">{phase.duration}</span>
                                                    <h3 className="font-bold text-white text-lg mb-2">{phase.title}</h3>
                                                    <p className="text-sm text-slate-300 mb-3"><span className="text-slate-400 font-semibold text-xs">TOPICS:</span><br/>{phase.topics}</p>
                                                    <div className="bg-neon-panel p-3 rounded-xl mb-3 border border-dashed border-neon-border">
                                                        <p className="text-xs text-yellow-400 font-bold mb-1">Build Project:</p>
                                                        <p className="text-sm text-slate-200">{phase.projects}</p>
                                                    </div>
                                                    <p className="text-xs text-slate-400"><span className="text-neon-purple font-semibold">Resources:</span> {phase.resources}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-6 mt-8 rounded-2xl bg-gradient-to-r from-neon-purple/20 to-transparent border border-neon-purple/30">
                                        <h4 className="text-lg font-bold text-white flex items-center mb-3">
                                            <Award className="w-5 h-5 mr-2 text-yellow-400" /> Career Guidance
                                        </h4>
                                        <p className="text-sm text-slate-200 leading-relaxed">{generatedPath.careerGuidance}</p>
                                    </div>

                                    <button onClick={handleReset} className="text-sm text-slate-400 hover:text-white underline underline-offset-4 w-full text-center mt-6">
                                        &larr; Back to Tech Hub
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
