import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-13/BBC
 */
export default crc(
	13,
	0x1cf5,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;
