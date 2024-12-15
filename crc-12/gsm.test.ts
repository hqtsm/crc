import { assertEquals } from '@std/assert';
import CRC_12_GSM from './gsm.ts';

Deno.test('123456789', () => {
	let c = CRC_12_GSM.init();
	c = CRC_12_GSM.update(c, new TextEncoder().encode('123456789'));
	c = CRC_12_GSM.finalize(c);
	assertEquals(c, 0xb34);
});
