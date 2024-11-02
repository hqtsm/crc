import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-11/UMTS
 */
export default crc(
	11,
	0x307,
	false,
	0x000,
	false,
	0x000,
) as CrcInterface<number>;
