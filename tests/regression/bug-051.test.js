const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-051: AdminDashboard.jsx cleans up unused imports', () => {
    const code = fs.readFileSync('frontend/src/pages/AdminDashboard.jsx', 'utf8');
    assert(!code.includes('MoreVertical, '), 'Unused MoreVertical icon import must be removed');
    assert(!code.includes('TrendingDown'), 'Unused TrendingDown icon import must be removed');
});
