import { assertEquals } from '@std/assert';
import CRC_64_REDIS from './redis.ts';

Deno.test('123456789', () => {
	let c = CRC_64_REDIS.init();
	c = CRC_64_REDIS.update(c, new TextEncoder().encode('123456789'));
	c = CRC_64_REDIS.finalize(c);
	assertEquals(c, 0xe9c6d914c4b8d9can);
});
