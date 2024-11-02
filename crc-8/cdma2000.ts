import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/CDMA2000
 */
export default crc(
	8,
	0x9b,
	false,
	0xff,
	false,
	0x00,
) as CrcInterface<number>;
