const { arg, npm, npx } = require('./run-utils');
const { exit } = require('process');

const clean = () => Promise.all([
    npx('rimraf', './build')
]);
if (require.main === module) {
    npm('install').then(clean).catch(exit);
}
module.exports = clean;
