import { assertEquals } from '@std/assert';
import CRC_11_FLEXRAY from './flexray.ts';

Deno.test('123456789', () => {
	let c = CRC_11_FLEXRAY.init();
	c = CRC_11_FLEXRAY.update(c, new TextEncoder().encode('123456789'));
	c = CRC_11_FLEXRAY.finalize(c);
	assertEquals(c, 0x5a3);
});
