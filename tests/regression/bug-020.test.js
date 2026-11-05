const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-020: docker-compose frontend build args include VITE_API_URL', () => {
    const dcCode = fs.readFileSync('docker-compose.yml', 'utf8');
    assert(dcCode.includes('args:'), 'Must include build args section');
    assert(dcCode.includes('VITE_API_URL=http://localhost:5000/api'), 'Must pass VITE_API_URL as build argument');
});
