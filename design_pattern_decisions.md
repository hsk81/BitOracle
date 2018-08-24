# Design Pattern Desicions

* The `Migrations` are deployed by a contract owner, where the right to upgrade has been `restricted` to him.

> This was done, since a migration is supposed to be run by a trusted party, and hence nobody else except the owner should be able to execute it. Lateron, for the sake of full decentralization this feature should be removed! At the moment it acts as an **emergency stop**, enabling to quickly modify a contract.

* The `BitOracle` is deployed by a contract owner, where the right to set the contract state as been `restricted` to him.

> This was done, since an oracle is supposed to be a trusted party, and hence nobody else except the owner should be able to change the contract state.

* A `Bit` event is triggered upon setting the contract state.

> This was done, to enable the oracle state to be watched, greatly improving the usability of the contract.

* A `BitLibrary` library has been introduced, to be used by the `BitOracle` contract.

> This was done, to mainly demonstrate the usage of a Solidity `library`, rather than being really required.
