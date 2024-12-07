/**
 * @module
 *
 * CRC-16/DECT-R
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/DECT-R
 */
export default crc(
	16,
	0x0589,
	false,
	0x0000,
	false,
	0x0001,
) as CrcInterface<number>;
