import { assertEquals } from '@std/assert';
import CRC_6_CDMA2000_B from './cdma2000-b.ts';

Deno.test('123456789', () => {
	let c = CRC_6_CDMA2000_B.init();
	c = CRC_6_CDMA2000_B.update(c, new TextEncoder().encode('123456789'));
	c = CRC_6_CDMA2000_B.finalize(c);
	assertEquals(c, 0x3b);
});
