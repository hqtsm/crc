import { assertEquals } from '@std/assert';

import CRC_64_GO_ISO from './go-iso.ts';

const table = `
0000000000000000 01b0000000000000 0360000000000000 02d0000000000000
06c0000000000000 0770000000000000 05a0000000000000 0410000000000000
0d80000000000000 0c30000000000000 0ee0000000000000 0f50000000000000
0b40000000000000 0af0000000000000 0820000000000000 0990000000000000
1b00000000000000 1ab0000000000000 1860000000000000 19d0000000000000
1dc0000000000000 1c70000000000000 1ea0000000000000 1f10000000000000
1680000000000000 1730000000000000 15e0000000000000 1450000000000000
1040000000000000 11f0000000000000 1320000000000000 1290000000000000
3600000000000000 37b0000000000000 3560000000000000 34d0000000000000
30c0000000000000 3170000000000000 33a0000000000000 3210000000000000
3b80000000000000 3a30000000000000 38e0000000000000 3950000000000000
3d40000000000000 3cf0000000000000 3e20000000000000 3f90000000000000
2d00000000000000 2cb0000000000000 2e60000000000000 2fd0000000000000
2bc0000000000000 2a70000000000000 28a0000000000000 2910000000000000
2080000000000000 2130000000000000 23e0000000000000 2250000000000000
2640000000000000 27f0000000000000 2520000000000000 2490000000000000
6c00000000000000 6db0000000000000 6f60000000000000 6ed0000000000000
6ac0000000000000 6b70000000000000 69a0000000000000 6810000000000000
6180000000000000 6030000000000000 62e0000000000000 6350000000000000
6740000000000000 66f0000000000000 6420000000000000 6590000000000000
7700000000000000 76b0000000000000 7460000000000000 75d0000000000000
71c0000000000000 7070000000000000 72a0000000000000 7310000000000000
7a80000000000000 7b30000000000000 79e0000000000000 7850000000000000
7c40000000000000 7df0000000000000 7f20000000000000 7e90000000000000
5a00000000000000 5bb0000000000000 5960000000000000 58d0000000000000
5cc0000000000000 5d70000000000000 5fa0000000000000 5e10000000000000
5780000000000000 5630000000000000 54e0000000000000 5550000000000000
5140000000000000 50f0000000000000 5220000000000000 5390000000000000
4100000000000000 40b0000000000000 4260000000000000 43d0000000000000
47c0000000000000 4670000000000000 44a0000000000000 4510000000000000
4c80000000000000 4d30000000000000 4fe0000000000000 4e50000000000000
4a40000000000000 4bf0000000000000 4920000000000000 4890000000000000
d800000000000000 d9b0000000000000 db60000000000000 dad0000000000000
dec0000000000000 df70000000000000 dda0000000000000 dc10000000000000
d580000000000000 d430000000000000 d6e0000000000000 d750000000000000
d340000000000000 d2f0000000000000 d020000000000000 d190000000000000
c300000000000000 c2b0000000000000 c060000000000000 c1d0000000000000
c5c0000000000000 c470000000000000 c6a0000000000000 c710000000000000
ce80000000000000 cf30000000000000 cde0000000000000 cc50000000000000
c840000000000000 c9f0000000000000 cb20000000000000 ca90000000000000
ee00000000000000 efb0000000000000 ed60000000000000 ecd0000000000000
e8c0000000000000 e970000000000000 eba0000000000000 ea10000000000000
e380000000000000 e230000000000000 e0e0000000000000 e150000000000000
e540000000000000 e4f0000000000000 e620000000000000 e790000000000000
f500000000000000 f4b0000000000000 f660000000000000 f7d0000000000000
f3c0000000000000 f270000000000000 f0a0000000000000 f110000000000000
f880000000000000 f930000000000000 fbe0000000000000 fa50000000000000
fe40000000000000 fff0000000000000 fd20000000000000 fc90000000000000
b400000000000000 b5b0000000000000 b760000000000000 b6d0000000000000
b2c0000000000000 b370000000000000 b1a0000000000000 b010000000000000
b980000000000000 b830000000000000 bae0000000000000 bb50000000000000
bf40000000000000 bef0000000000000 bc20000000000000 bd90000000000000
af00000000000000 aeb0000000000000 ac60000000000000 add0000000000000
a9c0000000000000 a870000000000000 aaa0000000000000 ab10000000000000
a280000000000000 a330000000000000 a1e0000000000000 a050000000000000
a440000000000000 a5f0000000000000 a720000000000000 a690000000000000
8200000000000000 83b0000000000000 8160000000000000 80d0000000000000
84c0000000000000 8570000000000000 87a0000000000000 8610000000000000
8f80000000000000 8e30000000000000 8ce0000000000000 8d50000000000000
8940000000000000 88f0000000000000 8a20000000000000 8b90000000000000
9900000000000000 98b0000000000000 9a60000000000000 9bd0000000000000
9fc0000000000000 9e70000000000000 9ca0000000000000 9d10000000000000
9480000000000000 9530000000000000 97e0000000000000 9650000000000000
9240000000000000 93f0000000000000 9120000000000000 9090000000000000
`.trim().split(/\s+/).map((x) => BigInt(`0x${x}`));

Deno.test('table', () => {
	assertEquals(CRC_64_GO_ISO.table(), table);
});

Deno.test('123456789', () => {
	let c = CRC_64_GO_ISO.init();
	c = CRC_64_GO_ISO.update(c, new TextEncoder().encode('123456789'));
	c = CRC_64_GO_ISO.finalize(c);
	assertEquals(c, 0x46a5a9388a5beffen);
});