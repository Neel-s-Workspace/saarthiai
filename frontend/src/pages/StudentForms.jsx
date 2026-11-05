import React, { useState } from 'react';
import { FileText, Clock, CheckCircle, Search, Filter, Plus } from 'lucide-react';

export default function StudentForms() {
    const [formSearch, setFormSearch] = useState('');
    const [forms] = useState([
        { id: 'FRM-001', title: 'Leave of Absence Request', status: 'Pending Approval', date: '2023-10-25', type: 'Academic' },
        { id: 'FRM-002', title: 'Course Add/Drop Form', status: 'Approved', date: '2023-10-20', type: 'Registration' },
        { id: 'FRM-003', title: 'Hostel Maintenance Request', status: 'In Progress', date: '2023-10-24', type: 'Facilities' },
        { id: 'FRM-004', title: 'Library Book Extension', status: 'Approved', date: '2023-10-18', type: 'Library' },
    ]);

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">
            <div className="flex justify-between items-center bg-neon-panel p-6 rounded-2xl border border-neon-border shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Digital Forms Portal</h1>
                    <p className="text-sm text-dark-text-muted">Submit and track official university requests.</p>
                </div>
                <button className="px-5 py-3 bg-neon-blue/20 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.3)] font-bold transition-all flex items-center">
                    <Plus className="w-5 h-5 mr-2" /> New Request
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1 space-y-4">
                    <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border">
                        <h3 className="font-bold text-white mb-4">Quick Form Templates</h3>
                        <div className="space-y-2">
                            {['Leave Request', 'No Dues Form', 'Transcript Request', 'Bus Pass Renewal'].map((t, i) => (
                                <button key={i} className="w-full text-left px-4 py-3 bg-neon-bg hover:bg-neon-blue/10 border border-neon-border hover:border-neon-blue/50 text-dark-text-muted hover:text-neon-blue rounded-xl transition-all text-sm font-medium">
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3 bg-neon-panel p-6 rounded-2xl border border-neon-border flex flex-col h-[600px]">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-white">Active Form Submissions</h3>
                        <div className="flex space-x-2">
                            <div className="relative border border-neon-border bg-neon-bg rounded-lg flex items-center px-3 py-1.5 focus-within:border-neon-blue">
                                <Search className="w-4 h-4 text-slate-500 mr-2" />
                                <input type="text" value={formSearch} onChange={(e) => setFormSearch(e.target.value)} placeholder="Search ID..." className="bg-transparent border-none outline-none text-white w-full text-sm placeholder-slate-600" />
                            </div>
                            <button className="p-2 bg-neon-bg border border-neon-border rounded-lg text-slate-400 hover:text-neon-blue transition-colors">
                                <Filter className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-y-auto flex-1">
                        <div className="space-y-3">
                            {forms.filter(f => f.title.toLowerCase().includes(formSearch.toLowerCase()) || f.id.toLowerCase().includes(formSearch.toLowerCase())).map(form => (
                                <div key={form.id} className="p-4 bg-neon-bg border border-neon-border rounded-xl hover:border-neon-blue/50 transition-colors flex items-center justify-between group">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-neon-panel border border-neon-border rounded-xl">
                                            <FileText className="w-6 h-6 text-neon-blue" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold group-hover:text-neon-blue transition-colors">{form.title}</h4>
                                            <div className="flex items-center space-x-4 mt-1 text-xs text-dark-text-muted">
                                                <span className="font-mono text-neon-purple">{form.id}</span>
                                                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> Submitted {form.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${form.status === 'Approved' ? 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/50' : form.status === 'Pending Approval' ? 'bg-amber-500/10 text-amber-500 border-amber-500/50' : 'bg-neon-blue/10 text-neon-blue border-neon-blue/50'}`}>
                                            {form.status}
                                        </span>
                                        <button className="text-xs text-neon-blue mt-2 underline hover:text-white transition-colors">View Details</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
