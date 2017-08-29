
module.exports = function(seed) {
  var _seed = seed % 2147483647;
  if (_seed) _seed += 2147483646;

  /**
  * Returns a pseudo-random integer between 1 to 2^32
  **/
  function randomInt() {
    return _seed = _seed * 16807 % 2147483647;
  }

  /**
  * Returns a pseudo-random floating point number in range [0,1]
  **/
  function random() {
    return (randomInt() - 1) / 2147483646;
  }

  return {
    seed: seed,
    random: random,
    randomInt: randomInt
  }
};
