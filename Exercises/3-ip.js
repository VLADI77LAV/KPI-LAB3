'use strict';

const ipToInt = (ip = '127.0.0.1') =>
  ip.split('.').reduce(
    (result, part) => (result << 8) | Number(part),
    0,
  );

module.exports = { ipToInt };

