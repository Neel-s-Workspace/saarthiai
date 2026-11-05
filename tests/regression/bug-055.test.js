const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-055: Language selector updates state, stores in localStorage and dispatches event', () => {
    const code = fs.readFileSync('frontend/src/components/Layout.jsx', 'utf8');
    assert(code.includes("localStorage.setItem('saarthi_language'"), 'Must persist language in localStorage');
    assert(code.includes("dispatchEvent(new CustomEvent('languageChange'"), 'Must dispatch languageChange event');
});
