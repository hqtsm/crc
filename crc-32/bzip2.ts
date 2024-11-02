import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/BZIP2
 */
export default crc(
	32,
	0x04c11db7,
	false,
	0xffffffff,
	false,
	0xffffffff,
) as CrcInterface<number>;
