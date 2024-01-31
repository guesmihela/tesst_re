# global-prefix [![NPM version](https://img.shields.io/npm/v/global-prefix.svg?style=flat)](https://www.npmjs.com/package/global-prefix) [![NPM downloads](https://img.shields.io/npm/dm/global-prefix.svg?style=flat)](https://npmjs.org/package/global-prefix) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/global-prefix.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/global-prefix) [![Windows Build Status](https://img.shields.io/appveyor/ci/jonschlinkert/global-prefix.svg?style=flat&label=AppVeyor)](https://ci.appveyor.com/project/jonschlinkert/global-prefix)

> Get the npm global path prefix.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save global-prefix
```

This is based on the code used by npm internally to resolve the global prefix.

## Usage

```js
var prefix = require('global-prefix');
//=> '/usr/local'
```

## About

### Related projects

* [global-modules](https://www.npmjs.com/package/global-modules): The directory used by npm for globally installed npm modules. | [homepage](https://github.com/jonschlinkert/global-modules "The directory used by npm for globally installed npm modules.")
* [global-paths](https://www.npmjs.com/package/global-paths): Returns an array of unique "global" directories based on the user's platform and environment. The… [more](https://github.com/jonschlinkert/global-paths) | [homepage](https://github.com/jonschlinkert/global-paths "Returns an array of unique "global" directories based on the user's platform and environment. The resulting paths can be used for doing lookups for generators or other globally installed npm packages. Node.js / JavaScript.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 16 | [jonschlinkert](https://github.com/jonschlinkert) |
| 1 | [rmbaad](https://github.com/rmbaad) |
| 1 | [jason-chang](https://github.com/jason-chang) |
| 1 | [jorrit](https://github.com/jorrit) |
| 1 | [mathiasvr](https://github.com/mathiasvr) |
| 1 | [tunnckoCore](https://github.com/tunnckoCore) |

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.0, on November 30, 2016._