import { assertEquals } from '@std/assert';
import CRC_8_NRSC_5 from './nrsc-5.ts';

Deno.test('123456789', () => {
	let c = CRC_8_NRSC_5.init();
	c = CRC_8_NRSC_5.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_NRSC_5.finalize(c);
	assertEquals(c, 0xf7);
});
