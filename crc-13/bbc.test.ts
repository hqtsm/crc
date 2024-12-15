import { assertEquals } from '@std/assert';
import CRC_13_BBC from './bbc.ts';

Deno.test('123456789', () => {
	let c = CRC_13_BBC.init();
	c = CRC_13_BBC.update(c, new TextEncoder().encode('123456789'));
	c = CRC_13_BBC.finalize(c);
	assertEquals(c, 0x04fa);
});
