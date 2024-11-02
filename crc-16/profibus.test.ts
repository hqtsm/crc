import { assertEquals } from '@std/assert';

import CRC_16_PROFIBUS from './profibus.ts';

Deno.test('123456789', () => {
	let c = CRC_16_PROFIBUS.init();
	c = CRC_16_PROFIBUS.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_PROFIBUS.finalize(c);
	assertEquals(c, 0xa819);
});
