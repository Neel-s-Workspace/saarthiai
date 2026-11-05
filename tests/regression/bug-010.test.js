const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-010: Conversation history bounding to prevent context overflow', () => {
    const aiCode = fs.readFileSync('backend/controllers/aiController.js', 'utf8');
    assert(aiCode.includes('MAX_HISTORY'), 'Must define MAX_HISTORY boundary constant');
    assert(aiCode.includes('history.slice(-MAX_HISTORY)'), 'Must slice history array to max limit');
});
