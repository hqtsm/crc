import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-4/G-704
 */
export default crc(
	4,
	0x3,
	true,
	0x0,
	true,
	0x0,
) as CrcInterface<number>;
