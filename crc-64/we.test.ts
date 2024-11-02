import { assertEquals } from '@std/assert';

import CRC_64_WE from './we.ts';

Deno.test('123456789', () => {
	let c = CRC_64_WE.init();
	c = CRC_64_WE.update(c, new TextEncoder().encode('123456789'));
	c = CRC_64_WE.finalize(c);
	assertEquals(c, 0x62ec59e3f1a4f00an);
});
