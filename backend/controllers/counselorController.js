
const prisma = require('../db');

exports.getAtRiskStudents = async (req, res) => {
    try {
        const counselorId = parseInt(req.user?.id || 1); // Mock auth
        const atRiskStudents = await prisma.studentAnalytics.findMany({
            where: {
                risk_level: { in: ['high', 'critical'] }
            },
            include: {
                student: {
                    include: { user: true }
                }
            }
        });
        res.json(atRiskStudents);
    } catch (error) {
        console.error('Error fetching at-risk students:', error);
        res.status(500).json({ error: 'Failed to fetch at-risk students' });
    }
};

exports.getClassPerformance = async (req, res) => {
    try {
        // Just fetching top analytics for now
        const performance = await prisma.studentAnalytics.findMany({
            orderBy: { success_score: 'desc' },
            take: 20,
            include: {
                student: { include: { user: true } }
            }
        });
        res.json(performance);
    } catch (error) {
        console.error('Error fetching class performance:', error);
        res.status(500).json({ error: 'Failed to fetch class performance' });
    }
};
