/* eslint-env browser, node */
/* global web3 */

class App {
    constructor(opts) {
        if (typeof web3 !== 'undefined') {
            this.web3Provider = web3.currentProvider;
        } else {
            this.web3Provider = new require('web3')(opts.fallback);
        }
        if (typeof window !== undefined) {
            window.APP = this;
        }
    }
}

module.exports = {
    app: new App({fallback: 'ws://localhost:8546'})
};
