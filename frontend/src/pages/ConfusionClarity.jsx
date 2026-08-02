import React, { useState } from 'react';
import { BrainCircuit, UploadCloud, Zap, ChevronRight, Sparkles, CheckCircle, ArrowRight, RotateCcw, Lightbulb, MessageSquare } from 'lucide-react';

const steps = [
    {
        icon: '🔍',
        title: 'Identify Root Confusion',
        content: 'The formula F = ma (Newton\'s 2nd Law) confuses students because \'mass\' and \'weight\' are often conflated. Mass is intrinsic (kg), while weight is a force (N = kg·m/s²).',
        tag: 'Root Cause'
    },
    {
        icon: '🧩',
        title: 'Break It Into Parts',
        content: 'F = Force applied (measured in Newtons)\nm = Mass of the object (kg) — constant everywhere\na = Acceleration produced (m/s²) — result of applying force',
        tag: 'Decomposition'
    },
    {
        icon: '🌍',
        title: 'Analogize With Reality',
        content: 'Imagine pushing a shopping cart vs. a truck with the same effort (force). The lighter cart (less mass) accelerates far more. Same force, but acceleration is inversely proportional to mass.',
        tag: 'Analogy'
    },
    {
        icon: '📐',
        title: 'Derive & Verify',
        content: 'If F = 10N, m = 2kg → a = F/m = 5 m/s². If m doubles to 4kg, a halves to 2.5 m/s². This proves the inverse relationship. Always isolate the variable you want to find.',
        tag: 'Mathematical Proof'
    },
    {
        icon: '✅',
        title: 'Crystal Clear Summary',
        content: 'More mass = harder to accelerate (not heavier in space!). Force drives acceleration. Mass resists it. Weight = mass × gravity (9.8 m/s²). Now you can solve any F=ma problem step by step.',
        tag: 'Clarity'
    },
];

const suggestions = [
    'Why does recursion cause stack overflow?',
    'What is quantum superposition in simple terms?',
    'Explain Bayes\' Theorem intuitively',
    'How does TCP handshake work?',
    'Difference between process and thread?',
];

