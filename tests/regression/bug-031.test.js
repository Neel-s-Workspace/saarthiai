const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-031: Correct Web Development spelling in TechHub categories', () => {
    const code = fs.readFileSync('frontend/src/pages/TechHub.jsx', 'utf8');
    assert(!code.includes("'Web Developement'"), 'Typo Web Developement must be removed');
    assert(code.includes("'Web Development'"), 'Must spell Web Development correctly');
});
