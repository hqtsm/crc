import { assertEquals } from '@std/assert';

import CRC_16_TMS37157 from './tms37157.ts';

Deno.test('123456789', () => {
	let c = CRC_16_TMS37157.init();
	c = CRC_16_TMS37157.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_TMS37157.finalize(c);
	assertEquals(c, 0x26b1);
});
