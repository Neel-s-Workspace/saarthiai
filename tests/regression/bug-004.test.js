const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-004: Gemini model name must use valid production identifier', () => {
    const aiCode = fs.readFileSync('backend/controllers/aiController.js', 'utf8');
    assert(!aiCode.includes("'gemini-2.5-flash'"), 'Non-existent gemini-2.5-flash model must be removed');
    assert(aiCode.includes("process.env.GEMINI_MODEL || 'gemini-1.5-flash'"), 'Must fallback to gemini-1.5-flash with env override');
});
