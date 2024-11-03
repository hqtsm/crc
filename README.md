# HQTSM: CRC

CRC functions with a parameterized backend optimized for both speed and size

# Features

- Pure TypeScript, run anywhere
- Optimized for speed
  - Table-based algorithm
  - Minimal initialization code
- Optimized for size
  - Shared engine < 500 bytes with standard web compression
  - Tables generated on first use
  - Minimal additional overhead to each variant
  - Individually importable algorithms
- 100+ known digests provided, plus the option of configuring your own
- Streamable interface, just call update for each chunk
- Number for small digests, 32-bit or less
- BigInt for larger digests
- Digest values always an unsigned integer
- Supports 8-bit typed arrays, regular arrays, and array-like objects
- Pure methods, can be assigned directly to variables as needed

# Usage

## CRC-32/ISO-HDLC

The most-common 32-bit digest, used by PNG, ZIP, and more.

```js
import CRC32 from '@hqtsm/crc/crc-32/iso-hdlc';

let crc = CRC32.init();
crc = CRC32.update(crc, new TextEncoder().encode('123456789'));
crc = CRC32.finalize(crc);
console.log(crc.toString(16)); // cbf43926
```

## CRC-64/XZ

A common 64-bit digest, sometimes incorrectly refered to as ECMA-182.

```js
import CRC64 from '@hqtsm/crc/crc-64/xz';

let crc = CRC64.init();
crc = CRC64.update(crc, new TextEncoder().encode('123456789'));
crc = CRC64.finalize(crc);
console.log(crc.toString(16)); // 995dc9bbdf1939fa
```

# Acknowledgements

Thanks to pycrc for the inspiration and validation checking.

Thanks to CRC RevEng for cataloging the different digests.
