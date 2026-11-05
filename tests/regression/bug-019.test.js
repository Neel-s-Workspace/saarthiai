const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-019: React Router contains catch-all wildcard route', () => {
    const appCode = fs.readFileSync('frontend/src/App.jsx', 'utf8');
    assert(appCode.includes('path="*"'), 'App.jsx must contain catch-all wildcard route');
});
