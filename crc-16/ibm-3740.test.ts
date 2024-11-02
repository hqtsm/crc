import { assertEquals } from '@std/assert';

import CRC_16_IBM_3740 from './ibm-3740.ts';

Deno.test('123456789', () => {
	let c = CRC_16_IBM_3740.init();
	c = CRC_16_IBM_3740.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_IBM_3740.finalize(c);
	assertEquals(c, 0x29b1);
});
