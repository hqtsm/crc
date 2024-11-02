import { assertEquals } from '@std/assert';

import CRC_16_LJ1200 from './lj1200.ts';

Deno.test('123456789', () => {
	let c = CRC_16_LJ1200.init();
	c = CRC_16_LJ1200.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_LJ1200.finalize(c);
	assertEquals(c, 0xbdf4);
});
