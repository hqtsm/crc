import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/PROFIBUS
 */
export default crc(
	16,
	0x1dcf,
	false,
	0xffff,
	false,
	0xffff,
) as CrcInterface<number>;
