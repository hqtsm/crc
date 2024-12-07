/**
 * @module
 *
 * CRC-16/TELEDISK
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/TELEDISK
 */
export default crc(
	16,
	0xa097,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;
