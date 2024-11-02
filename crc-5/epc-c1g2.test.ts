import { assertEquals } from '@std/assert';

import CRC_5_EPC_C1G2 from './epc-c1g2.ts';

Deno.test('123456789', () => {
	let c = CRC_5_EPC_C1G2.init();
	c = CRC_5_EPC_C1G2.update(c, new TextEncoder().encode('123456789'));
	c = CRC_5_EPC_C1G2.finalize(c);
	assertEquals(c, 0x00);
});
