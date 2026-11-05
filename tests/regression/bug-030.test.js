const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-030: AskAIAssistant event listener uses functional state update', () => {
    const code = fs.readFileSync('frontend/src/components/AskAIAssistant.jsx', 'utf8');
    assert(code.includes('setMessages(prev => [...prev'), 'Must use functional state update in event listener');
});
