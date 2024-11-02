import { assertEquals } from '@std/assert';

import CRC_32_AUTOSAR from './autosar.ts';

Deno.test('123456789', () => {
	let c = CRC_32_AUTOSAR.init();
	c = CRC_32_AUTOSAR.update(c, new TextEncoder().encode('123456789'));
	c = CRC_32_AUTOSAR.finalize(c);
	assertEquals(c, 0x1697d06a);
});
