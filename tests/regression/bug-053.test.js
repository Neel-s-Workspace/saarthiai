const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-053: vite.config.js configures manualChunks for vendor splitting', () => {
    const code = fs.readFileSync('frontend/vite.config.js', 'utf8');
    assert(code.includes('manualChunks:'), 'Must configure manualChunks in build.rollupOptions');
    assert(code.includes('vendor:'), 'Must separate vendor libraries into independent chunk');
});
