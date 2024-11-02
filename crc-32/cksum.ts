import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/CKSUM
 */
export default crc(
	32,
	0x04c11db7,
	false,
	0x00000000,
	false,
	0xffffffff,
) as CrcInterface<number>;
