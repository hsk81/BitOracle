/* eslint-env browser, node */
/* eslint no-console: "off" */

import BitOracleArtifact from '../build/contracts/BitOracle.json';
import { default as TruffleContract } from 'truffle-contract'

export class BitOracle {
    constructor (web3Provider) {
        this.web3Provider = web3Provider;
    }

    get contract() {
        if (this._contract === undefined) {
            this._contract = TruffleContract(BitOracleArtifact);
            this._contract.setProvider(this.web3Provider);
            this._contract = this.fix(this._contract);
        }
        return this._contract;
    }

    get instantiate() {
        return this.contract.deployed();
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

export default BitOracle;
