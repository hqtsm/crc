import { assertEquals } from '@std/assert';
import CRC_16_CDMA2000 from './cdma2000.ts';

Deno.test('123456789', () => {
	let c = CRC_16_CDMA2000.init();
	c = CRC_16_CDMA2000.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_CDMA2000.finalize(c);
	assertEquals(c, 0x4c06);
});
