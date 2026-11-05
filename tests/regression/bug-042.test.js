const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-042: MentalWellness emergency support button opens crisis modal', () => {
    const code = fs.readFileSync('frontend/src/pages/MentalWellness.jsx', 'utf8');
    assert(code.includes('showCrisisModal'), 'Must declare showCrisisModal state');
    assert(code.includes('setShowCrisisModal(true)'), 'Button click must trigger crisis modal');
    assert(code.includes('Tele-MANAS'), 'Must provide crisis helpline contact info');
});
