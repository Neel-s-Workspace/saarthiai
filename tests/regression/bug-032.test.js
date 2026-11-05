const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-032: TechHub regenerate button calls handleGenerate instead of clearing state', () => {
    const code = fs.readFileSync('frontend/src/pages/TechHub.jsx', 'utf8');
    assert(code.includes('onClick={() => handleGenerate()}'), 'Regenerate button must invoke handleGenerate');
});
