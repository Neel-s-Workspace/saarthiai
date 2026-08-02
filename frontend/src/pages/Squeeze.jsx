import React, { useState } from 'react';
import { Search, FileText, Book, UploadCloud, BrainCircuit, Zap, Filter, ChevronRight, File } from 'lucide-react';

export default function Squeeze() {
    const [query, setQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [results, setResults] = useState([]);

    const mockSearch = () => {
        if (!query.trim()) return;
        setIsSearching(true);
        setTimeout(() => {
            setResults([
                { id: 1, type: "PDF", title: "Newton's Laws Complete Guide.pdf", match: "98%", snippet: "...Newton's first law states that an object will remain at rest or in uniform motion..." },
                { id: 2, type: "Notes", title: "Physics Chapter 4 Summary", match: "85%", snippet: "...acceleration is produced when a force acts on a mass (Second Law)..." },
                { id: 3, type: "Book", title: "University Physics Vol 1", match: "72%", snippet: "...The third law states that for every action, there is an equal and opposite reaction..." },
            ]);
            setIsSearching(false);
        }, 1200);
    }

    return (
        <div className="flex flex-col h-full bg-neon-bg p-6 lg:p-10 animate-in fade-in overflow-y-auto">

            {/* Header */}
            <div className="flex flex-col items-center justify-center text-center mt-12 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-neon-purple to-neon-blue flex items-center justify-center shadow-[0_0_20px_rgba(178,0,255,0.4)] mb-6 animate-pulse">
                    <Search className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
                    Squeeze AI Search
                </h1>
                <p className="text-lg text-dark-text-muted max-w-2xl px-4">
                    Search across all your uploaded books, lecture notes, and research papers instantly. Let AI squeeze the exact answers out for you.
                </p>
            </div>

            {/* Huge Search Bar */}
            <div className="max-w-3xl mx-auto w-full relative mb-16">
                <div className="absolute inset-0 bg-neon-purple/20 rounded-2xl blur-xl"></div>
                <div className="relative flex items-center bg-neon-panel border border-neon-border hover:border-neon-purple/50 focus-within:border-neon-purple rounded-2xl p-2 transition-all shadow-2xl">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && mockSearch()}
                        placeholder="Ask anything (e.g., 'Explain Newton's Laws from my books')..."
                        className="flex-1 bg-transparent border-none outline-none text-white text-lg px-4 py-4 placeholder:text-dark-text-muted"
                    />
                    <button
                        onClick={mockSearch}
                        className={`p-4 rounded-xl flex items-center justify-center transition-all ${query.trim() ? 'bg-neon-purple text-white shadow-[0_0_15px_rgba(178,0,255,0.5)]' : 'bg-white/5 text-slate-500 cursor-not-allowed'
                            }`}
                    >
                        {isSearching ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Search className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Results Area */}
            {results.length > 0 && (
                <div className="max-w-4xl mx-auto w-full animate-in slide-in-from-bottom-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white flex items-center">
                            <Zap className="w-5 h-5 mr-2 text-neon-blue" />
                            AI Extracted Results
                        </h2>
                        <button className="flex items-center text-sm text-dark-text-muted hover:text-white transition-colors">
                            <Filter className="w-4 h-4 mr-1" /> Filter
                        </button>
                    </div>

                    <div className="space-y-4">
                        {results.map(res => (
                            <div key={res.id} className="bg-neon-panel border border-neon-border hover:border-neon-purple/30 rounded-2xl p-5 transition-all group cursor-pointer flex items-start gap-4">
                                <div className="p-3 bg-neon-bg border border-neon-border rounded-xl group-hover:bg-neon-purple/10 group-hover:border-neon-purple/30 transition-colors shrink-0">
                                    {res.type === 'PDF' && <FileText className="w-6 h-6 text-red-400" />}
                                    {res.type === 'Notes' && <File className="w-6 h-6 text-blue-400" />}
                                    {res.type === 'Book' && <Book className="w-6 h-6 text-green-400" />}
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
                                        <h3 className="text-white font-bold text-lg group-hover:text-neon-purple transition-colors">{res.title}</h3>
                                        <span className="text-xs font-bold px-2 py-1 rounded bg-neon-purple/10 text-neon-purple border border-neon-purple/20 self-start">
                                            {res.match} Match
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {res.snippet}
                                    </p>
                                </div>
                                <div className="hidden sm:flex self-center ml-2 text-slate-500 group-hover:text-neon-purple transition-colors">
                                    <ChevronRight className="w-5 h-5" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Quick Upload CTA (when empty) */}
            {results.length === 0 && (
                <div className="max-w-2xl mx-auto w-full mt-12 border-2 border-dashed border-neon-border rounded-3xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/5 hover:border-neon-blue/50 transition-all">
                    <div className="w-16 h-16 bg-neon-panel rounded-full flex items-center justify-center mb-4">
                        <UploadCloud className="w-8 h-8 text-neon-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Upload Material to Squeeze</h3>
                    <p className="text-dark-text-muted text-sm max-w-md">
                        Feed the AI books, lecture PDFs, or personal notes before searching so it can squeeze out exact answers for you.
                    </p>
                </div>
            )}
        </div>
    );
}
