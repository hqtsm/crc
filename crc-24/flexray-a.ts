import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/FLEXRAY-A
 */
export default crc(
	24,
	0x5d6dcb,
	false,
	0xfedcba,
	false,
	0x000000,
) as CrcInterface<number>;
