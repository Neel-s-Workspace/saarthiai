const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-018: Notes navigation link points to /student/squeeze', () => {
    const layoutCode = fs.readFileSync('frontend/src/components/Layout.jsx', 'utf8');
    assert(layoutCode.includes("path: '/student/squeeze'"), 'Notes item must navigate to /student/squeeze');
    assert(!layoutCode.includes("{ name: 'Notes', icon: FileText, path: '/student/forms' }"), 'Old misrouted path must be removed');
});
