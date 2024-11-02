import { assertEquals } from '@std/assert';

import CRC_8_MIFARE_MAD from './mifare-mad.ts';

Deno.test('123456789', () => {
	let c = CRC_8_MIFARE_MAD.init();
	c = CRC_8_MIFARE_MAD.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_MIFARE_MAD.finalize(c);
	assertEquals(c, 0x99);
});
