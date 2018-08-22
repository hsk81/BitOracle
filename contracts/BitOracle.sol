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
        bit = false;
    }

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    function setBit(bool _bit) public restricted returns (bool) {
        emit Bit(msg.sender, _bit);
        bit = _bit;
        return bit;
    }

    function getBit() public view returns (bool) {
        return bit;
    }
}
