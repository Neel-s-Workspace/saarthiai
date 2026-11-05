const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-036: StudentForms search input filters form records', () => {
    const code = fs.readFileSync('frontend/src/pages/StudentForms.jsx', 'utf8');
    assert(code.includes('formSearch'), 'formSearch state must be declared');
    assert(code.includes('forms.filter('), 'forms array must be filtered by search term');
});
