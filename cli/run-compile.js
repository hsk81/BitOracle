const { arg, npm, npx } = require('./run-utils');
const { exit } = require('process');

const compile = () => npx(
    'truffle', 'compile'
);
if (require.main === module) {
    npm('install').then(compile).catch(exit);
}
module.exports = compile;
