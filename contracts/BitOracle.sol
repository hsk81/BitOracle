pragma solidity ^0.4.23;

contract BitOracle {
    address public owner;
    bool public bit;

    event Bit(
        address indexed _from,
        bool indexed _value
    );

    constructor() public {
        owner = msg.sender;
    }

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    function setBit(bool _bit) public restricted {
        emit Bit(msg.sender, _bit);
        bit = _bit;
    }

    function getBit() public view returns (bool) {
        return bit;
    }
}
