const server = require("./server");

server.start();

function sum(a, b) {
  return a + b;
}

module.exports = sum;
