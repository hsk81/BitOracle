'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-env browser, node */
/* global web3 */

var App = function App(opts) {
    _classCallCheck(this, App);

    if (typeof web3 !== 'undefined') {
        this.web3Provider = web3.currentProvider;
    } else {
        this.web3Provider = new require('web3')(opts.fallback);
    }
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {
        window.APP = this;
    }
};

module.exports = {
    app: new App({ fallback: 'ws://localhost:8546' })
};
//# sourceMappingURL=index.js.map