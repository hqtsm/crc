import { assertEquals } from '@std/assert';

import CRC_11_UMTS from './umts.ts';

Deno.test('123456789', () => {
	let c = CRC_11_UMTS.init();
	c = CRC_11_UMTS.update(c, new TextEncoder().encode('123456789'));
	c = CRC_11_UMTS.finalize(c);
	assertEquals(c, 0x061);
});
