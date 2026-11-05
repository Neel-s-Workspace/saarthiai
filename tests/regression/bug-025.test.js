const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-025: TechHub AI output contains whitespace-pre-wrap style', () => {
    const code = fs.readFileSync('frontend/src/pages/TechHub.jsx', 'utf8');
    assert(code.includes('whitespace-pre-wrap'), 'whitespace-pre-wrap class must be applied to multi-line text');
});
