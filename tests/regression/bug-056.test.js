const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-056: Frontend blank screen prevention, Vite host configuration, and ErrorBoundary', () => {
    const viteConfig = fs.readFileSync('frontend/vite.config.js', 'utf8');
    assert(viteConfig.includes('host: true'), 'vite.config.js must configure server.host: true');
    assert(viteConfig.includes('port: 5173'), 'vite.config.js must configure server.port: 5173');

    const appCode = fs.readFileSync('frontend/src/App.jsx', 'utf8');
    assert(appCode.includes('<Route path="/" element={<Navigate to="/login" replace />} />'), 'App.jsx must route / to /login');

    const indexHtml = fs.readFileSync('frontend/index.html', 'utf8');
    assert(indexHtml.includes('serviceWorker') && indexHtml.includes('unregister'), 'index.html must unregister stale service workers');

    const mainCode = fs.readFileSync('frontend/src/main.jsx', 'utf8');
    assert(mainCode.includes('ErrorBoundary'), 'main.jsx must wrap application with ErrorBoundary');

    const assistantCode = fs.readFileSync('frontend/src/components/AskAIAssistant.jsx', 'utf8');
    assert(assistantCode.includes("'Authorization'") || assistantCode.includes('"Authorization"'), 'AskAIAssistant must send Authorization header');

    const aiCode = fs.readFileSync('backend/controllers/aiController.js', 'utf8');
    assert(aiCode.includes('req.body.question'), 'aiController.js must support question field fallback');
});
