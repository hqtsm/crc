import { assertEquals } from '@std/assert';

import CRC_32_BASE91_D from './base91-d.ts';

Deno.test('123456789', () => {
	let c = CRC_32_BASE91_D.init();
	c = CRC_32_BASE91_D.update(c, new TextEncoder().encode('123456789'));
	c = CRC_32_BASE91_D.finalize(c);
	assertEquals(c, 0x87315576);
});
