import { assertEquals } from '@std/assert';
import CRC_16_MAXIM_DOW from './maxim-dow.ts';

Deno.test('123456789', () => {
	let c = CRC_16_MAXIM_DOW.init();
	c = CRC_16_MAXIM_DOW.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_MAXIM_DOW.finalize(c);
	assertEquals(c, 0x44c2);
});
