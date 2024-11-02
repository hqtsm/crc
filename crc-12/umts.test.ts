import { assertEquals } from '@std/assert';

import CRC_12_UMTS from './umts.ts';

const table = `
000 80f 811 01e 82d 022 03c 833 855 05a 044 84b 078 877 869 066
8a5 0aa 0b4 8bb 088 887 899 096 0f0 8ff 8e1 0ee 8dd 0d2 0cc 8c3
945 14a 154 95b 168 967 979 176 110 91f 901 10e 93d 132 12c 923
1e0 9ef 9f1 1fe 9cd 1c2 1dc 9d3 9b5 1ba 1a4 9ab 198 997 989 186
a85 28a 294 a9b 2a8 aa7 ab9 2b6 2d0 adf ac1 2ce afd 2f2 2ec ae3
220 a2f a31 23e a0d 202 21c a13 a75 27a 264 a6b 258 a57 a49 246
3c0 bcf bd1 3de bed 3e2 3fc bf3 b95 39a 384 b8b 3b8 bb7 ba9 3a6
b65 36a 374 b7b 348 b47 b59 356 330 b3f b21 32e b1d 312 30c b03
d05 50a 514 d1b 528 d27 d39 536 550 d5f d41 54e d7d 572 56c d63
5a0 daf db1 5be d8d 582 59c d93 df5 5fa 5e4 deb 5d8 dd7 dc9 5c6
440 c4f c51 45e c6d 462 47c c73 c15 41a 404 c0b 438 c37 c29 426
ce5 4ea 4f4 cfb 4c8 cc7 cd9 4d6 4b0 cbf ca1 4ae c9d 492 48c c83
780 f8f f91 79e fad 7a2 7bc fb3 fd5 7da 7c4 fcb 7f8 ff7 fe9 7e6
f25 72a 734 f3b 708 f07 f19 716 770 f7f f61 76e f5d 752 74c f43
ec5 6ca 6d4 edb 6e8 ee7 ef9 6f6 690 e9f e81 68e ebd 6b2 6ac ea3
660 e6f e71 67e e4d 642 65c e53 e35 63a 624 e2b 618 e17 e09 606
`.trim().split(/\s+/).map((i) => parseInt(i, 16));

Deno.test('table', () => {
	assertEquals(CRC_12_UMTS.table(), table);
});

Deno.test('123456789', () => {
	let c = CRC_12_UMTS.init();
	c = CRC_12_UMTS.update(c, new TextEncoder().encode('123456789'));
	c = CRC_12_UMTS.finalize(c);
	assertEquals(c, 0xdaf);
});
