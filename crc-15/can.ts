/**
 * @module
 *
 * CRC-15/CAN
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-15/CAN
 */
export default crc(
	15,
	0x4599,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;
