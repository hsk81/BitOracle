/* eslint-env browser, node */
/* eslint no-console: "off" */
/* global web3 */

import { default as TruffleContract } from 'truffle-contract'
import BitOracle from './contracts/BitOracle.json';

const Web3 = require('web3');
// const $ = require('jquery');

export class App {
    constructor(options) {
        this.members(options);
    }

    members(options) {
        this.options = options;
    }

    deploy() {
        return this.bit_oracle.deployed();
    }

    get options() {
        return this._options;
    }

    set options(options) {
        this._options = options;
    }

    get bit_oracle() {
        if (this._bit_oracle === undefined) {
            this._bit_oracle = TruffleContract(BitOracle);
            this._bit_oracle.setProvider(this.web3Provider);
        }
        return this.fix(this._bit_oracle);
    }

    get web3Provider() {
        if (this._web3Provider === undefined) {
            if (typeof web3 !== 'undefined') {
                this._web3Provider = web3.currentProvider;
            } else {
                this._web3Provider = new Web3(
                    this.options.fallback
                );
            }
        }
        return this._web3Provider;
    }

    fix(contract) {
        if (typeof contract.currentProvider.sendAsync !== 'function') {
            contract.currentProvider.sendAsync = function () {
                return contract.currentProvider._provider.send.apply(
                    contract.currentProvider._provider, arguments
                );
            };
        }
        return contract;
    }
}

if (window.APP === undefined && require.name !== module) {
    window.APP = new App({
        fallback: 'http://127.0.0.1:8545'
    });
    window.APP.deploy().then((bit_oracle) => {
        console.log(`BitOracle: ${bit_oracle.address}`);
        return bit_oracle.getBit.call();
    }).then((bit) => {
        console.log(`BitOracle.bit: ${bit}`);
    })
}

export default App;
