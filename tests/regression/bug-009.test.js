const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-009: Prompt injection sanitization for AI generators', () => {
    const aiCode = fs.readFileSync('backend/controllers/aiController.js', 'utf8');
    assert(aiCode.includes('sanitizePromptInput'), 'Must define sanitizePromptInput helper');
    assert(aiCode.includes('sanitizePromptInput(educationLevel)'), 'Must sanitize educationLevel input');
    assert(aiCode.includes('sanitizePromptInput(goal)'), 'Must sanitize goal input');
});
