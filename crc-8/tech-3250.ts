import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/TECH-3250
 */
export default crc(
	8,
	0x1d,
	true,
	0xff,
	true,
	0x00,
) as CrcInterface<number>;
