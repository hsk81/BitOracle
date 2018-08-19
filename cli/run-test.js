const { arg, npm, npx } = require('./run-utils');
const { exit } = require('process');

const test = () => npx(
    'truffle', 'test'
);
if (require.main === module) {
    npm('install').then(test).catch(exit);
}
module.exports = test;
