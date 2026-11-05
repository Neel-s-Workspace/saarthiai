const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-017: Database name consistency between .env.example and docker-compose', () => {
    const envContent = fs.readFileSync('backend/.env.example', 'utf8');
    const composeContent = fs.readFileSync('docker-compose.yml', 'utf8');
    assert(envContent.includes('counselor_app'), 'backend/.env.example must use counselor_app DB name');
    assert(composeContent.includes('counselor_app'), 'docker-compose must match DB name');
});
