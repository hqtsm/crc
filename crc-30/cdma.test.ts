import { assertEquals } from '@std/assert';

import CRC_30_CDMA from './cdma.ts';

Deno.test('123456789', () => {
	let c = CRC_30_CDMA.init();
	c = CRC_30_CDMA.update(c, new TextEncoder().encode('123456789'));
	c = CRC_30_CDMA.finalize(c);
	assertEquals(c, 0x04c34abf);
});
