export const generateMockStudents = (count = 82) => {
    const departments = ['Computer Science', 'Information Technology', 'Electronics', 'Mechanical', 'Civil'];
    const names = ['Aarav Patel', 'Neha Sharma', 'Rohan Desai', 'Priya Singh', 'Vihaan Kumar', 'Aditi Joshi', 'Karan Mehta', 'Anjali Gupta', 'Ishaan Shah', 'Kavya Verma', 'Arjun Reddy', 'Riya Patel', 'Sai Krishna', 'Ananya Iyer', 'Omkar Patil'];

    return Array.from({ length: count }).map((_, i) => {
        // Attendance between 70% and 98% (Requested 80-95% generally, but we need some <75% for AI alerts)
        const baseAttendance = Math.floor(Math.random() * 25) + 72;
        const cgpa = (Math.random() * (10 - 5.5) + 5.5).toFixed(2);
        const name = names[Math.floor(Math.random() * names.length)] + (i >= names.length ? ` ${i}` : '');

        return {
            id: `21${['DCS', 'DIT', 'DEC', 'DME', 'DCL'][Math.floor(Math.random() * 5)]}${String(i + 1).padStart(3, '0')}`,
            name,
            department: departments[Math.floor(Math.random() * departments.length)],
            attendance: baseAttendance > 98 ? 98 : baseAttendance,
            cgpa: parseFloat(cgpa)
        };
    });
};
