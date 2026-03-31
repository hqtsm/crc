/**
 * @module
 *
 * CRC-32/MPEG-2
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/MPEG-2
 */
export const CRC_32_MPEG_2 = crc(
	32,
	0x04c11db7,
	false,
	0xffffffff,
	false,
	0x00000000,
) as CrcInterface<number>;

export default CRC_32_MPEG_2;
