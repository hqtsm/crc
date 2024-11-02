import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/OPENSAFETY
 */
export default crc(
	8,
	0x2f,
	false,
	0x00,
	false,
	0x00,
) as CrcInterface<number>;
