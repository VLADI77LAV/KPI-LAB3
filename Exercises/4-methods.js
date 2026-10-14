'use strict';

const methods = (iface) => {
  const entries = Object.entries(iface);
  const result = entries.filter(([, fn]) => typeof fn === 'function')
    .map(([name, fn]) => [name, fn.length]);
  return result;
};

module.exports = { methods };





