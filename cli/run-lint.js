const { arg, npm, npx } = require('./run-utils');
const { exit } = require('process');

const lint = () => npx('eslint', '--config', '.eslintrc.json',
    '"src/**/*.js"', '"test/**/*.js"', arg('fix', '--fix')(false)
);
if (require.main === module) {
    npm('install').then(lint).catch(exit);
}
module.exports = lint;
