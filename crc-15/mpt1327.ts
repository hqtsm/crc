import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-15/MPT1327
 */
export default crc(
	15,
	0x6815,
	false,
	0x0000,
	false,
	0x0001,
) as CrcInterface<number>;
