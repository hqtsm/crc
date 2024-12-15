import { assertEquals } from '@std/assert';
import CRC_7_UMTS from './umts.ts';

Deno.test('123456789', () => {
	let c = CRC_7_UMTS.init();
	c = CRC_7_UMTS.update(c, new TextEncoder().encode('123456789'));
	c = CRC_7_UMTS.finalize(c);
	assertEquals(c, 0x61);
});
