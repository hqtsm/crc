import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-7/UMTS
 */
export default crc(
	7,
	0x45,
	false,
	0x00,
	false,
	0x00,
) as CrcInterface<number>;
