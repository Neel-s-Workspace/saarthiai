import React from 'react';
import { Clock, Video, Calendar as CalendarIcon, User, MessageSquare } from 'lucide-react';

export default function UpcomingMeetings() {
    const meetings = [
        {
            id: 1,
            date: "Tomorrow, 3:00 PM",
            counselor: "Mr. Amit Sharma",
            topic: "Career Guidance & Placement Roadmap",
            status: "Confirmed",
            type: "Video Call",
            link: "https://zoom.us/j/123456789"
        },
        {
            id: 2,
            date: "Friday, 11:00 AM",
            counselor: "Dr. Neha Patel",
            topic: "Academic Performance Review",
            status: "Pending",
            type: "In-Person",
            link: "Room 402, Block A"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-12">
            <div className="bg-neon-panel p-8 rounded-3xl border border-neon-border flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/20 rounded-full blur-3xl"></div>
                <div className="w-16 h-16 rounded-full bg-[#00ff88]/20 flex items-center justify-center mb-4 border border-[#00ff88]/50 shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                    <Clock className="w-8 h-8 text-[#00ff88]" />
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-widest uppercase">Upcoming Meetings</h1>
                <p className="text-dark-text-muted mt-2">Manage your academic counseling scheduling effectively.</p>
            </div>

            <div className="grid gap-6 mt-8">
                {meetings.map((meeting) => (
                    <div key={meeting.id} className="bg-neon-bg p-6 rounded-2xl border border-neon-border hover:border-[#00ff88]/50 transition-colors relative flex flex-col md:flex-row md:items-center justify-between">
                        <div className="space-y-4 md:w-2/3">
                            <div className="flex items-center space-x-3">
                                <div className={`px-3 py-1 text-[10px] uppercase font-black tracking-widest rounded-full ${meeting.status === 'Confirmed' ? 'bg-[#00ff88]/20 text-[#00ff88]' : 'bg-amber-400/20 text-amber-400'}`}>
                                    {meeting.status}
                                </div>
                                <div className="text-sm font-bold text-dark-text-muted flex items-center"><CalendarIcon className="w-4 h-4 mr-2" /> {meeting.date}</div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white leading-tight">{meeting.topic}</h3>
                                <div className="flex items-center text-neon-blue font-medium mt-1">
                                    <User className="w-4 h-4 mr-2" />
                                    {meeting.counselor}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end space-y-3 md:w-1/3">
                            <div className="text-xs text-dark-text-muted flex items-center">
                                {meeting.type === 'Video Call' ? <Video className="w-4 h-4 mr-2 text-pink-500" /> : <MessageSquare className="w-4 h-4 mr-2 text-amber-400" />}
                                {meeting.type}
                            </div>
                            {meeting.type === 'Video Call' ? (
                                <button className="w-full md:w-auto px-6 py-2 bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/50 rounded-xl font-bold hover:bg-[#00ff88]/40 transition-colors shadow-[0_0_10px_rgba(0,255,136,0.1)]">
                                    Join Meeting
                                </button>
                            ) : (
                                <div className="px-4 py-2 bg-neon-panel border border-neon-border rounded-xl text-xs font-mono text-dark-text-muted w-full md:w-auto text-center">
                                    {meeting.link}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full py-4 mt-6 border border-dashed border-neon-border rounded-2xl text-dark-text-muted hover:border-white hover:text-white transition-colors bg-neon-panel font-bold flex justify-center items-center">
                Schedule New Consultation
            </button>
        </div>
    );
}
