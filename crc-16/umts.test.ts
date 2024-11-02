import { assertEquals } from '@std/assert';

import CRC_16_UMTS from './umts.ts';

Deno.test('123456789', () => {
	let c = CRC_16_UMTS.init();
	c = CRC_16_UMTS.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_UMTS.finalize(c);
	assertEquals(c, 0xfee8);
});
