import { assertEquals } from '@std/assert';

import CRC_16_EN_13757 from './en-13757.ts';

Deno.test('123456789', () => {
	let c = CRC_16_EN_13757.init();
	c = CRC_16_EN_13757.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_EN_13757.finalize(c);
	assertEquals(c, 0xc2b7);
});
