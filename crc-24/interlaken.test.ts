import { assertEquals } from '@std/assert';

import CRC_24_INTERLAKEN from './interlaken.ts';

Deno.test('123456789', () => {
	let c = CRC_24_INTERLAKEN.init();
	c = CRC_24_INTERLAKEN.update(c, new TextEncoder().encode('123456789'));
	c = CRC_24_INTERLAKEN.finalize(c);
	assertEquals(c, 0xb4f3e6);
});
