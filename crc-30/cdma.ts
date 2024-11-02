import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-30/CDMA
 */
export default crc(
	30,
	0x2030b9c7,
	false,
	0x3fffffff,
	false,
	0x3fffffff,
) as CrcInterface<number>;
