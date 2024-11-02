import { assertEquals } from '@std/assert';

import CRC_10_ATM from './atm.ts';

Deno.test('123456789', () => {
	let c = CRC_10_ATM.init();
	c = CRC_10_ATM.update(c, new TextEncoder().encode('123456789'));
	c = CRC_10_ATM.finalize(c);
	assertEquals(c, 0x199);
});
