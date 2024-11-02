import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-6/CDMA2000-A
 */
export default crc(
	6,
	0x27,
	false,
	0x3f,
	false,
	0x00,
) as CrcInterface<number>;
