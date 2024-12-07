/**
 * @module
 *
 * CRC-8/MIFARE-MAD
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/MIFARE-MAD
 */
export default crc(
	8,
	0x1d,
	false,
	0xc7,
	false,
	0x00,
) as CrcInterface<number>;
