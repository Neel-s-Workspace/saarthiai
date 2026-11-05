const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-047: docker-compose parameterizes JWT_SECRET with env variable substitution', () => {
    const code = fs.readFileSync('docker-compose.yml', 'utf8');
    assert(!code.includes('JWT_SECRET=supersecretjwtkey'), 'Static hardcoded JWT secret must be removed');
    assert(code.includes('changeme_in_production'), 'Must use environment variable fallback');
});
