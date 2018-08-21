const { arg, npm, npx } = require('./run-utils');
const { exit } = require('process');

const server = () => npx(
    'lite-server', '--config=lite-server.json'
);
if (require.main === module) {
    npm('install').then(server).catch(exit);
}
module.exports = server;
