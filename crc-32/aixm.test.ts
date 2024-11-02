import { assertEquals } from '@std/assert';

import CRC_32_AIXM from './aixm.ts';

Deno.test('123456789', () => {
	let c = CRC_32_AIXM.init();
	c = CRC_32_AIXM.update(c, new TextEncoder().encode('123456789'));
	c = CRC_32_AIXM.finalize(c);
	assertEquals(c, 0x3010bf7f);
});
