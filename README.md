# Pseudo-Random Number Generator

Park-Miller-Carta pseudo-random number generator implementation.

## Installation

```
npm install --save pseudo-random
```

## Examples

### Simple usage

```javascript

const pseudoRandom = require('pseudo-random');
const prng = pseudoRandom(12021990); // set seed

// generate random number between 1 to 2000 
for (var i = 0; i < 12; i++) {
  console.log(Math.floor(prng.random()*1999)+1);
}

```
