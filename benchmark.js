var bcd = require('./index.js');

function bench (name, fn) {
  var start = Date.now();
  var amount = 1000000;

  console.log(name);

  for (var i = 0; i < amount; i++) {
    fn();
  }

  var end = Date.now();

  console.log((1000 * (end - start) / amount) + ' us');
  console.log((1000 * amount / (end - start)).toFixed() + ' ops/s\n');
}

bench('encode simple', function () {
  bcd.encode(36813594);
});

bench('encode with length', function () {
  bcd.encode(36813594, 4);
});

var buffer = new Buffer(4);

bench('encode with buffer', function () {
  bcd.encode(36813594, buffer);
});

buffer = new Buffer([0x36, 0x81, 0x35, 0x94]);

bench('decode', function () {
  bcd.decode(buffer);
});


