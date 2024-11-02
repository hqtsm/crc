import { assertEquals } from '@std/assert';

import CRC_24_OS_9 from './os-9.ts';

Deno.test('123456789', () => {
	let c = CRC_24_OS_9.init();
	c = CRC_24_OS_9.update(c, new TextEncoder().encode('123456789'));
	c = CRC_24_OS_9.finalize(c);
	assertEquals(c, 0x200fa5);
});
