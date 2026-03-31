/**
 * @module
 *
 * CRC-8/HITAG
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/HITAG
 */
export const CRC_8_HITAG = crc(
	8,
	0x1d,
	false,
	0xff,
	false,
	0x00,
) as CrcInterface<number>;

export default CRC_8_HITAG;
