import { assertEquals } from '@std/assert';

import CRC_40_GSM from './gsm.ts';

Deno.test('123456789', () => {
	let c = CRC_40_GSM.init();
	c = CRC_40_GSM.update(c, new TextEncoder().encode('123456789'));
	c = CRC_40_GSM.finalize(c);
	assertEquals(c, 0xd4164fc646n);
});
