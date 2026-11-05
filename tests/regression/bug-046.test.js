const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-046: StudentDashboard file upload button triggers file input dialog', () => {
    const code = fs.readFileSync('frontend/src/pages/StudentDashboard.jsx', 'utf8');
    assert(code.includes('fileInputRef'), 'Must declare fileInputRef');
    assert(code.includes('fileInputRef.current?.click()'), 'Button must trigger click on hidden input');
});
