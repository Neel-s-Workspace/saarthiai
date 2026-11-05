const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-044: CareerRoadmap renders user-visible error banner on failure', () => {
    const code = fs.readFileSync('frontend/src/pages/CareerRoadmap.jsx', 'utf8');
    assert(code.includes('errorMessage'), 'Must define errorMessage state');
    assert(code.includes('setErrorMessage('), 'Must set errorMessage in catch block');
    assert(code.includes('{errorMessage &&'), 'Must render error banner');
});
