import { assertEquals } from '@std/assert';

import CRC_16_RIELLO from './riello.ts';

Deno.test('123456789', () => {
	let c = CRC_16_RIELLO.init();
	c = CRC_16_RIELLO.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_RIELLO.finalize(c);
	assertEquals(c, 0x63d0);
});
