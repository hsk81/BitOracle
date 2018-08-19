const { arg, npm, npx } = require('./run-utils');
const { exit } = require('process');

const migrate = () => npx(
    'truffle', 'migrate'
);
if (require.main === module) {
    npm('install').then(migrate).catch(exit);
}
module.exports = migrate;
