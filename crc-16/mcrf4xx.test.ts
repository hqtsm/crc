import { assertEquals } from '@std/assert';

import CRC_16_MCRF4XX from './mcrf4xx.ts';

Deno.test('123456789', () => {
	let c = CRC_16_MCRF4XX.init();
	c = CRC_16_MCRF4XX.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_MCRF4XX.finalize(c);
	assertEquals(c, 0x6f91);
});
