import { assertEquals } from '@std/assert';
import CRC_14_GSM from './gsm.ts';

Deno.test('123456789', () => {
	let c = CRC_14_GSM.init();
	c = CRC_14_GSM.update(c, new TextEncoder().encode('123456789'));
	c = CRC_14_GSM.finalize(c);
	assertEquals(c, 0x30ae);
});
