import { assertEquals } from '@std/assert';

import CRC_8_LTE from './lte.ts';

Deno.test('123456789', () => {
	let c = CRC_8_LTE.init();
	c = CRC_8_LTE.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_LTE.finalize(c);
	assertEquals(c, 0xea);
});
