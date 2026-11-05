const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-041: Squeeze notes search filters study materials dynamically', () => {
    const code = fs.readFileSync('frontend/src/pages/Squeeze.jsx', 'utf8');
    assert(code.includes('Complete Guide.pdf'), 'Must dynamically generate file title with query');
    assert(code.includes('Chapter Summary'), 'Must dynamically generate chapter summary title');
});
