import { assertEquals } from '@std/assert';

import CRC_16_DECT_R from './dect-r.ts';

const table = `
0000 0589 0b12 0e9b 1624 13ad 1d36 18bf 2c48 29c1 275a 22d3 3a6c 3fe5 317e 34f7
5890 5d19 5382 560b 4eb4 4b3d 45a6 402f 74d8 7151 7fca 7a43 62fc 6775 69ee 6c67
b120 b4a9 ba32 bfbb a704 a28d ac16 a99f 9d68 98e1 967a 93f3 8b4c 8ec5 805e 85d7
e9b0 ec39 e2a2 e72b ff94 fa1d f486 f10f c5f8 c071 ceea cb63 d3dc d655 d8ce dd47
67c9 6240 6cdb 6952 71ed 7464 7aff 7f76 4b81 4e08 4093 451a 5da5 582c 56b7 533e
3f59 3ad0 344b 31c2 297d 2cf4 226f 27e6 1311 1698 1803 1d8a 0535 00bc 0e27 0bae
d6e9 d360 ddfb d872 c0cd c544 cbdf ce56 faa1 ff28 f1b3 f43a ec85 e90c e797 e21e
8e79 8bf0 856b 80e2 985d 9dd4 934f 96c6 a231 a7b8 a923 acaa b415 b19c bf07 ba8e
cf92 ca1b c480 c109 d9b6 dc3f d2a4 d72d e3da e653 e8c8 ed41 f5fe f077 feec fb65
9702 928b 9c10 9999 8126 84af 8a34 8fbd bb4a bec3 b058 b5d1 ad6e a8e7 a67c a3f5
7eb2 7b3b 75a0 7029 6896 6d1f 6384 660d 52fa 5773 59e8 5c61 44de 4157 4fcc 4a45
2622 23ab 2d30 28b9 3006 358f 3b14 3e9d 0a6a 0fe3 0178 04f1 1c4e 19c7 175c 12d5
a85b add2 a349 a6c0 be7f bbf6 b56d b0e4 8413 819a 8f01 8a88 9237 97be 9925 9cac
f0cb f542 fbd9 fe50 e6ef e366 edfd e874 dc83 d90a d791 d218 caa7 cf2e c1b5 c43c
197b 1cf2 1269 17e0 0f5f 0ad6 044d 01c4 3533 30ba 3e21 3ba8 2317 269e 2805 2d8c
41eb 4462 4af9 4f70 57cf 5246 5cdd 5954 6da3 682a 66b1 6338 7b87 7e0e 7095 751c
`.trim().split(/\s+/).map((x) => parseInt(x, 16));

Deno.test('table', () => {
	assertEquals(CRC_16_DECT_R.table(), table);
});

Deno.test('123456789', () => {
	let c = CRC_16_DECT_R.init();
	c = CRC_16_DECT_R.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_DECT_R.finalize(c);
	assertEquals(c, 0x7e);
});
