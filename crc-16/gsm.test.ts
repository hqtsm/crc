import { assertEquals } from '@std/assert';

import CRC_16_GSM from './gsm.ts';

Deno.test('123456789', () => {
	let c = CRC_16_GSM.init();
	c = CRC_16_GSM.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_GSM.finalize(c);
	assertEquals(c, 0xce3c);
});
