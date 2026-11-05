const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-022: Login stores token and Logout clears localStorage credentials', () => {
    const loginCode = fs.readFileSync('frontend/src/pages/Login.jsx', 'utf8');
    const layoutCode = fs.readFileSync('frontend/src/components/Layout.jsx', 'utf8');
    assert(loginCode.includes("localStorage.setItem('token'"), 'Login must store token');
    assert(layoutCode.includes("localStorage.removeItem('token')"), 'Logout must remove token');
});
