/**
 * @module
 *
 * CRC-7/MMC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-7/MMC
 */
export default crc(
	7,
	0x09,
	false,
	0x00,
	false,
	0x00,
) as CrcInterface<number>;
