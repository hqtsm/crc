import { assertEquals } from '@std/assert';

import CRC_8_DVB_S2 from './dvb-s2.ts';

Deno.test('123456789', () => {
	let c = CRC_8_DVB_S2.init();
	c = CRC_8_DVB_S2.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_DVB_S2.finalize(c);
	assertEquals(c, 0xbc);
});
