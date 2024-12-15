import { assertEquals } from '@std/assert';
import CRC_6_DARC from './darc.ts';

Deno.test('123456789', () => {
	let c = CRC_6_DARC.init();
	c = CRC_6_DARC.update(c, new TextEncoder().encode('123456789'));
	c = CRC_6_DARC.finalize(c);
	assertEquals(c, 0x26);
});
