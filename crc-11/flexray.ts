import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-11/FLEXRAY
 */
export default crc(
	11,
	0x385,
	false,
	0x01a,
	false,
	0x000,
) as CrcInterface<number>;
