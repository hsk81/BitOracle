pragma solidity ^0.4.23;

import "./BitLibrary.sol";

contract BitOracle {
    address public owner;
    BitLibrary.Data private data;

    constructor() public {
        owner = msg.sender;
    }

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    function setBit(bool _bit) public restricted returns (bool) {
        emit Bit(msg.sender, _bit);
        BitLibrary.set(data, _bit);
        return _bit;
    }

    function getBit() public view returns (bool) {
        return BitLibrary.get(data);
    }

    event Bit(
        address indexed from,
        bool indexed bit
    );
}
