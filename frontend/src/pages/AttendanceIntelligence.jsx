import React, { useState, useMemo } from 'react';
import { generateMockStudents } from '../utils/mockData';
import { Search, AlertTriangle, ShieldCheck, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AttendanceIntelligence() {
    const [students] = useState(generateMockStudents(82));
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStudents = useMemo(() => {
        return students.filter(s =>
            s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.department.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [students, searchTerm]);

    const atRiskCount = students.filter(s => s.attendance < 75).length;
    const avgAttendance = (students.reduce((acc, curr) => acc + curr.attendance, 0) / students.length).toFixed(1);

    // Chart Data Generation (Grouping by ranges)
    const chartData = useMemo(() => {
        const ranges = { '< 75% (Risk)': 0, '75-85%': 0, '85-95%': 0, '> 95%': 0 };
        students.forEach(s => {
            if (s.attendance < 75) ranges['< 75% (Risk)']++;
            else if (s.attendance < 85) ranges['75-85%']++;
            else if (s.attendance < 95) ranges['85-95%']++;
            else ranges['> 95%']++;
        });
        return Object.keys(ranges).map(key => ({ name: key, count: ranges[key] }));
    }, [students]);

    return (
        <div className="space-y-6 max-w-7xl mx-auto pb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-neon-panel p-6 rounded-2xl border border-neon-border shadow-[0_0_15px_rgba(0,240,255,0.1)] gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1">Attendance Intelligence</h1>
                    <p className="text-sm text-neon-blue font-medium">Real-time monitoring of 82 student records</p>
                </div>
                <div className="relative w-full md:w-80 border border-neon-border bg-neon-bg rounded-xl flex items-center px-4 py-2 focus-within:border-neon-blue shadow-inner">
                    <Search className="w-5 h-5 text-slate-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Filter by Name, ID or Dept..."
                        className="bg-transparent border-none outline-none text-white w-full placeholder-slate-600"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* AI Insight Header */}
            <div className={`p-4 rounded-xl border ${atRiskCount > 0 ? 'bg-red-500/10 border-red-500/50' : 'bg-[#00ff88]/10 border-[#00ff88]/50'} flex items-start space-x-4`}>
                {atRiskCount > 0 ? (
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 animate-pulse" />
                ) : (
                    <ShieldCheck className="w-6 h-6 text-[#00ff88] flex-shrink-0" />
                )}
                <div>
                    <h4 className={`font-bold ${atRiskCount > 0 ? 'text-red-400' : 'text-[#00ff88]'}`}>
                        AI Insight: {atRiskCount > 0 ? 'Critical Interventions Required' : 'Campus Attendance Nominal'}
                    </h4>
                    <p className="text-sm text-dark-text-muted mt-1">
                        System intelligence has detected {atRiskCount} students falling below the 75% mandatory attendance threshold. Overall campus average is {avgAttendance}%.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chart */}
                <div className="bg-neon-panel p-6 rounded-2xl border border-neon-border h-96">
                    <h3 className="text-lg font-bold text-white mb-6">Distribution Overview</h3>
                    <ResponsiveContainer width="100%" height="80%">
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#232333" />
                            <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                            <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#12121A', borderColor: '#232333', color: '#fff' }} />
                            <Bar dataKey="count" fill="#00F0FF" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Table */}
                <div className="lg:col-span-2 bg-neon-panel rounded-2xl border border-neon-border overflow-hidden flex flex-col h-[600px]">
                    <div className="p-4 border-b border-neon-border flex justify-between items-center bg-neon-panel z-10">
                        <h3 className="text-lg font-bold text-white">Student Records Database</h3>
                        <button className="text-xs flex items-center text-neon-blue hover:text-white transition-colors bg-neon-blue/10 px-3 py-1.5 rounded-lg">
                            <Filter className="w-3 h-3 mr-1" /> Sort/Filter
                        </button>
                    </div>

                    <div className="overflow-y-auto flex-1 p-0">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-dark-text-muted uppercase sticky top-0 bg-neon-panel border-b border-neon-border shadow-md z-10">
                                <tr>
                                    <th className="px-6 py-4">Student Info</th>
                                    <th className="px-6 py-4">Department</th>
                                    <th className="px-6 py-4">Attendance Metric</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.map((student, idx) => (
                                    <tr key={student.id} className="border-b border-neon-border/50 hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-white">{student.name}</p>
                                            <p className="text-xs text-neon-purple font-mono mt-1">{student.id}</p>
                                        </td>
                                        <td className="px-6 py-4 text-slate-300">{student.department}</td>
                                        <td className="px-6 py-4 w-1/3">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className={`font-bold ${student.attendance < 75 ? 'text-red-500' : 'text-[#00ff88]'}`}>
                                                    {student.attendance}%
                                                </span>
                                                {student.attendance < 75 && <AlertTriangle className="w-3 h-3 text-red-500 animate-pulse" />}
                                            </div>
                                            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${student.attendance < 75 ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'bg-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.6)]'}`}
                                                    style={{ width: `${student.attendance}%` }}
                                                ></div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filteredStudents.length === 0 && (
                                    <tr>
                                        <td colSpan="3" className="px-6 py-8 text-center text-slate-500">No records matched your search.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
