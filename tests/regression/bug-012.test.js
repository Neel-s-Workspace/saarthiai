const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('BUG-012: Nginx configuration with SPA try_files and Dockerfile copy', () => {
    assert(fs.existsSync('frontend/nginx.conf'), 'frontend/nginx.conf must exist');
    const nginxContent = fs.readFileSync('frontend/nginx.conf', 'utf8');
    assert(nginxContent.includes('try_files $uri $uri/ /index.html;'), 'try_files directive must be present');
    const dockerfile = fs.readFileSync('frontend/Dockerfile', 'utf8');
    assert(dockerfile.includes('COPY nginx.conf /etc/nginx/conf.d/default.conf'), 'Dockerfile must copy nginx.conf');
});
