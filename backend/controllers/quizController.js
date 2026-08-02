const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await prisma.quizAccount.findMany({
            orderBy: { xp: 'desc' },
            take: 10,
            include: { student: { include: { user: true } } }
        });
        res.json(leaderboard);
    } catch (error) {
        console.error('Error fetching quiz leaderboard:', error);
        res.status(500).json({ error: 'Failed to fetch leaderboard' });
    }
};

exports.getQuizHistory = async (req, res) => {
    try {
        const studentId = parseInt(req.user?.id || 1); // Mock auth
        const account = await prisma.quizAccount.findUnique({
            where: { student_id: studentId },
            include: { matches: { orderBy: { played_at: 'desc' } } }
        });
        res.json(account || { xp: 0, level: 1, rank: 0, matches: [] });
    } catch (error) {
        console.error('Error fetching quiz history:', error);
        res.status(500).json({ error: 'Failed to fetch quiz history' });
    }
};

exports.submitMatchResult = async (req, res) => {
    try {
        const { topic, score, opponent_name } = req.body;
        const studentId = parseInt(req.user?.id || 1);

        // Find or create account
        let account = await prisma.quizAccount.findUnique({
            where: { student_id: studentId }
        });
        if (!account) {
            account = await prisma.quizAccount.create({
                data: { student_id: studentId, xp: 0, level: 1 }
            });
        }

        // Add match and add XP
        const newMatch = await prisma.quizMatch.create({
            data: {
                account_id: account.id,
                topic,
                score,
                opponent_name
            }
        });

        // XP logic
        const newXp = account.xp + score;
        const newLevel = Math.floor(newXp / 100) + 1; // 1 level per 100 XP

        await prisma.quizAccount.update({
            where: { id: account.id },
            data: { xp: newXp, level: newLevel }
        });

        res.json({ message: 'Match recorded', newXp, newLevel });
    } catch (error) {
        console.error('Error submitting quiz match:', error);
        res.status(500).json({ error: 'Failed to submit match' });
    }
};
