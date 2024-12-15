import { assertEquals } from '@std/assert';
import CRC_10_GSM from './gsm.ts';

Deno.test('123456789', () => {
	let c = CRC_10_GSM.init();
	c = CRC_10_GSM.update(c, new TextEncoder().encode('123456789'));
	c = CRC_10_GSM.finalize(c);
	assertEquals(c, 0x12a);
});
