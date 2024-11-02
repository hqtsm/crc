import { assertEquals } from '@std/assert';

import CRC_8_I_432_1 from './i-432-1.ts';

Deno.test('123456789', () => {
	let c = CRC_8_I_432_1.init();
	c = CRC_8_I_432_1.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_I_432_1.finalize(c);
	assertEquals(c, 0xa1);
});
