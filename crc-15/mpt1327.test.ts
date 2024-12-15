import { assertEquals } from '@std/assert';
import CRC_15_MPT1327 from './mpt1327.ts';

Deno.test('123456789', () => {
	let c = CRC_15_MPT1327.init();
	c = CRC_15_MPT1327.update(c, new TextEncoder().encode('123456789'));
	c = CRC_15_MPT1327.finalize(c);
	assertEquals(c, 0x2566);
});
