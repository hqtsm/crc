import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-12/DECT
 */
export default crc(
	12,
	0x80f,
	false,
	0x000,
	false,
	0x000,
) as CrcInterface<number>;
