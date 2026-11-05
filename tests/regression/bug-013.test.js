const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-013: Restricted CORS origins configuration', () => {
    const serverCode = fs.readFileSync('backend/server.js', 'utf8');
    assert(!serverCode.includes("app.use(cors());"), 'Wildcard cors() must be replaced');
    assert(serverCode.includes('allowedOrigins'), 'Must define allowedOrigins array');
    assert(serverCode.includes('credentials: true'), 'Must enable credentials option');
});
