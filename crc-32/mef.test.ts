import { assertEquals } from '@std/assert';

import CRC_32_MEF from './mef.ts';

Deno.test('123456789', () => {
	let c = CRC_32_MEF.init();
	c = CRC_32_MEF.update(c, new TextEncoder().encode('123456789'));
	c = CRC_32_MEF.finalize(c);
	assertEquals(c, 0xd2c22f51);
});
