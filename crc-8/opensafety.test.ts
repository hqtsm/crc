import { assertEquals } from '@std/assert';

import CRC_8_OPENSAFETY from './opensafety.ts';

Deno.test('123456789', () => {
	let c = CRC_8_OPENSAFETY.init();
	c = CRC_8_OPENSAFETY.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_OPENSAFETY.finalize(c);
	assertEquals(c, 0x3e);
});