export default function ConfusionClarity() {
    const [concept, setConcept] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [activeStep, setActiveStep] = useState(null);
    const [showBreakdown, setShowBreakdown] = useState(false);
    const [animatedSteps, setAnimatedSteps] = useState([]);

    const handleAnalyze = (query = concept) => {
        if (!query.trim()) return;
        setConcept(query);
        setIsAnalyzing(true);
        setShowBreakdown(false);
        setAnimatedSteps([]);
        setActiveStep(null);

        setTimeout(() => {
            setIsAnalyzing(false);
            setShowBreakdown(true);
            steps.forEach((_, i) => {
                setTimeout(() => {
                    setAnimatedSteps(prev => [...prev, i]);
                }, i * 350);
            });
        }, 1800);
    };

    const handleReset = () => {
        setConcept('');
        setShowBreakdown(false);
        setAnimatedSteps([]);
        setActiveStep(null);
    };

    return (
        <div className="flex flex-col min-h-full bg-neon-bg p-6 lg:p-10 animate-in fade-in overflow-y-auto">

            {/* Header */}
            <div className="text-center mb-10 max-w-3xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-neon-purple to-neon-blue flex items-center justify-center shadow-[0_0_25px_rgba(178,0,255,0.5)] mb-6 mx-auto animate-pulse">
                    <BrainCircuit className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
                    Confusion <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">→</span> Clarity
                </h1>
                <p className="text-dark-text-muted text-lg max-w-xl mx-auto">
                    Paste a concept, screenshot, or question that's confusing you. Saarthi AI will visually break it down into crystal-clear steps.
                </p>
            </div>

            {/* Input Zone */}
            <div className="max-w-3xl mx-auto w-full mb-8">
                <div className="relative">
                    <div className="absolute inset-0 bg-neon-purple/10 rounded-2xl blur-xl" />
                    <div className="relative bg-neon-panel border border-neon-border hover:border-neon-purple/40 focus-within:border-neon-purple rounded-2xl p-4 transition-all shadow-2xl">
                        <textarea
                            rows={3}
                            value={concept}
                            onChange={(e) => setConcept(e.target.value)}
                            placeholder="Type or paste a concept you're confused about… (e.g., 'Why does F=ma work that way?')"
                            className="w-full bg-transparent outline-none text-white text-base resize-none placeholder:text-dark-text-muted mb-3"
                        />
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm text-dark-text-muted hover:text-neon-blue cursor-pointer transition-colors">
                                <UploadCloud className="w-4 h-4" />
                                Upload screenshot
                                <input type="file" className="hidden" accept="image/*" />
                            </label>
                            <div className="flex gap-2">
                                {showBreakdown && (
                                    <button onClick={handleReset} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-dark-text-muted hover:text-white bg-neon-bg border border-neon-border transition-all">
                                        <RotateCcw className="w-4 h-4" /> Reset
                                    </button>
                                )}
                                <button
                                    onClick={() => handleAnalyze()}
                                    disabled={!concept.trim() || isAnalyzing}
                                    className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold text-sm transition-all shadow-lg ${concept.trim() ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-[0_0_20px_rgba(178,0,255,0.4)] hover:shadow-[0_0_30px_rgba(178,0,255,0.6)]' : 'bg-white/5 text-slate-500 cursor-not-allowed'}`}
                                >
                                    {isAnalyzing ? (
                                        <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Analyzing…</>
                                    ) : (
                                        <><Zap className="w-4 h-4" /> Break It Down</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Suggestions */}
                {!showBreakdown && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs text-dark-text-muted flex items-center gap-1 mr-2">
                            <Lightbulb className="w-3 h-3" /> Try:
                        </span>
                        {suggestions.map((s) => (
                            <button
                                key={s}
                                onClick={() => handleAnalyze(s)}
                                className="text-xs px-3 py-1.5 rounded-full bg-neon-panel border border-neon-border text-dark-text-muted hover:text-white hover:border-neon-purple/40 transition-all"
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* AI Analyzing State */}
            {isAnalyzing && (
                <div className="max-w-3xl mx-auto w-full mb-8 text-center">
                    <div className="bg-neon-panel border border-neon-purple/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(178,0,255,0.15)]">
                        <div className="flex justify-center mb-4">
                            <div className="flex space-x-2">
                                {[0, 1, 2].map(i => (
                                    <div key={i} className="w-3 h-3 rounded-full bg-neon-purple animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                                ))}
                            </div>
                        </div>
                        <p className="text-neon-purple font-bold text-lg">Saarthi AI is deconstructing your concept…</p>
                        <p className="text-dark-text-muted text-sm mt-2">Identifying root confusion • Generating analogies • Building step-by-step breakdown</p>
                    </div>
                </div>
            )}

            {/* Step-by-Step Breakdown */}
            {showBreakdown && (
                <div className="max-w-4xl mx-auto w-full">

                    <div className="flex items-center gap-3 mb-6">
                        <Sparkles className="w-5 h-5 text-neon-purple" />
                        <h2 className="text-xl font-bold text-white">
                            AI Breakdown: <span className="text-neon-purple">"{concept.length > 60 ? concept.slice(0, 60) + '…' : concept}"</span>
                        </h2>
                    </div>

                    {/* Progress Path */}
                    <div className="relative mb-8">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={`transition-all duration-500 ${animatedSteps.includes(i) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                            >
                                <div
                                    className={`flex gap-4 mb-3 cursor-pointer group`}
                                    onClick={() => setActiveStep(activeStep === i ? null : i)}
                                >
                                    {/* Step connector */}
                                    <div className="flex flex-col items-center">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold border-2 transition-all ${activeStep === i ? 'bg-neon-purple border-neon-purple shadow-[0_0_15px_rgba(178,0,255,0.6)]' : 'bg-neon-panel border-neon-border group-hover:border-neon-purple/40'}`}>
                                            {step.icon}
                                        </div>
                                        {i < steps.length - 1 && (
                                            <div className={`w-0.5 h-full min-h-[1.5rem] transition-colors ${animatedSteps.includes(i + 1) ? 'bg-neon-purple/30' : 'bg-neon-border'}`} />
                                        )}
                                    </div>

                                    {/* Step Content */}
                                    <div className={`flex-1 mb-3 bg-neon-panel border rounded-2xl p-4 transition-all ${activeStep === i ? 'border-neon-purple shadow-[0_0_15px_rgba(178,0,255,0.15)]' : 'border-neon-border group-hover:border-neon-purple/30'}`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className={`font-bold text-base transition-colors ${activeStep === i ? 'text-neon-purple' : 'text-white'}`}>
                                                Step {i + 1}: {step.title}
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs px-2 py-0.5 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20 font-bold">
                                                    {step.tag}
                                                </span>
                                                <ChevronRight className={`w-4 h-4 text-dark-text-muted transition-transform ${activeStep === i ? 'rotate-90 text-neon-purple' : ''}`} />
                                            </div>
                                        </div>
                                        {activeStep === i && (
                                            <p className="text-sm text-slate-300 leading-relaxed animate-in fade-in slide-in-from-top-2">
                                                {step.content}
                                            </p>
                                        )}
                                        {activeStep !== i && (
                                            <p className="text-xs text-dark-text-muted truncate">
                                                {step.content.slice(0, 70)}…
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Final Summary Card */}
                    {animatedSteps.length === steps.length && (
                        <div className="bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 border border-neon-purple/30 rounded-2xl p-6 animate-in fade-in slide-in-from-bottom-4 mb-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#00ff88] shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-white text-lg mb-2">Concept Cleared! 🎉</h3>
                                    <p className="text-dark-text-muted text-sm leading-relaxed">
                                        You now have a clear mental model of this concept with 5 progressive steps, a real-world analogy, and a mathematical proof. Save to your notes or generate a flashcard for revision.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-4">
                                <button className="flex items-center gap-2 text-sm font-bold px-4 py-2 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue rounded-xl hover:bg-neon-blue hover:text-neon-bg transition-all">
                                    <MessageSquare className="w-4 h-4" /> Ask Follow-up
                                </button>
                                <button className="flex items-center gap-2 text-sm font-bold px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] rounded-xl hover:bg-[#00ff88] hover:text-neon-bg transition-all">
                                    <Zap className="w-4 h-4" /> Generate Flashcard
                                </button>
                                <button className="flex items-center gap-2 text-sm font-bold px-4 py-2 bg-neon-panel border border-neon-border text-white rounded-xl hover:border-white/30 transition-all">
                                    <ArrowRight className="w-4 h-4" /> Explore Related Topics
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
