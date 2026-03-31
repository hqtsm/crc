/**
 * @module
 *
 * CRC-15/CAN
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-15/CAN
 */
export const CRC_15_CAN = crc(
	15,
	0x4599,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;

export default CRC_15_CAN;
