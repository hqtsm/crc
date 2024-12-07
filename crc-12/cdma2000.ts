/**
 * @module
 *
 * CRC-12/CDMA2000
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-12/CDMA2000
 */
export default crc(
	12,
	0xf13,
	false,
	0xfff,
	false,
	0x000,
) as CrcInterface<number>;
