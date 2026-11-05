const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-052: AskAIAssistant replaces deprecated onKeyPress with onKeyDown', () => {
    const code = fs.readFileSync('frontend/src/components/AskAIAssistant.jsx', 'utf8');
    assert(!code.includes('onKeyPress='), 'Deprecated onKeyPress must not be used');
    assert(code.includes('onKeyDown='), 'Modern onKeyDown must be used');
});
