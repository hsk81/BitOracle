pragma solidity ^0.4.23;

/** @title Bit Library. */
library BitLibrary {
    /** @dev Data Structure. */
    struct Data {
        /** @dev Bit boolean. */
        bool bit;
    }

    /** @dev Sets library storage bit to provided value.
      * @param _bit Bit value to set to.
      */
    function set(Data storage self, bool _bit) public {
        self.bit = _bit;
    }

    /** @dev Gets library storage bit.*/
    function get(Data storage self) public view returns(bool) {
        return self.bit;
    }
}
