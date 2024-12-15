import { assertEquals } from '@std/assert';
import CRC_3_ROHC from './rohc.ts';

Deno.test('123456789', () => {
	let c = CRC_3_ROHC.init();
	c = CRC_3_ROHC.update(c, new TextEncoder().encode('123456789'));
	c = CRC_3_ROHC.finalize(c);
	assertEquals(c, 0x6);
});
