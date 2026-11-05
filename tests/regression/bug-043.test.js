const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-043: Prisma schema Feedback relation specifies onDelete: Cascade', () => {
    const schema = fs.readFileSync('backend/prisma/schema.prisma', 'utf8');
    assert(schema.includes('onDelete: Cascade'), 'Feedback model relation must include onDelete: Cascade');
});
