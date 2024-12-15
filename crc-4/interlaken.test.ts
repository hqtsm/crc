import { assertEquals } from '@std/assert';
import CRC_4_INTERLAKEN from './interlaken.ts';

Deno.test('123456789', () => {
	let c = CRC_4_INTERLAKEN.init();
	c = CRC_4_INTERLAKEN.update(c, new TextEncoder().encode('123456789'));
	c = CRC_4_INTERLAKEN.finalize(c);
	assertEquals(c, 0xb);
});
