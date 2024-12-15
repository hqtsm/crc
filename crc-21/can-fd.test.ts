import { assertEquals } from '@std/assert';
import CRC_21_CAN_FD from './can-fd.ts';

Deno.test('123456789', () => {
	let c = CRC_21_CAN_FD.init();
	c = CRC_21_CAN_FD.update(c, new TextEncoder().encode('123456789'));
	c = CRC_21_CAN_FD.finalize(c);
	assertEquals(c, 0x0ed841);
});
