const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-029: AskAIAssistant guards against duplicate concurrent submissions', () => {
    const code = fs.readFileSync('frontend/src/components/AskAIAssistant.jsx', 'utf8');
    assert(code.includes('if (!textToSend.trim() || loading) return;'), 'Must abort when loading is active');
    assert(code.includes('disabled={loading || !input.trim()}'), 'Send button must be disabled during loading');
});
