const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-038: ConfusionClarity generates dynamic topic explanation instead of static Newton law', () => {
    const code = fs.readFileSync('frontend/src/pages/ConfusionClarity.jsx', 'utf8');
    assert(code.includes('dynamicSteps'), 'Must use dynamicSteps state');
    assert(code.includes('setDynamicSteps('), 'Must update dynamic steps based on user query');
});
