import { assertEquals } from '@std/assert';

import CRC_8_SAE_J1850 from './sae-j1850.ts';

Deno.test('123456789', () => {
	let c = CRC_8_SAE_J1850.init();
	c = CRC_8_SAE_J1850.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_SAE_J1850.finalize(c);
	assertEquals(c, 0x4b);
});
