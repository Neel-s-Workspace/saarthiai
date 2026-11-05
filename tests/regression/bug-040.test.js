const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-040: ResumeBuilder updates resume text upon optimization', () => {
    const code = fs.readFileSync('frontend/src/pages/ResumeBuilder.jsx', 'utf8');
    assert(code.includes('bullets'), 'bullets state must be declared');
    assert(code.includes('setBullets('), 'Optimization must update bullets state');
    assert(code.includes('{bullets.map('), 'Must render dynamic bullets');
});
