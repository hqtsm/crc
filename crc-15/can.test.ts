import { assertEquals } from '@std/assert';

import CRC_15_CAN from './can.ts';

const table = `
0000 4599 4eab 0b32 58cf 1d56 1664 53fd 7407 319e 3aac 7f35 2cc8 6951 6263 27fa
2d97 680e 633c 26a5 7558 30c1 3bf3 7e6a 5990 1c09 173b 52a2 015f 44c6 4ff4 0a6d
5b2e 1eb7 1585 501c 03e1 4678 4d4a 08d3 2f29 6ab0 6182 241b 77e6 327f 394d 7cd4
76b9 3320 3812 7d8b 2e76 6bef 60dd 2544 02be 4727 4c15 098c 5a71 1fe8 14da 5143
73c5 365c 3d6e 78f7 2b0a 6e93 65a1 2038 07c2 425b 4969 0cf0 5f0d 1a94 11a6 543f
5e52 1bcb 10f9 5560 069d 4304 4836 0daf 2a55 6fcc 64fe 2167 729a 3703 3c31 79a8
28eb 6d72 6640 23d9 7024 35bd 3e8f 7b16 5cec 1975 1247 57de 0423 41ba 4a88 0f11
057c 40e5 4bd7 0e4e 5db3 182a 1318 5681 717b 34e2 3fd0 7a49 29b4 6c2d 671f 2286
2213 678a 6cb8 2921 7adc 3f45 3477 71ee 5614 138d 18bf 5d26 0edb 4b42 4070 05e9
0f84 4a1d 412f 04b6 574b 12d2 19e0 5c79 7b83 3e1a 3528 70b1 234c 66d5 6de7 287e
793d 3ca4 3796 720f 21f2 646b 6f59 2ac0 0d3a 48a3 4391 0608 55f5 106c 1b5e 5ec7
54aa 1133 1a01 5f98 0c65 49fc 42ce 0757 20ad 6534 6e06 2b9f 7862 3dfb 36c9 7350
51d6 144f 1f7d 5ae4 0919 4c80 47b2 022b 25d1 6048 6b7a 2ee3 7d1e 3887 33b5 762c
7c41 39d8 32ea 7773 248e 6117 6a25 2fbc 0846 4ddf 46ed 0374 5089 1510 1e22 5bbb
0af8 4f61 4453 01ca 5237 17ae 1c9c 5905 7eff 3b66 3054 75cd 2630 63a9 689b 2d02
276f 62f6 69c4 2c5d 7fa0 3a39 310b 7492 5368 16f1 1dc3 585a 0ba7 4e3e 450c 0095
`.trim().split(/\s+/).map((x) => parseInt(x, 16));

Deno.test('table', () => {
	assertEquals(CRC_15_CAN.table(), table);
});

Deno.test('123456789', () => {
	let c = CRC_15_CAN.init();
	c = CRC_15_CAN.update(c, new TextEncoder().encode('123456789'));
	c = CRC_15_CAN.finalize(c);
	assertEquals(c, 0x59e);
});
