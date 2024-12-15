import { assertEquals } from '@std/assert';
import CRC_8_ROHC from './rohc.ts';

Deno.test('123456789', () => {
	let c = CRC_8_ROHC.init();
	c = CRC_8_ROHC.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_ROHC.finalize(c);
	assertEquals(c, 0xd0);
});
