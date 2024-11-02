import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/BASE91-D
 */
export default crc(
	32,
	0xa833982b,
	true,
	0xffffffff,
	true,
	0xffffffff,
) as CrcInterface<number>;
