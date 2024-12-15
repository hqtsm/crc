import { assertEquals } from '@std/assert';
import CRC_16_T10_DIF from './t10-dif.ts';

Deno.test('123456789', () => {
	let c = CRC_16_T10_DIF.init();
	c = CRC_16_T10_DIF.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_T10_DIF.finalize(c);
	assertEquals(c, 0xd0db);
});
