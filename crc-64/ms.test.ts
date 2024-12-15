import { assertEquals } from '@std/assert';
import CRC_64_MS from './ms.ts';

Deno.test('123456789', () => {
	let c = CRC_64_MS.init();
	c = CRC_64_MS.update(c, new TextEncoder().encode('123456789'));
	c = CRC_64_MS.finalize(c);
	assertEquals(c, 0x75d4b74f024eceean);
});
