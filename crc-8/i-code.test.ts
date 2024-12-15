import { assertEquals } from '@std/assert';
import CRC_8_I_CODE from './i-code.ts';

Deno.test('123456789', () => {
	let c = CRC_8_I_CODE.init();
	c = CRC_8_I_CODE.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_I_CODE.finalize(c);
	assertEquals(c, 0x7e);
});
