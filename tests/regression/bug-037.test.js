const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-037: AdminDashboard search input is bound to controlled state', () => {
    const code = fs.readFileSync('frontend/src/pages/AdminDashboard.jsx', 'utf8');
    assert(code.includes('searchQuery'), 'searchQuery state must be defined');
    assert(code.includes('setSearchQuery(e.target.value)'), 'Must bind onChange');
});
