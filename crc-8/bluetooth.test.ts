import { assertEquals } from '@std/assert';
import CRC_8_BLUETOOTH from './bluetooth.ts';

Deno.test('123456789', () => {
	let c = CRC_8_BLUETOOTH.init();
	c = CRC_8_BLUETOOTH.update(c, new TextEncoder().encode('123456789'));
	c = CRC_8_BLUETOOTH.finalize(c);
	assertEquals(c, 0x26);
});
