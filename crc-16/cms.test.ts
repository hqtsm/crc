import { assertEquals } from '@std/assert';
import CRC_16_CMS from './cms.ts';

Deno.test('123456789', () => {
	let c = CRC_16_CMS.init();
	c = CRC_16_CMS.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_CMS.finalize(c);
	assertEquals(c, 0xaee7);
});
