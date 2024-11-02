import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/LTE-A
 */
export default crc(
	24,
	0x864cfb,
	false,
	0x000000,
	false,
	0x000000,
) as CrcInterface<number>;
