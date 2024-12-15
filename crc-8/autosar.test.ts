import { assertEquals } from '@std/assert';
import CRC_8_AUTOSAR from './autosar.ts';

Deno.test('123456789', () => {
	let c = CRC_8_AUTOSAR.init();
	c = CRC_8_AUTOSAR.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_AUTOSAR.finalize(c);
	assertEquals(c, 0xdf);
});
