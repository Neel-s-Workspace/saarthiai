import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { FileText, Award, Briefcase, Calendar, BrainCircuit, Globe, User, LogOut, FileSignature, Monitor, Search, Library, Home } from 'lucide-react';
import AskAIAssistant from './AskAIAssistant';

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    const [language, setLanguage] = useState('English');

    // Only defining student nav items for this UI redesign
    const navItems = [
        { name: 'Home', icon: Home, path: '/student' },
        { name: 'Tech Hub', icon: Monitor, path: '/student/tech-hub' },
        { name: 'Notes', icon: FileText, path: '/student/forms' },
        { name: 'Squeeze', icon: Search, path: '/student/squeeze' },
        { name: 'Career', icon: Briefcase, path: '/student/career' },
        { name: 'Exam Planner', icon: Calendar, path: '/student/exams' },
        { name: 'Confusion → Clarity', icon: BrainCircuit, path: '/student/clarity' },
        { name: 'Internships', icon: Briefcase, path: '/student/opportunities' },
        { name: 'Placement Prep', icon: FileSignature, path: '/student/placement' },
        { name: 'Success Dashboard', icon: Award, path: '/student/success' },
        { name: 'Materials Library', icon: Library, path: 'https://drive.google.com/drive/folders/1P76hGiR7sSukWuLvJNRAJJrQjkgARVzw?usp=drive_link', external: true },
    ];

    const languages = ['English', 'Hinglish', 'Gujarati'];

    return (
        <div className="flex h-screen bg-neon-bg overflow-hidden text-dark-text font-sans">
            {/* Left Sidebar */}
            <aside className="w-64 bg-neon-panel border-r border-neon-border flex flex-col shrink-0 relative z-20 shadow-[4px_0_24px_rgba(0,0,0,0.2)]">

                {/* Branding */}
                <div className="h-20 flex items-center px-6 border-b border-neon-border/50 cursor-pointer shrink-0" onClick={() => navigate('/student')}>
                    <div className="w-8 h-8 mr-3 rounded-lg bg-neon-blue/20 flex items-center justify-center border border-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                        <span className="text-neon-blue font-black text-xl">S</span>
                    </div>
                    <h2 className="text-xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
                        SAARTHI AI
                    </h2>
                </div>

                {/* Sidebar Navigation Tabs */}
                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 no-scrollbar">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;

                        return (
                            <button
                                key={item.name}
                                onClick={() => {
                                    if (item.external) {
                                        window.open(item.path, '_blank', 'noopener,noreferrer');
                                    } else {
                                        navigate(item.path);
                                    }
                                }}
                                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all text-sm font-bold group ${isActive
                                    ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                                    : 'text-dark-text-muted hover:text-white hover:bg-white/5 border border-transparent'
                                    }`}
                            >
                                <Icon className={`w-5 h-5 mr-3 transition-colors ${isActive ? 'text-neon-blue' : 'text-slate-500 group-hover:text-amber-400'}`} />
                                {item.name}
                            </button>
                        );
                    })}
                </nav>

                {/* Bottom: Language switch & Profile */}
                <div className="p-4 border-t border-neon-border/50 space-y-4 shrink-0">
                    <div className="flex items-center justify-between bg-neon-bg border border-neon-border rounded-lg p-2">
                        <Globe className="w-4 h-4 text-dark-text-muted ml-1" />
                        <div className="flex items-center flex-1 justify-end">
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="bg-transparent text-white text-xs font-bold outline-none cursor-pointer p-1"
                            >
                                {languages.map(lang => (
                                    <option key={lang} value={lang} className="bg-neon-panel">{lang}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center space-x-3 cursor-pointer">
                            <div className="h-10 w-10 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-full shadow-[0_0_10px_var(--color-neon-blue)] flex items-center justify-center text-white font-bold border border-white/20">
                                <User className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm">Student</span>
                                <span className="text-dark-text-muted text-xs">Profile</span>
                            </div>
                        </div>
                        <button onClick={() => navigate('/login')} className="text-dark-text-muted hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-400/10">
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Scrollable Main Content */}
            <main className="flex-1 overflow-y-auto bg-neon-bg scroll-smooth relative">
                <Outlet />
            </main>

            {/* AI Assistant */}
            <AskAIAssistant />
        </div>
    );
}
