# Avoid Common Attacks

* The `Migrations` are deployed by a contract owner, where the right to upgrade has been `restricted` to him.

* The `BitOracle` is deployed by a contract owner, where the right to set the contract state has been `restricted` to him.

* In `BitOracle`, wherever possible the `private` modifier has been used to restrict unnecessary  access.

* The `BitOracle` has been kept *extremly* simple to minimize attack surface. Further work can be extended upon the contract by re-using it (or its `BitLibrary`).
