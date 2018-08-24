const { arg, npm, npx } = require('./run-utils');
const { exit } = require('process');

const ganache = () => npx(
    'ganache-cli'
);
if (require.main === module) {
    npm('install').then(ganache).catch(exit);
}
module.exports = ganache;
