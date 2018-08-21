/* eslint-env browser, node */
/* global web3 */

const Web3 = require('web3');

export class App {
    constructor(opts) {
        this.connect(opts.fallback);
        this.globals();
    }

    connect(url) {
        if (typeof web3 !== 'undefined') {
            this.web3Provider = web3.currentProvider;
        }
        else {
            this.web3Provider = new Web3(url);
        }
    }

    globals() {
        window.APP = this;
    }
}

module.exports = {
    app: new App({fallback: 'ws://localhost:8545'})
};
