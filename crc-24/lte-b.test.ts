import { assertEquals } from '@std/assert';
import CRC_24_LTE_B from './lte-b.ts';

Deno.test('123456789', () => {
	let c = CRC_24_LTE_B.init();
	c = CRC_24_LTE_B.update(c, new TextEncoder().encode('123456789'));
	c = CRC_24_LTE_B.finalize(c);
	assertEquals(c, 0x23ef52);
});
