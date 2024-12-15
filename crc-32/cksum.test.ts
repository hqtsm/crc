import { assertEquals } from '@std/assert';
import CRC_32_CKSUM from './cksum.ts';

const table = `
00000000 04c11db7 09823b6e 0d4326d9 130476dc 17c56b6b 1a864db2 1e475005
2608edb8 22c9f00f 2f8ad6d6 2b4bcb61 350c9b64 31cd86d3 3c8ea00a 384fbdbd
4c11db70 48d0c6c7 4593e01e 4152fda9 5f15adac 5bd4b01b 569796c2 52568b75
6a1936c8 6ed82b7f 639b0da6 675a1011 791d4014 7ddc5da3 709f7b7a 745e66cd
9823b6e0 9ce2ab57 91a18d8e 95609039 8b27c03c 8fe6dd8b 82a5fb52 8664e6e5
be2b5b58 baea46ef b7a96036 b3687d81 ad2f2d84 a9ee3033 a4ad16ea a06c0b5d
d4326d90 d0f37027 ddb056fe d9714b49 c7361b4c c3f706fb ceb42022 ca753d95
f23a8028 f6fb9d9f fbb8bb46 ff79a6f1 e13ef6f4 e5ffeb43 e8bccd9a ec7dd02d
34867077 30476dc0 3d044b19 39c556ae 278206ab 23431b1c 2e003dc5 2ac12072
128e9dcf 164f8078 1b0ca6a1 1fcdbb16 018aeb13 054bf6a4 0808d07d 0cc9cdca
7897ab07 7c56b6b0 71159069 75d48dde 6b93dddb 6f52c06c 6211e6b5 66d0fb02
5e9f46bf 5a5e5b08 571d7dd1 53dc6066 4d9b3063 495a2dd4 44190b0d 40d816ba
aca5c697 a864db20 a527fdf9 a1e6e04e bfa1b04b bb60adfc b6238b25 b2e29692
8aad2b2f 8e6c3698 832f1041 87ee0df6 99a95df3 9d684044 902b669d 94ea7b2a
e0b41de7 e4750050 e9362689 edf73b3e f3b06b3b f771768c fa325055 fef34de2
c6bcf05f c27dede8 cf3ecb31 cbffd686 d5b88683 d1799b34 dc3abded d8fba05a
690ce0ee 6dcdfd59 608edb80 644fc637 7a089632 7ec98b85 738aad5c 774bb0eb
4f040d56 4bc510e1 46863638 42472b8f 5c007b8a 58c1663d 558240e4 51435d53
251d3b9e 21dc2629 2c9f00f0 285e1d47 36194d42 32d850f5 3f9b762c 3b5a6b9b
0315d626 07d4cb91 0a97ed48 0e56f0ff 1011a0fa 14d0bd4d 19939b94 1d528623
f12f560e f5ee4bb9 f8ad6d60 fc6c70d7 e22b20d2 e6ea3d65 eba91bbc ef68060b
d727bbb6 d3e6a601 dea580d8 da649d6f c423cd6a c0e2d0dd cda1f604 c960ebb3
bd3e8d7e b9ff90c9 b4bcb610 b07daba7 ae3afba2 aafbe615 a7b8c0cc a379dd7b
9b3660c6 9ff77d71 92b45ba8 9675461f 8832161a 8cf30bad 81b02d74 857130c3
5d8a9099 594b8d2e 5408abf7 50c9b640 4e8ee645 4a4ffbf2 470cdd2b 43cdc09c
7b827d21 7f436096 7200464f 76c15bf8 68860bfd 6c47164a 61043093 65c52d24
119b4be9 155a565e 18197087 1cd86d30 029f3d35 065e2082 0b1d065b 0fdc1bec
3793a651 3352bbe6 3e119d3f 3ad08088 2497d08d 2056cd3a 2d15ebe3 29d4f654
c5a92679 c1683bce cc2b1d17 c8ea00a0 d6ad50a5 d26c4d12 df2f6bcb dbee767c
e3a1cbc1 e760d676 ea23f0af eee2ed18 f0a5bd1d f464a0aa f9278673 fde69bc4
89b8fd09 8d79e0be 803ac667 84fbdbd0 9abc8bd5 9e7d9662 933eb0bb 97ffad0c
afb010b1 ab710d06 a6322bdf a2f33668 bcb4666d b8757bda b5365d03 b1f740b4
`.trim().split(/\s+/).map((x) => parseInt(x, 16));

Deno.test('table', () => {
	assertEquals(CRC_32_CKSUM.table(), table);
});

Deno.test('123456789', () => {
	let c = CRC_32_CKSUM.init();
	c = CRC_32_CKSUM.update(c, new TextEncoder().encode('123456789'));
	c = CRC_32_CKSUM.finalize(c);
	assertEquals(c, 0x765e7680);
});
