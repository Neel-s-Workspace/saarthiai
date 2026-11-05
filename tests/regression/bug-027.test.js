const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-027: ExamPlanner calculates remaining days dynamically', () => {
    const code = fs.readFileSync('frontend/src/pages/ExamPlanner.jsx', 'utf8');
    assert(code.includes('calculateDaysLeft'), 'Must define dynamic calculateDaysLeft function');
    assert(code.includes('calculateDaysLeft(exam.date)'), 'Must call calculateDaysLeft for each exam date');
});
