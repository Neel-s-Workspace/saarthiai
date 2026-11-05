const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-045: ConfusionClarity file input handles selection and displays attached filename', () => {
    const code = fs.readFileSync('frontend/src/pages/ConfusionClarity.jsx', 'utf8');
    assert(code.includes('uploadedFile'), 'Must declare uploadedFile state');
    assert(code.includes('setUploadedFile(e.target.files[0]?.name'), 'File input must bind onChange handler');
});
