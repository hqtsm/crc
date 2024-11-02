import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-64/REDIS
 */
export default crc(
	64n,
	0xad93d23594c935a9n,
	true,
	0x0000000000000000n,
	true,
	0x0000000000000000n,
) as CrcInterface<bigint>;
