const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-028: Layout.jsx removes unused imports', () => {
    const code = fs.readFileSync('frontend/src/components/Layout.jsx', 'utf8');
    assert(!code.includes('Folder, '), 'Unused Folder import should be cleaned up');
});
