const { arg, npm, npx } = require('./run-utils');
const { exit } = require('process');

const build = () => Promise.all([
    npx('babel', '--presets=env', '-qsd', 'build/source', 'src'),
]);
if (require.main === module) {
    let p = npm('install').then(() => {
        p = arg('lint')(true) ? p.then(require('./run-lint')) : p;
        p.then(build).catch(exit);
    });
}
module.exports = build;
