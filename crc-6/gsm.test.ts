import { assertEquals } from '@std/assert';

import CRC_6_GSM from './gsm.ts';

Deno.test('123456789', () => {
	let c = CRC_6_GSM.init();
	c = CRC_6_GSM.update(c, new TextEncoder().encode('123456789'));
	c = CRC_6_GSM.finalize(c);
	assertEquals(c, 0x13);
});
