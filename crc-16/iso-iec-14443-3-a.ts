/**
 * @module
 *
 * CRC-16/ISO-IEC-14443-3-A
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/ISO-IEC-14443-3-A
 */
export default crc(
	16,
	0x1021,
	true,
	0xc6c6,
	true,
	0x0000,
) as CrcInterface<number>;
