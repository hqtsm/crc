import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/AIXM
 */
export default crc(
	32,
	0x814141ab,
	false,
	0x00000000,
	false,
	0x00000000,
) as CrcInterface<number>;
