/* eslint-env browser, node */
/* eslint no-console: "off" */
/* global web3 */

import { BitOracle } from './bit_oracle';
import { default as Web3 } from 'web3';
import { default as $ } from 'jquery';

export class Application {

    constructor() {
        this.members();
        this.events();
    }

    members() {
        this.bit_oracle = new BitOracle(this.web3Provider);
    }

    events() {
        $('#clr-bit').on('click', () => {
            this.web3Provider.eth.getAccounts().then((acc) => {
                this.bit_oracle.instantiate.then((instance) => {
                    return instance.setBit(false, {from: acc[0]});
                }).then((...args) => {
                    console.log('[on:clr-bit]', args);
                });
            });
        });
        $('#set-bit').on('click', () => {
            this.web3Provider.eth.getAccounts().then((acc) => {
                this.bit_oracle.instantiate.then((instance) => {
                    return instance.setBit(true, {from: acc[0]});
                }).then((...args) => {
                    console.log('[on:set-bit]', args);
                });
            });
        });
        $('#get-bit').on('click', () => {
            this.bit_oracle.instantiate.then((bit_oracle) => {
                return bit_oracle.getBit.call();
            }).then((...args) => {
                console.log('[on:get-bit]', args);
            });
        });
    }

    get web3Provider() {
        if (this._web3Provider === undefined) {
            if (typeof web3 !== 'undefined') {
                this._web3Provider = web3.currentProvider;
            } else {
                this._web3Provider = new Web3(
                    'http://127.0.0.1:8545'
                );
            }
        }
        return this._web3Provider;
    }
}

export default Application;
