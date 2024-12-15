import { assertEquals } from '@std/assert';
import CRC_16_OPENSAFETY_A from './opensafety-a.ts';

Deno.test('123456789', () => {
	let c = CRC_16_OPENSAFETY_A.init();
	c = CRC_16_OPENSAFETY_A.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_OPENSAFETY_A.finalize(c);
	assertEquals(c, 0x5d38);
});
