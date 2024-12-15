import { assertEquals } from '@std/assert';
import CRC_16_DDS_110 from './dds-110.ts';

Deno.test('123456789', () => {
	let c = CRC_16_DDS_110.init();
	c = CRC_16_DDS_110.update(c, new TextEncoder().encode('123456789'));
	c = CRC_16_DDS_110.finalize(c);
	assertEquals(c, 0x9ecf);
});
