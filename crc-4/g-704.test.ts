import { assertEquals } from '@std/assert';

import CRC_4_G_704 from './g-704.ts';

Deno.test('123456789', () => {
	let c = CRC_4_G_704.init();
	c = CRC_4_G_704.update(c, new TextEncoder().encode('123456789'));
	c = CRC_4_G_704.finalize(c);
	assertEquals(c, 0x7);
});
