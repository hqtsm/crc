import { assertEquals } from '@std/assert';

import CRC_16_M17 from './m17.ts';

Deno.test('123456789', () => {
	let c = CRC_16_M17.init();
	c = CRC_16_M17.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_M17.finalize(c);
	assertEquals(c, 0x772b);
});
