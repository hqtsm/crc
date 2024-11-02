import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-10/ATM
 */
export default crc(
	10,
	0x233,
	false,
	0x000,
	false,
	0x000,
) as CrcInterface<number>;
