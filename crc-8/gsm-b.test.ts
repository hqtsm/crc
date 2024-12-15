import { assertEquals } from '@std/assert';
import CRC_8_GSM_B from './gsm-b.ts';

Deno.test('123456789', () => {
	let c = CRC_8_GSM_B.init();
	c = CRC_8_GSM_B.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_GSM_B.finalize(c);
	assertEquals(c, 0x94);
});
