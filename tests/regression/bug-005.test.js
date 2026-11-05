const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-005: submitMatchResult must use prisma.$transaction', () => {
    const quizCode = fs.readFileSync('backend/controllers/quizController.js', 'utf8');
    assert(quizCode.includes('prisma.$transaction'), 'Match submission must be wrapped in atomic transaction');
    assert(quizCode.includes('tx.quizAccount.findUnique'), 'Account lookup must use transaction client');
    assert(quizCode.includes('tx.quizMatch.create'), 'Match creation must use transaction client');
});
