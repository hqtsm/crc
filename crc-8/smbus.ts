/**
 * @module
 *
 * CRC-8/SMBUS
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/SMBUS
 */
export default crc(
	8,
	0x07,
	false,
	0x00,
	false,
	0x00,
) as CrcInterface<number>;
