const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-026: SkillGapAnalysis binds selected career role to skill dataset', () => {
    const code = fs.readFileSync('frontend/src/pages/SkillGapAnalysis.jsx', 'utf8');
    assert(code.includes('careerDataMap'), 'Must define careerDataMap mapping per career role');
    assert(code.includes('data={careerDataMap[targetCareer] || data}'), 'RadarChart must use dynamic career dataset');
});
