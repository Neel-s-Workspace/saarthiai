const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-021: Layout.jsx conditionally omits floating assistant on /student to avoid duplicate', () => {
    const layoutCode = fs.readFileSync('frontend/src/components/Layout.jsx', 'utf8');
    assert(layoutCode.includes("path !== '/student' && <AskAIAssistant"), 'Assistant must not be duplicated on /student dashboard');
});
