const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-002: backend/package.json must contain valid start script', () => {
    const pkg = JSON.parse(fs.readFileSync('backend/package.json', 'utf8'));
    assert.strictEqual(pkg.scripts.start, 'node server.js', 'start script must execute node server.js');
});
