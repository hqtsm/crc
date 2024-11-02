import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-10/CDMA2000
 */
export default crc(
	10,
	0x3d9,
	false,
	0x3ff,
	false,
	0x000,
) as CrcInterface<number>;
