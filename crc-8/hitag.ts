/**
 * @module
 *
 * CRC-8/HITAG
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/HITAG
 */
export default crc(
	8,
	0x1d,
	false,
	0xff,
	false,
	0x00,
) as CrcInterface<number>;
