/* eslint-env mocha */
/* global artifacts, assert, contract */
const BitOracle = artifacts.require("BitOracle");

contract('BitOracle', () => {
    it("should exist on deployment", () => {
        return BitOracle.deployed().then(bit_oracle => {
            assert(bit_oracle);
        });
    });
    it("should have an address", () => {
        return BitOracle.deployed().then(bit_oracle => {
            assert(bit_oracle.address);
        });
    });
    it("should have a get-bit function", () => {
        return BitOracle.deployed().then(bit_oracle => {
            assert(typeof bit_oracle.getBit === 'function');
        });
    });
    it("should get a bit as false", () => {
        return BitOracle.deployed().then(bit_oracle => {
            return bit_oracle.getBit();
        }).then(bit => {
            assert.equal(bit, false);
        });
    });
    it("should have a set-bit function", () => {
        return BitOracle.deployed().then(bit_oracle => {
            assert(typeof bit_oracle.setBit === 'function');
        });
    });
    it("should set a bit as true", () => {
        return BitOracle.deployed().then(bit_oracle => {
            bit_oracle.setBit(true);
            return bit_oracle;
        }).then(bit_oracle => {
            return bit_oracle.getBit();
        }).then(bit => {
            assert.equal(bit, true);
        });
    });
    it("should clear a bit emitting an event", () => {
        return BitOracle.deployed().then(bit_oracle => {
            bit_oracle.Bit((error, result) => {
                assert(error === null);
                assert(result);
                assert(result.args);
                assert(result.args.from);
                assert(result.args.bit === false);
            });
            return bit_oracle.setBit(false);
        }).then(result => {
            assert(result);
            assert(result.tx);
            assert(result.receipt);
        });
    });
});
