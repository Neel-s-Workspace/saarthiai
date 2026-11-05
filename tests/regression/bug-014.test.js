const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-014: Express 404 handler and 4-argument global error handler', () => {
    const serverCode = fs.readFileSync('backend/server.js', 'utf8');
    assert(serverCode.includes("res.status(404).json({ error: 'Endpoint not found'"), '404 handler must be configured');
    assert(serverCode.includes("(err, req, res, next)"), '4-parameter error handler must be configured');
});
