const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-024: SuccessDashboard static Tailwind class mappings', () => {
    const code = fs.readFileSync('frontend/src/pages/SuccessDashboard.jsx', 'utf8');
    assert(!code.includes('text-$' + '{card.color}'), 'Dynamic class string interpolation must be removed');
    assert(code.includes('card.colorClass'), 'Must use card.colorClass property');
});
