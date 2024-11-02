import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-12/GSM
 */
export default crc(
	12,
	0xd31,
	false,
	0x000,
	false,
	0xfff,
) as CrcInterface<number>;
