import { assertEquals } from '@std/assert';
import CRC_7_ROHC from './rohc.ts';

Deno.test('123456789', () => {
	let c = CRC_7_ROHC.init();
	c = CRC_7_ROHC.update(c, new TextEncoder().encode('123456789'));
	c = CRC_7_ROHC.finalize(c);
	assertEquals(c, 0x53);
});
