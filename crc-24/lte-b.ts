import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/LTE-B
 */
export default crc(
	24,
	0x800063,
	false,
	0x000000,
	false,
	0x000000,
) as CrcInterface<number>;
