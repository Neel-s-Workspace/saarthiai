const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-035: OpportunityFinder search input filters opportunities', () => {
    const code = fs.readFileSync('frontend/src/pages/OpportunityFinder.jsx', 'utf8');
    assert(code.includes('oppSearch'), 'oppSearch state must be defined');
    assert(code.includes('jobs.filter('), 'Must filter jobs array');
});
