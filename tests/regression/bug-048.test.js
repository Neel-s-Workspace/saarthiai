const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-048: backend/package.json provides migration scripts', () => {
    const pkg = JSON.parse(fs.readFileSync('backend/package.json', 'utf8'));
    assert(pkg.scripts['db:migrate'], 'db:migrate script must be present');
    assert(pkg.scripts['db:push'], 'db:push script must be present');
});
