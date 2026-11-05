const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-016: Rate limiter middleware applied to /api/ai endpoints', () => {
    const serverCode = fs.readFileSync('backend/server.js', 'utf8');
    assert(serverCode.includes("app.use('/api/ai', aiRateLimiter)"), 'Must apply aiRateLimiter to /api/ai');
    assert(serverCode.includes("res.status(429)"), 'Must return 429 when rate limit exceeded');
});
