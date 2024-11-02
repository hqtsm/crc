import { assertEquals } from '@std/assert';

import CRC_24_FLEXRAY_B from './flexray-b.ts';

Deno.test('123456789', () => {
	let c = CRC_24_FLEXRAY_B.init();
	c = CRC_24_FLEXRAY_B.update(c, new TextEncoder().encode('123456789'));
	c = CRC_24_FLEXRAY_B.finalize(c);
	assertEquals(c, 0x1f23b8);
});
