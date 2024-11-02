import { assertEquals } from '@std/assert';

import CRC_8_TECH_3250 from './tech-3250.ts';

Deno.test('123456789', () => {
	let c = CRC_8_TECH_3250.init();
	c = CRC_8_TECH_3250.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_TECH_3250.finalize(c);
	assertEquals(c, 0x97);
});
