import { assertEquals } from '@std/assert';

import CRC_12_DECT from './dect.ts';

Deno.test('123456789', () => {
	let c = CRC_12_DECT.init();
	c = CRC_12_DECT.update(c, new TextEncoder().encode('123456789'));
	c = CRC_12_DECT.finalize(c);
	assertEquals(c, 0xf5b);
});
