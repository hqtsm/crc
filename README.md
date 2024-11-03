# HQTSM: CRC

[![JSR](https://jsr.io/badges/@hqtsm/crc)](https://jsr.io/@hqtsm/crc)
[![npm](https://img.shields.io/npm/v/@hqtsm/crc.svg)](https://npmjs.com/package/@hqtsm/crc)
[![CI](https://github.com/hqtsm/crc/actions/workflows/ci.yaml/badge.svg)](https://github.com/hqtsm/crc/actions/workflows/ci.yaml)

CRC functions with a parameterized engine optimized for both speed and size

![crc](https://img.shields.io/badge/crc-grey)
![digest](https://img.shields.io/badge/digest-grey)
![checksum](https://img.shields.io/badge/checksum-grey)
![hash](https://img.shields.io/badge/hash-grey)
![typescript](https://img.shields.io/badge/typescript-grey)
![esm](https://img.shields.io/badge/esm-grey)
![streamable](https://img.shields.io/badge/streamable-grey)
![crc-8](https://img.shields.io/badge/crc--8-grey)
![crc-16](https://img.shields.io/badge/crc--16-grey)
![crc-24](https://img.shields.io/badge/crc--24-grey)
![crc-32](https://img.shields.io/badge/crc--32-grey)
![crc-64](https://img.shields.io/badge/crc--64-grey)

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
