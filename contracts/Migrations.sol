pragma solidity ^0.4.23;

/** @title Migrations. */
contract Migrations {
    /** @dev Denotes the contract owner. */
    address public owner;
    /** @dev Denotes the last completed migration. */
    uint public last_completed_migration;

    /** @dev Constructs the contract. */
    constructor() public {
        owner = msg.sender;
    }

    /** @dev Restricts invocation to contract owner. */
    modifier restricted() {
        if (msg.sender == owner) _;
    }

    /** @dev Sets completed state, where invocation is restricted to the owner
      *      of the contract. 
      *
      * @param completed value of completed.
      */
    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }

    /** @dev Upgrades contract to a new address, where invocation is restricted
      *      to the owner of the contract. 
      *
      * @param new_address new address to upgrade to.
      */
    function upgrade(address new_address) public restricted {
        Migrations upgraded = Migrations(new_address);
        upgraded.setCompleted(last_completed_migration);
    }
}
