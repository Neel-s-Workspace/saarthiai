import React from 'react';
import { BookOpen, Award, TrendingUp, History } from 'lucide-react';

export default function AcademicRecords() {
    const currentSemester = {
        name: "Semester 6",
        sgpa: "8.6",
        credits: 22,
        subjects: [
            { code: "CS601", name: "Artificial Intelligence", marks: 88, credits: 4, grade: "AA" },
            { code: "CS602", name: "Cloud Computing", marks: 74, credits: 3, grade: "BB" },
            { code: "CS603", name: "Machine Learning", marks: 92, credits: 4, grade: "AA" },
            { code: "CS604", name: "Cryptography", marks: 68, credits: 3, grade: "BC" },
            { code: "CS605", name: "Software Engineering", marks: 85, credits: 4, grade: "AA" },
            { code: "CS606", name: "Minor Project", marks: 95, credits: 4, grade: "AA" },
        ]
    };

    const pastSemesters = [
        { sem: "Semester 5", sgpa: "8.2", credits: 24 },
        { sem: "Semester 4", sgpa: "7.9", credits: 22 },
        { sem: "Semester 3", sgpa: "8.1", credits: 24 },
        { sem: "Semester 2", sgpa: "7.5", credits: 20 },
        { sem: "Semester 1", sgpa: "7.3", credits: 20 },
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-8 pb-12">

            {/* Header */}
            <div className="bg-neon-panel p-8 rounded-3xl border border-neon-border flex flex-col md:flex-row items-center justify-between text-center md:text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex items-center space-x-6">
                    <div className="w-20 h-20 rounded-2xl bg-neon-blue/20 flex items-center justify-center border border-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                        <Award className="w-10 h-10 text-neon-blue" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-white tracking-widest uppercase mb-1">Academic Records</h1>
                        <p className="text-dark-text-muted">Student ID: 21DCS001 • Computer Science</p>
                    </div>
                </div>

                <div className="relative z-10 mt-6 md:mt-0 flex space-x-4">
                    <div className="bg-neon-bg border border-neon-border p-4 rounded-xl text-center min-w-[120px]">
                        <p className="text-xs text-dark-text-muted uppercase tracking-wider mb-1">Cumulative CGPA</p>
                        <p className="text-3xl font-black text-amber-500">8.4</p>
                    </div>
                    <div className="bg-neon-bg border border-neon-border p-4 rounded-xl text-center min-w-[120px]">
                        <p className="text-xs text-dark-text-muted uppercase tracking-wider mb-1">Total Credits</p>
                        <p className="text-3xl font-black text-neon-purple">132</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Current Semester */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center space-x-3">
                        <TrendingUp className="w-6 h-6 text-neon-blue" />
                        <h2 className="text-xl font-bold text-white tracking-wider uppercase">Current: {currentSemester.name}</h2>
                    </div>

                    <div className="bg-neon-panel border border-neon-border rounded-2xl overflow-hidden shadow-lg">
                        <div className="p-4 bg-neon-bg/50 border-b border-neon-border flex justify-between items-center">
                            <span className="text-sm font-bold text-dark-text-muted">SGPA: <span className="text-white text-lg">{currentSemester.sgpa}</span></span>
                            <span className="text-sm font-bold text-dark-text-muted">Credits Earned: <span className="text-white">{currentSemester.credits}</span></span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-dark-text-muted">
                                <thead className="bg-neon-bg/30 text-xs uppercase tracking-wider border-b border-neon-border">
                                    <tr>
                                        <th className="px-6 py-4">Subject Code</th>
                                        <th className="px-6 py-4">Subject Name</th>
                                        <th className="px-6 py-4 text-center">Credits</th>
                                        <th className="px-6 py-4 text-center">Marks</th>
                                        <th className="px-6 py-4 text-center">Grade</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neon-border">
                                    {currentSemester.subjects.map((sub, idx) => (
                                        <tr key={idx} className="hover:bg-neon-bg/40 transition-colors">
                                            <td className="px-6 py-4 font-mono text-neon-purple">{sub.code}</td>
                                            <td className="px-6 py-4 font-bold text-white">{sub.name}</td>
                                            <td className="px-6 py-4 text-center">{sub.credits}</td>
                                            <td className="px-6 py-4 text-center">{sub.marks}</td>
                                            <td className="px-6 py-4 text-center">
                                                <span className={`px-3 py-1 rounded-full text-xs font-black tracking-widest ${sub.grade === 'AA' ? 'bg-[#00ff88]/20 text-[#00ff88]' : sub.grade === 'BB' ? 'bg-neon-blue/20 text-neon-blue' : 'bg-amber-400/20 text-amber-400'}`}>
                                                    {sub.grade}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Academic History */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                        <History className="w-6 h-6 text-amber-500" />
                        <h2 className="text-xl font-bold text-white tracking-wider uppercase">Academic History</h2>
                    </div>

                    <div className="bg-neon-panel border border-neon-border rounded-2xl p-6">
                        <div className="space-y-4">
                            {pastSemesters.map((sem, idx) => (
                                <div key={idx} className="flex justify-between items-center p-4 bg-neon-bg rounded-xl border border-neon-border hover:border-amber-500/50 transition-colors cursor-pointer group">
                                    <div>
                                        <h3 className="font-bold text-white group-hover:text-amber-500 transition-colors">{sem.sem}</h3>
                                        <p className="text-xs text-dark-text-muted mt-1">{sem.credits} Credits</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-dark-text-muted uppercase tracking-widest mb-1">SGPA</p>
                                        <p className="text-xl font-black text-white">{sem.sgpa}</p>
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
