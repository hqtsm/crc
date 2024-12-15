import { assertEquals } from '@std/assert';
import CRC_6_CDMA2000_A from './cdma2000-a.ts';

Deno.test('123456789', () => {
	let c = CRC_6_CDMA2000_A.init();
	c = CRC_6_CDMA2000_A.update(c, new TextEncoder().encode('123456789'));
	c = CRC_6_CDMA2000_A.finalize(c);
	assertEquals(c, 0x0d);
});
