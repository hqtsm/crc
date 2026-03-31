/**
 * @module
 *
 * CRC-31/PHILIPS
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-31/PHILIPS
 */
export const CRC_31_PHILIPS = crc(
	31,
	0x04c11db7,
	false,
	0x7fffffff,
	false,
	0x7fffffff,
) as CrcInterface<number>;

export default CRC_31_PHILIPS;
