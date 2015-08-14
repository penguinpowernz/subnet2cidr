# subnet2cidr

A simple library for converting subnet masks to CIDR notation and vice versa.

## Installation

```sh
npm install subnet2cidr
```

## Usage

Usage is simple:

```js

var cidrize = require('subnet2cidr').cidrize,
    maskize = require('subnet2cidr').cidr2subnet;

// convert CIDR to subnet mask
console.log(maskize(30)); // outputs 255.255.255.252
console.log(maskize(24)); // outputs 255.255.255.0
console.log(maskize(16)); // outputs 255.255.0.0
console.log(maskize(8));  // outputs 255.0.0.0
console.log(maskize(1));  // outputs 128.0.0.0


// convert subnet mask to CIDR
console.log(cidrize('255.0.0.0'));     // outputs 8
console.log(cidrize('255.255.0.0'));   // outputs 16
console.log(cidrize('255.255.255.0')); // outputs 24
```

### Aliases

I went a bit crazy on the aliases... 

```js
console.dir(require('subnet2cidr');
{ cidrize: [Function],      // subnet mask to CIDR from here down
  prefixize: [Function],
  toPrefix: [Function],
  toClassless: [Function],
  toCIDR: [Function],
  subnet2cidr: [Function],
  subnetize: [Function],    // CIDR to subnet mask from here down
  maskize: [Function],
  toClassfull: [Function],
  toSubnet: [Function],
  toMask: [Function],
  toNetmask: [Function],
  cidr2subnet: [Function] }
```                        

Enjoy!
