# bcd

binary coded decimals

# Installation

```
npm install bcd
```

# Usage

 - `bcd.encode(num)` — encode given number into a buffer with a minimal
    length that fits the result;
 - `bcd.encode(num, length)` — encode given number into a buffer with
    a given `length`. If `length` is more than needed, the result is aligned
    at the right side of the buffer and the rest is filled with zeroes. If
    `length` is less then needed, the result is truncated from the left side;
 - `bcd.encode(num, buffer)` — encode givento number into a given buffer.
    The above rules regarding length are applied.
 - `bcd.decode(buffer)` — decode given buffer into a number. If the buffer
    is not a valid BCD, this method throws.

# license

MIT