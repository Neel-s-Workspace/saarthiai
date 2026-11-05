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

// AI Routes
const aiController = require('./controllers/aiController');
app.post('/api/ai/roadmap', aiController.generateCareerRoadmap);
app.post('/api/ai/ask', aiController.askAssistant);
app.post('/api/ai/techhub-path', aiController.generateTechHubPath);

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

// 404 Route Handler
app.use((req, res, next) => {
    res.status(404).json({ error: 'Endpoint not found', path: req.originalUrl });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Unhandled Server Error:', err);
    const status = err.status || 500;
    res.status(status).json({
        error: err.message || 'Internal Server Error'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
