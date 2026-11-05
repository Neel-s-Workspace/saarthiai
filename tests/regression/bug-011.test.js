const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-011: Sidebar navigation links include all main platform routes', () => {
    const layoutCode = fs.readFileSync('frontend/src/components/Layout.jsx', 'utf8');
    assert(layoutCode.includes('/student/roadmap'), 'Must include Career Roadmap link');
    assert(layoutCode.includes('/student/skills'), 'Must include Skill Gap link');
    assert(layoutCode.includes('/student/quiz'), 'Must include Quiz Battle link');
    assert(layoutCode.includes('/counselor'), 'Must include Counselor Dashboard link');
    assert(layoutCode.includes('/admin'), 'Must include Admin Dashboard link');
});
