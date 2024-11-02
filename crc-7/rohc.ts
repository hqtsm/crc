import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-7/ROHC
 */
export default crc(
	7,
	0x4f,
	true,
	0x7f,
	true,
	0x00,
) as CrcInterface<number>;
