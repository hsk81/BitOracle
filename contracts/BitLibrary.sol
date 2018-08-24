pragma solidity ^0.4.23;

library BitLibrary {
    struct Data {
        bool bit;
    }

    function set(Data storage self, bool _bit) public {
        self.bit = _bit;
    }

    function get(Data storage self) public view returns(bool) {
        return self.bit;
    }
}
