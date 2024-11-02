import { assertEquals } from '@std/assert';

import CRC_5_USB from './usb.ts';

const table = `
00 0e 1c 12 11 1f 0d 03 0b 05 17 19 1a 14 06 08
16 18 0a 04 07 09 1b 15 1d 13 01 0f 0c 02 10 1e
05 0b 19 17 14 1a 08 06 0e 00 12 1c 1f 11 03 0d
13 1d 0f 01 02 0c 1e 10 18 16 04 0a 09 07 15 1b
0a 04 16 18 1b 15 07 09 01 0f 1d 13 10 1e 0c 02
1c 12 00 0e 0d 03 11 1f 17 19 0b 05 06 08 1a 14
0f 01 13 1d 1e 10 02 0c 04 0a 18 16 15 1b 09 07
19 17 05 0b 08 06 14 1a 12 1c 0e 00 03 0d 1f 11
14 1a 08 06 05 0b 19 17 1f 11 03 0d 0e 00 12 1c
02 0c 1e 10 13 1d 0f 01 09 07 15 1b 18 16 04 0a
11 1f 0d 03 00 0e 1c 12 1a 14 06 08 0b 05 17 19
07 09 1b 15 16 18 0a 04 0c 02 10 1e 1d 13 01 0f
1e 10 02 0c 0f 01 13 1d 15 1b 09 07 04 0a 18 16
08 06 14 1a 19 17 05 0b 03 0d 1f 11 12 1c 0e 00
1b 15 07 09 0a 04 16 18 10 1e 0c 02 01 0f 1d 13
0d 03 11 1f 1c 12 00 0e 06 08 1a 14 17 19 0b 05
`.trim().split(/\s+/).map((i) => parseInt(i, 16));

Deno.test('table', () => {
	assertEquals(CRC_5_USB.table(), table);
});

Deno.test('123456789', () => {
	let c = CRC_5_USB.init();
	c = CRC_5_USB.update(c, new TextEncoder().encode('123456789'));
	c = CRC_5_USB.finalize(c);
	assertEquals(c, 0x19);
});
