import React, { useState } from 'react';
import { Activity, BrainCircuit, ShieldAlert, GitBranch, ArrowRight, Save } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function DigitalTwin() {
    const [scenario, setScenario] = useState('baseline');

    const dataPaths = {
        baseline: [
            { sem: 'Sem 1', cgpa: 7.5, risk: 20 },
            { sem: 'Sem 2', cgpa: 7.8, risk: 18 },
            { sem: 'Sem 3', cgpa: 7.2, risk: 35 },
            { sem: 'Sem 4', cgpa: 7.0, risk: 45 },
            { sem: 'Sem 5 (Now)', cgpa: 6.8, risk: 60 },
            { sem: 'Sem 6 (Pred)', cgpa: 6.5, risk: 75 },
            { sem: 'Sem 7 (Pred)', cgpa: 6.2, risk: 85 },
            { sem: 'Sem 8 (Pred)', cgpa: 6.0, risk: 90 },
        ],
        intervention1: [
            { sem: 'Sem 1', cgpa: 7.5, risk: 20 },
            { sem: 'Sem 2', cgpa: 7.8, risk: 18 },
            { sem: 'Sem 3', cgpa: 7.2, risk: 35 },
            { sem: 'Sem 4', cgpa: 7.0, risk: 45 },
            { sem: 'Sem 5 (Now)', cgpa: 6.8, risk: 60 },
            { sem: 'Sem 6 (Pred)', cgpa: 7.5, risk: 40 },
            { sem: 'Sem 7 (Pred)', cgpa: 8.0, risk: 25 },
            { sem: 'Sem 8 (Pred)', cgpa: 8.2, risk: 15 },
        ]
    };

    const currentData = dataPaths[scenario];

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">
            <div className="bg-[#12121A] p-8 rounded-3xl border border-neon-blue/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] relative overflow-hidden flex flex-col md:flex-row justify-between items-center">
                <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 mb-6 md:mb-0 max-w-xl">
                    <h1 className="text-4xl font-extrabold text-white mb-2 flex items-center">
                        <BrainCircuit className="w-8 h-8 mr-3 text-neon-blue" />
                        AI Digital Twin
                    </h1>
                    <p className="text-dark-text-muted text-lg mb-4">Simulate predictive academic trajectories based on real-time interventions.</p>
                </div>

                <div className="relative z-10 text-center bg-neon-panel p-4 rounded-xl border border-neon-border flex space-x-6">
                    <div>
                        <p className="text-xs text-dark-text-muted uppercase tracking-wider mb-1">Current Risk</p>
                        <p className={`text-3xl font-extrabold ${currentData[4].risk > 50 ? 'text-red-500' : 'text-[#00ff88]'}`}>
                            {currentData[4].risk}%
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-dark-text-muted uppercase tracking-wider mb-1">Predicted Grad CGPA</p>
                        <p className={`text-3xl font-extrabold ${currentData[7].cgpa < 7.0 ? 'text-amber-500' : 'text-[#00ff88]'}`}>
                            {currentData[7].cgpa.toFixed(1)}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 bg-neon-panel p-6 rounded-2xl border border-neon-border h-[500px] relative">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-neon-blue" /> Trajectory Simulation Forecast
                    </h3>

                    <ResponsiveContainer width="100%" height="85%">
                        <AreaChart data={currentData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorCgpa" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={scenario === 'baseline' ? '#f59e0b' : '#00ff88'} stopOpacity={0.8} />
                                    <stop offset="95%" stopColor={scenario === 'baseline' ? '#f59e0b' : '#00ff88'} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#232333" />
                            <XAxis dataKey="sem" stroke="#94a3b8" />
                            <YAxis domain={[0, 10]} stroke="#94a3b8" />
                            <Tooltip contentStyle={{ backgroundColor: '#12121A', borderColor: '#232333', color: '#fff' }} />
                            <ReferenceLine x="Sem 5 (Now)" stroke="#B200FF" strokeDasharray="3 3" label={{ position: 'top', value: 'Present', fill: '#B200FF' }} />
                            <Area type="monotone" dataKey="cgpa" stroke={scenario === 'baseline' ? '#f59e0b' : '#00ff88'} strokeWidth={3} fillOpacity={1} fill="url(#colorCgpa)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="space-y-6">
                    <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border">
                        <h3 className="text-lg font-bold text-white mb-4 border-b border-neon-border pb-2">Simulation Scenarios</h3>

                        <div className="space-y-3">
                            <button
                                onClick={() => setScenario('baseline')}
                                className={`w-full text-left p-4 rounded-xl border transition-all ${scenario === 'baseline' ? 'bg-amber-500/10 border-amber-500 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : 'bg-neon-bg border-neon-border text-slate-300 hover:border-amber-500/50'}`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-bold">Baseline Trajectory</span>
                                    {scenario === 'baseline' && <GitBranch className="w-4 h-4" />}
                                </div>
                                <span className="text-xs opacity-70">No intervention applied. Predicting drop in CGPA based on recent attendance decline.</span>
                            </button>

                            <button
                                onClick={() => setScenario('intervention1')}
                                className={`w-full text-left p-4 rounded-xl border transition-all ${scenario === 'intervention1' ? 'bg-[#00ff88]/10 border-[#00ff88] text-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.2)]' : 'bg-neon-bg border-neon-border text-slate-300 hover:border-[#00ff88]/50'}`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-bold">Aggressive Intervention</span>
                                    {scenario === 'intervention1' && <GitBranch className="w-4 h-4" />}
                                </div>
                                <span className="text-xs opacity-70">Applies weekly counseling + math tutoring. Forecasts 8.2 Grad CGPA.</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-neon-bg p-6 rounded-2xl border border-neon-border border-l-4 border-l-[#B200FF]">
                        <h4 className="text-sm font-bold text-white flex items-center mb-2">
                            <ShieldAlert className="w-4 h-4 mr-2 text-neon-purple" /> AI Recommendation
                        </h4>
                        <p className="text-xs text-dark-text-muted leading-relaxed">
                            The student's twin model suggests a high correlation between Advanced Math performance and overall CGPA drop. Enrolling in the <strong className="text-white">Summer Bridge Program</strong> is highly recommended to shift trajectory.
                        </p>

                        <button className="mt-4 w-full py-2 bg-neon-purple/20 hover:bg-neon-purple border border-neon-purple text-neon-purple hover:text-white rounded-xl font-bold transition-all text-xs flex justify-center items-center">
                            Deploy Intervention Plan <ArrowRight className="w-3 h-3 ml-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
