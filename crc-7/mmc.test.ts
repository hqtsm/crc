import { assertEquals } from '@std/assert';

import CRC_7_MMC from './mmc.ts';

Deno.test('123456789', () => {
	let c = CRC_7_MMC.init();
	c = CRC_7_MMC.update(c, new TextEncoder().encode('123456789'));
	c = CRC_7_MMC.finalize(c);
	assertEquals(c, 0x75);
});
