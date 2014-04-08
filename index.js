var table = new Array(100);
var a1;
var a2;
var num;

for (var i = 0; i < 100; i++) {
  num = i;
  a1 = num % 10;
  num = (num / 10) >> 0;
  a2 = num % 10;

  table[i] = (a2 << 4) | a1;
}

function encode (num, length) {
  var bytes = [];
  var i = 0;

  num = num >>> 0;

  while (num > 0) {
    bytes[i++] = table[num % 100];
    num = (num / 100) >> 0;
  }

  var buffer;

  if (Buffer.isBuffer(length)) {
    buffer = length;
    length = buffer.length;
  } else {
    length = ('undefined' === typeof length) ? i : length;
    buffer = new Buffer(length);
  }

  var j = 0;

  for (i = length - 1; i >= 0; i--) {
    buffer[i] = bytes[length - i - 1] || 0;
  }

  return buffer;
}

function decode (buffer) {
  var num = 0;
  var a;

  for (var i = 0; i < buffer.length; i++) {
    num = num * 10;
    a = buffer[i] >> 4;

    if (a > 10) throw new Error('wrong buffer');

    num += a;
    num = num * 10;

    a = buffer[i] & 0xf;

    if (a > 10) throw new Error('wrong buffer');

    num += a;
  }

  return num;
}

exports.encode = encode;
exports.decode = decode;
