import { assertEquals } from '@std/assert';
import CRC_24_LTE_A from './lte-a.ts';

Deno.test('123456789', () => {
	let c = CRC_24_LTE_A.init();
	c = CRC_24_LTE_A.update(c, new TextEncoder().encode('123456789'));
	c = CRC_24_LTE_A.finalize(c);
	assertEquals(c, 0xcde703);
});
