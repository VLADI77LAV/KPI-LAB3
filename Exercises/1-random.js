

'use strict';


const random = (min, max) => {
  const range = max - min + 1;
  const result = Math.floor(Math.random() * range) + min;
  return result;
};


module.exports = { random };




