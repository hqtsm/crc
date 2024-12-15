import { assertEquals } from '@std/assert';
import CRC_8_GSM_A from './gsm-a.ts';

Deno.test('123456789', () => {
	let c = CRC_8_GSM_A.init();
	c = CRC_8_GSM_A.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_GSM_A.finalize(c);
	assertEquals(c, 0x37);
});
