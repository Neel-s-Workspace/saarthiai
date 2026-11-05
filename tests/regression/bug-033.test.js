const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-033: TechHub search input is controlled and bound to state', () => {
    const code = fs.readFileSync('frontend/src/pages/TechHub.jsx', 'utf8');
    assert(code.includes('techSearch'), 'techSearch state must be defined');
    assert(code.includes('value={techSearch}'), 'Input must bind value to techSearch');
    assert(code.includes('onChange={(e) => setTechSearch(e.target.value)}'), 'Input must have onChange handler');
});
