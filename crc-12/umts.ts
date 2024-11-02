import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-12/UMTS
 */
export default crc(
	12,
	0x80f,
	false,
	0x000,
	true,
	0x000,
) as CrcInterface<number>;
