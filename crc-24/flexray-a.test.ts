import { assertEquals } from '@std/assert';
import CRC_24_FLEXRAY_A from './flexray-a.ts';

Deno.test('123456789', () => {
	let c = CRC_24_FLEXRAY_A.init();
	c = CRC_24_FLEXRAY_A.update(c, new TextEncoder().encode('123456789'));
	c = CRC_24_FLEXRAY_A.finalize(c);
	assertEquals(c, 0x7979bd);
});
