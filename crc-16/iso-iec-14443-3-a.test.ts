import { assertEquals } from '@std/assert';

import CRC_16_ISO_IEC_14443_3_A from './iso-iec-14443-3-a.ts';

Deno.test('123456789', () => {
	let c = CRC_16_ISO_IEC_14443_3_A.init();
	c = CRC_16_ISO_IEC_14443_3_A.update(
		c,
		new TextEncoder().encode('123456789'),
	);
	c = CRC_16_ISO_IEC_14443_3_A.finalize(c);
	assertEquals(c, 0xbf05);
});
