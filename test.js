var assert = require('assert');
var bcd = require('./index.js');

// encode
// basic
assert.deepEqual(bcd.encode(36813594), new Buffer([0x36, 0x81, 0x35, 0x94]));

// align to bytes
assert.deepEqual(bcd.encode(6813594), new Buffer([0x06, 0x81, 0x35, 0x94]));

// specify length
assert.deepEqual(bcd.encode(6813594, 5), new Buffer([0x00, 0x06, 0x81, 0x35, 0x94]));

// length < needed
assert.deepEqual(bcd.encode(6813594, 3), new Buffer([0x81, 0x35, 0x94]));

// provide a buffer
var buffer = new Buffer(4);
var result = bcd.encode(6813594, buffer);

assert.equal(buffer, result);
assert.deepEqual(buffer,  new Buffer([0x06, 0x81, 0x35, 0x94]));


// decode
assert.deepEqual(bcd.decode(new Buffer([0x36, 0x81, 0x35, 0x94])), 36813594);

// wrong bytes

assert.throws(function () {
  bcd.decode(new Buffer([0x36, 0x81, 0x3f, 0x94]));
});

assert.throws(function () {
  bcd.decode(new Buffer([0x36, 0x81, 0xf3, 0x94]));
});
