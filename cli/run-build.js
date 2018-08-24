const { arg, npm, npx } = require('./run-utils');
const { exit } = require('process');

const browserify = (source, target) => npx('browserify',
    source, '-o', target, arg('debug', '--debug')(false), '-t', '[',
        'babelify', '--presets', '[', '"env"', '"minify"', ']',
    ']'
);
const minify = (source, target) => npx('html-minifier',
    '--collapse-whitespace', '--output', target, source
);
const build = () => Promise.all([
    browserify('src/index.js', 'build/index.js'),
    minify('src/index.html', 'build/index.html')
]);
if (require.main === module) {
    let p = npm('install').then(() => {
        p = arg('lint')(true)
            ? p.then(require('./run-lint')) : p;
        p = arg('clean')(false)
            ? p.then(require('./run-clean')) : p;
        p = arg('compile')(true)
            ? p.then(require('./run-compile')) : p;
        p = p.then(build).catch(exit);
    });
}
module.exports = build;
