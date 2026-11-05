const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAtRiskStudents = async (req, res) => {
    try {
        const counselorId = parseInt(req.user?.id || req.query?.counselor_id || 1);
        const userRole = req.user?.role || 'COUNSELOR';

        const filter = {
            risk_level: { in: ['high', 'critical'] }
        };

        // Unless Admin, restrict to students assigned to this counselor
        if (userRole !== 'ADMIN') {
            filter.student = {
                assigned_counselor_id: counselorId
            };
        }

        const atRiskStudents = await prisma.studentAnalytics.findMany({
            where: filter,
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
