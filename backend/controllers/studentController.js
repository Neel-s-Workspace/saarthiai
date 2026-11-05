
const prisma = require('../db');

exports.getAnalytics = async (req, res) => {
    try {
        const studentId = parseInt(req.user?.id || 1); // Mock auth
        const analytics = await prisma.studentAnalytics.findUnique({
            where: { student_id: studentId }
        });

        if (!analytics) {
            return res.json({ success_score: 0, risk_level: 'low', weekly_study_hrs: 0 });
        }
        res.json(analytics);
    } catch (error) {
        console.error('Error fetching student analytics:', error);
        res.status(500).json({ error: 'Failed to fetch analytics' });
    }
};

exports.getSkillProfile = async (req, res) => {
    try {
        const studentId = parseInt(req.user?.id || 1);
        const skills = await prisma.skillProfile.findMany({
            where: { student_id: studentId }
        });
        res.json(skills);
    } catch (error) {
        console.error('Error fetching skill profile:', error);
        res.status(500).json({ error: 'Failed to fetch skill profile' });
    }
};

exports.getCareerGoals = async (req, res) => {
    try {
        const studentId = parseInt(req.user?.id || 1);
        const careerGoal = await prisma.careerGoal.findUnique({
            where: { student_id: studentId }
        });
        res.json(careerGoal || { target_role: 'Not set', milestones: [] });
    } catch (error) {
        console.error('Error fetching career goals:', error);
        res.status(500).json({ error: 'Failed to fetch career goals' });
    }
};
