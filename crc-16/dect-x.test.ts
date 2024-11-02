import { assertEquals } from '@std/assert';

import CRC_16_DECT_X from './dect-x.ts';

Deno.test('123456789', () => {
	let c = CRC_16_DECT_X.init();
	c = CRC_16_DECT_X.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_DECT_X.finalize(c);
	assertEquals(c, 0x007f);
});
