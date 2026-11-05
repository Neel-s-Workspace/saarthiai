const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-023: CareerMatchEngine circular progress SVG centering and viewBox', () => {
    const code = fs.readFileSync('frontend/src/pages/CareerMatchEngine.jsx', 'utf8');
    assert(code.includes('viewBox="0 0 64 64"'), 'SVG must define viewBox');
    assert(code.includes('cx="32" cy="32"'), 'Circle center must be 32,32');
});
