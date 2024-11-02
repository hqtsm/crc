import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/CDMA2000
 */
export default crc(
	16,
	0xc867,
	false,
	0xffff,
	false,
	0x0000,
) as CrcInterface<number>;
