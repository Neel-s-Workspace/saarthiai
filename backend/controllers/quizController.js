
const prisma = require('../db');

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
        const numericScore = Number(score);
        if (score === undefined || isNaN(numericScore) || !Number.isInteger(numericScore) || numericScore < 0) {
            return res.status(400).json({ error: 'Invalid score: score must be a non-negative integer' });
        }
        const studentId = parseInt(req.user?.id || 1);
        const parsedScore = Number(score) || 0;

        // Wrap operations in an atomic transaction to prevent race conditions
        const result = await prisma.$transaction(async (tx) => {
            // Find or create quiz account
            let account = await tx.quizAccount.findUnique({
                where: { student_id: studentId }
            });
            if (!account) {
                account = await tx.quizAccount.create({
                    data: { student_id: studentId, xp: 0, level: 1 }
                });
            }

            // Create match entry
            const newMatch = await tx.quizMatch.create({
                data: {
                    account_id: account.id,
                    topic,
                    score: parsedScore,
                    opponent_name
                }
            });

            // Update XP atomically
            const newXp = account.xp + numericScore;
            const newLevel = Math.floor(newXp / 100) + 1;

            const updatedAccount = await tx.quizAccount.update({
                where: { id: account.id },
                data: { xp: newXp, level: newLevel }
            });

            return { match: newMatch, newXp, newLevel };
        });

        res.json({ message: 'Match recorded', newXp: result.newXp, newLevel: result.newLevel });
    } catch (error) {
        console.error('Error submitting quiz match:', error);
        res.status(500).json({ error: 'Failed to submit match' });
    }
};
