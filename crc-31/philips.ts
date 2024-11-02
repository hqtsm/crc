import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-31/PHILIPS
 */
export default crc(
	31,
	0x04c11db7,
	false,
	0x7fffffff,
	false,
	0x7fffffff,
) as CrcInterface<number>;
