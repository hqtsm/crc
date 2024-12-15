import { assertEquals } from '@std/assert';
import CRC_64_NVME from './nvme.ts';

Deno.test('123456789', () => {
	let c = CRC_64_NVME.init();
	c = CRC_64_NVME.update(c, new TextEncoder().encode('123456789'));
	c = CRC_64_NVME.finalize(c);
	assertEquals(c, 0xae8b14860a799888n);
});
