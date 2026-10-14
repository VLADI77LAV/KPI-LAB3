'use strict';

const generateKey = (length, possible) => {
  let key = '';
  const n = possible.length;
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * n);
    key += possible[index];
  }
  return key;
};

module.exports = { generateKey };
