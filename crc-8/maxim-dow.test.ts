import { assertEquals } from '@std/assert';
import CRC_8_MAXIM_DOW from './maxim-dow.ts';

const table = `
00 5e bc e2 61 3f dd 83 c2 9c 7e 20 a3 fd 1f 41
9d c3 21 7f fc a2 40 1e 5f 01 e3 bd 3e 60 82 dc
23 7d 9f c1 42 1c fe a0 e1 bf 5d 03 80 de 3c 62
be e0 02 5c df 81 63 3d 7c 22 c0 9e 1d 43 a1 ff
46 18 fa a4 27 79 9b c5 84 da 38 66 e5 bb 59 07
db 85 67 39 ba e4 06 58 19 47 a5 fb 78 26 c4 9a
65 3b d9 87 04 5a b8 e6 a7 f9 1b 45 c6 98 7a 24
f8 a6 44 1a 99 c7 25 7b 3a 64 86 d8 5b 05 e7 b9
8c d2 30 6e ed b3 51 0f 4e 10 f2 ac 2f 71 93 cd
11 4f ad f3 70 2e cc 92 d3 8d 6f 31 b2 ec 0e 50
af f1 13 4d ce 90 72 2c 6d 33 d1 8f 0c 52 b0 ee
32 6c 8e d0 53 0d ef b1 f0 ae 4c 12 91 cf 2d 73
ca 94 76 28 ab f5 17 49 08 56 b4 ea 69 37 d5 8b
57 09 eb b5 36 68 8a d4 95 cb 29 77 f4 aa 48 16
e9 b7 55 0b 88 d6 34 6a 2b 75 97 c9 4a 14 f6 a8
74 2a c8 96 15 4b a9 f7 b6 e8 0a 54 d7 89 6b 35
`.trim().split(/\s+/).map((i) => parseInt(i, 16));

Deno.test('table', () => {
	assertEquals(CRC_8_MAXIM_DOW.table(), table);
});

Deno.test('123456789', () => {
	let c = CRC_8_MAXIM_DOW.init();
	c = CRC_8_MAXIM_DOW.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_MAXIM_DOW.finalize(c);
	assertEquals(c, 0xa1);
});
