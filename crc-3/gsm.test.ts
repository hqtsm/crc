import { assertEquals } from '@std/assert';

import CRC_3_GSM from './gsm.ts';

Deno.test('123456789', () => {
	let c = CRC_3_GSM.init();
	c = CRC_3_GSM.update(c, new TextEncoder().encode('123456789'));
	c = CRC_3_GSM.finalize(c);
	assertEquals(c, 0x4);
});
