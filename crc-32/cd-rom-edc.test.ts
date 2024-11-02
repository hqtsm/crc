import { assertEquals } from '@std/assert';

import CRC_32_CD_ROM_EDC from './cd-rom-edc.ts';

Deno.test('123456789', () => {
	let c = CRC_32_CD_ROM_EDC.init();
	c = CRC_32_CD_ROM_EDC.update(c, new TextEncoder().encode('123456789'));
	c = CRC_32_CD_ROM_EDC.finalize(c);
	assertEquals(c, 0x6ec2edc4);
});
