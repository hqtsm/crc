import { assertEquals } from '@std/assert';

import CRC_14_DARC from './darc.ts';

Deno.test('123456789', () => {
	let c = CRC_14_DARC.init();
	c = CRC_14_DARC.update(c, new TextEncoder().encode('123456789'));
	c = CRC_14_DARC.finalize(c);
	assertEquals(c, 0x082d);
});
