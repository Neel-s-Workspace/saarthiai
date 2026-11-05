const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-007: Counselor authorization filtering on at-risk students', () => {
    const counselorCode = fs.readFileSync('backend/controllers/counselorController.js', 'utf8');
    assert(counselorCode.includes('assigned_counselor_id: counselorId'), 'Must filter by assigned counselor ID');
    assert(counselorCode.includes('ADMIN'), 'Must distinguish admin and counselor roles');
});
