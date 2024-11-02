import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/AUTOSAR
 */
export default crc(
	32,
	0xf4acfb13,
	true,
	0xffffffff,
	true,
	0xffffffff,
) as CrcInterface<number>;
