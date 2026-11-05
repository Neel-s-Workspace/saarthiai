const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient({});

app.use(cors());
app.use(express.json());

// Basic Auth Routes (Placeholder)
app.post('/api/auth/login', async (req, res) => {
    // Mock login
    res.json({ token: 'mock-jwt-token', user: { id: 1, role: 'ADMIN', first_name: 'Admin' } });
});

// Controllers
const studentController = require('./controllers/studentController');
const counselorController = require('./controllers/counselorController');
const quizController = require('./controllers/quizController');

// Counselor Routes
app.get('/api/counselor/early-warning', counselorController.getAtRiskStudents);
app.get('/api/counselor/performance', counselorController.getClassPerformance);

// Student Routes
app.get('/api/student/analytics', studentController.getAnalytics);
app.get('/api/student/skills', studentController.getSkillProfile);
app.get('/api/student/career', studentController.getCareerGoals);

// Quiz & Gamification Routes
app.get('/api/quiz/leaderboard', quizController.getLeaderboard);
app.get('/api/quiz/history', quizController.getQuizHistory);
app.post('/api/quiz/match', quizController.submitMatchResult);

// Rate limiting middleware for AI endpoints
const aiRateLimitMap = new Map();
const aiRateLimiter = (req, res, next) => {
    const ip = req.ip || req.connection?.remoteAddress || '127.0.0.1';
    const now = Date.now();
    const windowMs = 15 * 60 * 1000;
    const maxRequests = 30;

    const record = aiRateLimitMap.get(ip) || { count: 0, resetTime: now + windowMs };
    if (now > record.resetTime) {
        record.count = 0;
        record.resetTime = now + windowMs;
    }
    record.count++;
    aiRateLimitMap.set(ip, record);

    if (record.count > maxRequests) {
        return res.status(429).json({ error: 'Too many AI requests. Please try again later.' });
    }
    next();
};

app.use('/api/ai', aiRateLimiter);

// AI Routes
const aiController = require('./controllers/aiController');
app.post('/api/ai/roadmap', aiController.generateCareerRoadmap);
app.post('/api/ai/ask', aiController.askAssistant);
app.post('/api/ai/techhub-path', aiController.generateTechHubPath);

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
