import { assertEquals } from '@std/assert';
import CRC_16_OPENSAFETY_B from './opensafety-b.ts';

Deno.test('123456789', () => {
	let c = CRC_16_OPENSAFETY_B.init();
	c = CRC_16_OPENSAFETY_B.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_OPENSAFETY_B.finalize(c);
	assertEquals(c, 0x20fe);
});
