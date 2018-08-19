/* eslint-env mocha */
/* global artifacts, assert, contract */
const BitOracle = artifacts.require("BitOracle");

contract('BitOracle', () => {
    it("should exist on deployment", () => {
        return BitOracle.deployed().then(oracle => {
            assert(oracle);
        });
    });
    it("should have an address", () => {
        return BitOracle.deployed().then(oracle => {
            assert(oracle.address);
        });
    });
    it("should have a get-bit function", () => {
        return BitOracle.deployed().then(oracle => {
            assert(typeof oracle.getBit === 'function');
        });
    });
    it("should get a bit as false", () => {
        return BitOracle.deployed().then(oracle => {
            return oracle.getBit();
        }).then(bit => {
            assert.equal(bit, false);
        });
    });
    it("should have a set-bit function", () => {
        return BitOracle.deployed().then(oracle => {
            assert(typeof oracle.setBit === 'function');
        });
    });
    it("should set a bit as true", () => {
        return BitOracle.deployed().then(oracle => {
            oracle.setBit(true);
            return oracle;
        }).then(oracle => {
            return oracle.getBit();
        }).then(bit => {
            assert.equal(bit, true);
        });
    });
    it("should set a bit with an event", () => {
        return BitOracle.deployed().then(oracle => {
            oracle.Bit((error, result) => {
                assert(error === null);
                assert(result);
                assert(result.args);
                assert(result.args._from);
                assert(result.args._value);
            });
            return oracle.setBit(true);
        }).then(result => {
            assert(result);
            assert(result.tx);
            assert(result.receipt);
        });
    });
});
