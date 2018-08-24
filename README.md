# A simple Bit Oracle on Ethereum
A Solidity contract realizing a simple bit oracle: A user can click either a `get`, `set` or `clear` bit button to get or set the oracle's state from or on the blockchain. That's it.

## Run Contract Compilation
```
$ npm run compile
```
```
Compiling .\contracts\BitLibrary.sol...
Compiling .\contracts\BitOracle.sol...
Compiling .\contracts\Migrations.sol...
Writing artifacts to .\build\contracts
```
## Run Project Build
```
$ npm run build
```
### with `--debug` flag (to enable source maps):
```
npm run -- build --debug
```
## Run Local Blockchain
```
$ npm run ganache
```
```
Listening on 127.0.0.1:8545
```
## Run Contract Migration
```
$ npm run migrate
```
```
Using network 'development'.

Running migration: 1_migrations.js ...
Running migration: 2_bit_library.js ...
Running migration: 3_bit_oracle.js ...
```
## Run Contract Tests
```
$ npm run test
```
```
Using network 'development'.

  Contract: BitOracle
    √ should exist on deployment
    √ should have an address
    √ should have a get-bit function
    √ should get a bit as false
    √ should have a set-bit function
    √ should set a bit as true (73ms)
    √ should clear a bit emitting an event (74ms)

  7 passing (217ms)
```
## Run Development Server
```
$ npm run start
```
```
** browser-sync config **
{ injectChanges: false,
  files: [ './build/**/*.{html,css,js}' ],
  watchOptions: { ignored: 'node_modules' },
  server: { baseDir: './build', ...},
  port: 8080 }
```
```
[Browsersync] Access URLs:
 ---------------------------------------
       Local: http://localhost:8080
    External: http://172.27.243.112:8080
 ---------------------------------------
          UI: http://localhost:3001
 UI External: http://172.27.243.112:3001
 ---------------------------------------
[Browsersync] Serving files from: ./build
[Browsersync] Watching files...
18.08.24 15:31:21 200 GET /index.html
18.08.24 15:31:21 200 GET /index.js
```
## User Interface
```
http://127.0.0.1:8080
```
Visit the above URL, and open the development *inspector* (`F12`) in the browser, where in the *console* section the responses from the blockchain upon clicking the `set`, `get` and `clear` bit buttons will be visible.

* Click `get` bit button:
```
[on:get-bit] > [false]
```
* Click `set` bit button:
```
[on:set-bit] > [{…}]
```
* Click `get` bit button:
```
[on:get-bit] > [true]
```
* Click `clear` bit button:
```
[on:clr-bit] > [{…}]
```
* Click `get` bit button:
```
[on:get-bit] > [false]
```

**NOTE:** In case of an error w.r.t. missing contracts, try to run `npm run build` and `npm run migrate` again.

## Copyright

 © 2018 Hasan Karahan, https://github.com/hsk81.
