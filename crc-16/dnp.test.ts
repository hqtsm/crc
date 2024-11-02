import { assertEquals } from '@std/assert';

import CRC_16_DNP from './dnp.ts';

Deno.test('123456789', () => {
	let c = CRC_16_DNP.init();
	c = CRC_16_DNP.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_DNP.finalize(c);
	assertEquals(c, 0xea82);
});
