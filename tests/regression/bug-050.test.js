const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-050: CounselorConnect.jsx contains no duplicate rounded-full tokens', () => {
    const code = fs.readFileSync('frontend/src/pages/CounselorConnect.jsx', 'utf8');
    assert(!code.includes('rounded-full rounded-full'), 'Duplicate token must be removed');
});
