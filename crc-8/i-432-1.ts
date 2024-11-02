import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/I-432-1
 */
export default crc(
	8,
	0x07,
	false,
	0x00,
	false,
	0x55,
) as CrcInterface<number>;
