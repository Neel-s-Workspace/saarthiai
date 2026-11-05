const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-003: Singleton PrismaClient must be exported and shared', () => {
    assert(fs.existsSync('backend/db.js'), 'backend/db.js singleton module must exist');
    const serverCode = fs.readFileSync('backend/server.js', 'utf8');
    const quizCode = fs.readFileSync('backend/controllers/quizController.js', 'utf8');
    const counselorCode = fs.readFileSync('backend/controllers/counselorController.js', 'utf8');
    const studentCode = fs.readFileSync('backend/controllers/studentController.js', 'utf8');

    assert(!serverCode.includes('new PrismaClient'), 'server.js must not instantiate new PrismaClient');
    assert(!quizCode.includes('new PrismaClient'), 'quizController.js must not instantiate new PrismaClient');
    assert(!counselorCode.includes('new PrismaClient'), 'counselorController.js must not instantiate new PrismaClient');
    assert(!studentCode.includes('new PrismaClient'), 'studentController.js must not instantiate new PrismaClient');
    assert(serverCode.includes("require('./db')"), 'server.js must import shared db module');
});
