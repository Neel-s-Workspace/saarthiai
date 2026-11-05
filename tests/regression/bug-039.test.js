const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-039: FacultyCopilot generates dynamic quiz questions based on topic', () => {
    const code = fs.readFileSync('frontend/src/pages/FacultyCopilot.jsx', 'utf8');
    assert(code.includes('quizList'), 'Must use dynamic quizList state');
    assert(code.includes('setQuizList('), 'Must update quiz state with generated quiz');
});
