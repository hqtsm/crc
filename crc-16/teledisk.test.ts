import { assertEquals } from '@std/assert';
import CRC_16_TELEDISK from './teledisk.ts';

Deno.test('123456789', () => {
	let c = CRC_16_TELEDISK.init();
	c = CRC_16_TELEDISK.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_TELEDISK.finalize(c);
	assertEquals(c, 0x0fb3);
});
