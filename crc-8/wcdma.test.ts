import { assertEquals } from '@std/assert';
import CRC_8_WCDMA from './wcdma.ts';

Deno.test('123456789', () => {
	let c = CRC_8_WCDMA.init();
	c = CRC_8_WCDMA.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_WCDMA.finalize(c);
	assertEquals(c, 0x25);
});
