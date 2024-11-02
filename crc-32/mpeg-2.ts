import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/MPEG-2
 */
export default crc(
	32,
	0x04c11db7,
	false,
	0xffffffff,
	false,
	0x00000000,
) as CrcInterface<number>;
