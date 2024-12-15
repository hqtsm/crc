import { assertEquals } from '@std/assert';
import CRC_24_BLE from './ble.ts';

Deno.test('123456789', () => {
	let c = CRC_24_BLE.init();
	c = CRC_24_BLE.update(c, new TextEncoder().encode('123456789'));
	c = CRC_24_BLE.finalize(c);
	assertEquals(c, 0xc25a56);
});
