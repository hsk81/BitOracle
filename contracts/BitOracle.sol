pragma solidity ^0.4.23;

import "./BitLibrary.sol";

/** @title Bit Oracle. */
contract BitOracle {
    /** @dev Denotes the contract owner. */
    address public owner;
    /** @dev Denotes the contract state. */
    BitLibrary.Data private data;

    /** @dev Constructs the contract. */
    constructor() public {
        owner = msg.sender;
    }

    /** @dev Restricts invocation to contract owner. */
    modifier restricted() {
        if (msg.sender == owner) _;
    }

    /** @dev Sets contract state to provided value and returns it. The
      *      invocation is restricted to the contract owner. Also, a
      *      `Bit` event is emitted.
      *
      * @param _bit Bit value to set to.
      */
    function setBit(bool _bit) public restricted returns (bool) {
        emit Bit(msg.sender, _bit);
        BitLibrary.set(data, _bit);
        return _bit;
    }

    /** @dev Gets contract state.*/
    function getBit() public view returns (bool) {
        return BitLibrary.get(data);
    }

    /** @dev Event emitted on contract state changes.*/
    event Bit(
        /** @dev Contract state change originator. */
        address indexed from,
        /** @dev Contract state change value. */
        bool indexed bit
    );
}
