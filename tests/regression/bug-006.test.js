const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-006: Quiz score input validation and numeric casting', () => {
    const quizCode = fs.readFileSync('backend/controllers/quizController.js', 'utf8');
    assert(quizCode.includes('Number.isInteger(numericScore)'), 'Must validate score is an integer');
    assert(quizCode.includes('numericScore < 0'), 'Must reject negative scores');
    assert(quizCode.includes('numericScore'), 'Must use numericScore for XP arithmetic');
});
