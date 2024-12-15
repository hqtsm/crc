import { assertEquals } from '@std/assert';
import CRC_82_DARC from './darc.ts';

Deno.test('123456789', () => {
	let c = CRC_82_DARC.init();
	c = CRC_82_DARC.update(c, new TextEncoder().encode('123456789'));
	c = CRC_82_DARC.finalize(c);
	assertEquals(c, 0x09ea83f625023801fd612n);
});
