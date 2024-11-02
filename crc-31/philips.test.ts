import { assertEquals } from '@std/assert';

import CRC_31_PHILIPS from './philips.ts';

Deno.test('123456789', () => {
	let c = CRC_31_PHILIPS.init();
	c = CRC_31_PHILIPS.update(c, new TextEncoder().encode('123456789'));
	c = CRC_31_PHILIPS.finalize(c);
	assertEquals(c, 0x0ce9e46c);
});
