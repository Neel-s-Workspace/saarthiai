const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-034: CareerMatchEngine search input filters career matches', () => {
    const code = fs.readFileSync('frontend/src/pages/CareerMatchEngine.jsx', 'utf8');
    assert(code.includes('searchQuery'), 'Must declare searchQuery state');
    assert(code.includes('setSearchQuery(e.target.value)'), 'Must bind onChange');
    assert(code.includes('matches.filter('), 'Must filter matches array');
});
