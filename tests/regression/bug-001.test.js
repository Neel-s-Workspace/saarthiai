const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-001: JWT Authentication and Route Protection', () => {
    const serverCode = fs.readFileSync('backend/server.js', 'utf8');
    assert(serverCode.includes('authenticateToken'), 'authenticateToken middleware must be defined');
    assert(serverCode.includes("jwt.verify"), 'JWT verification must be present');
    assert(serverCode.includes("authenticateToken, counselorController.getAtRiskStudents"), 'Counselor route must be protected');
    assert(serverCode.includes("authenticateToken, studentController.getAnalytics"), 'Student route must be protected');
    assert(serverCode.includes("authenticateToken, aiController.generateCareerRoadmap"), 'AI roadmap route must be protected');
    assert(!serverCode.includes("token: 'mock-jwt-token'"), 'Mock static admin token must be removed');
});
