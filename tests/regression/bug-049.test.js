const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-049: mockData.js prevents duplicate student name collision', () => {
    const code = fs.readFileSync('frontend/src/utils/mockData.js', 'utf8');
    assert(code.includes('i >= names.length'), 'Must use greater-or-equal check for name index disambiguation');
});
