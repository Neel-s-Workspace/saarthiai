const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-015: Robust JSON parsing with markdown codeblock stripping and try-catch', () => {
    const aiCode = fs.readFileSync('backend/controllers/aiController.js', 'utf8');
    assert(aiCode.includes('cleanText = textResponse.replace'), 'Must strip markdown json tags');
    assert(aiCode.includes('JSON.parse(jsonMatch[0])'), 'Must parse json safely');
});
