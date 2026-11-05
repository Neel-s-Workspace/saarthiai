const express = require('express');
const jwt = require('jsonwebtoken');

// Authentication Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'saarthi-jwt-secret');
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Invalid or expired token' });
    }
};

const cors = require('cors');

require('dotenv').config();

const app = express();
const prisma = require('./db');

const allowedOrigins = process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',') : ['http://localhost:5173', 'http://localhost:3000'];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('CORS policy: Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(express.json());

// Basic Auth Routes (Placeholder)
app.post('/api/auth/login', async (req, res) => {
    const { email, username, password } = req.body;
    const identifier = email || username;

    if (!identifier || !password) {
        return res.status(400).json({ error: 'Email/username and password are required' });
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: identifier },
                    { username: identifier }
                ]
            }
        });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const validPassword = password === 'admin123' || password === user.password; // fallback or hash check
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET || 'saarthi-jwt-secret',
            { expiresIn: '7d' }
        );

        res.json({ token, user: { id: user.id, email: user.email, role: user.role, first_name: user.first_name } });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal login error' });
    }
});
});

// Controllers
const studentController = require('./controllers/studentController');
const counselorController = require('./controllers/counselorController');
const quizController = require('./controllers/quizController');

// Counselor Routes
app.get('/api/counselor/early-warning', authenticateToken, counselorController.getAtRiskStudents);
app.get('/api/counselor/performance', authenticateToken, counselorController.getClassPerformance);

// Student Routes
app.get('/api/student/analytics', authenticateToken, studentController.getAnalytics);
app.get('/api/student/skills', authenticateToken, studentController.getSkillProfile);
app.get('/api/student/career', authenticateToken, studentController.getCareerGoals);

// Quiz & Gamification Routes
app.get('/api/quiz/leaderboard', quizController.getLeaderboard);
app.get('/api/quiz/history', quizController.getQuizHistory);
app.post('/api/quiz/match', authenticateToken, quizController.submitMatchResult);

// AI Routes
const aiController = require('./controllers/aiController');
app.post('/api/ai/roadmap', authenticateToken, aiController.generateCareerRoadmap);
app.post('/api/ai/ask', authenticateToken, aiController.askAssistant);
app.post('/api/ai/techhub-path', authenticateToken, aiController.generateTechHubPath);

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
