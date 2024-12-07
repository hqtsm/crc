/**
 * @module
 *
 * CRC-16/UMTS
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/UMTS
 */
export default crc(
	16,
	0x8005,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;
