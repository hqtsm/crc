import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/XFER
 */
export default crc(
	32,
	0x000000af,
	false,
	0x00000000,
	false,
	0x00000000,
) as CrcInterface<number>;
