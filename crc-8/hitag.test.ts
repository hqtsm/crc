import { assertEquals } from '@std/assert';

import CRC_8_HITAG from './hitag.ts';

Deno.test('123456789', () => {
	let c = CRC_8_HITAG.init();
	c = CRC_8_HITAG.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_HITAG.finalize(c);
	assertEquals(c, 0xb4);
});
