/**
 * @module
 *
 * CRC-4/INTERLAKEN
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-4/INTERLAKEN
 */
export const CRC_4_INTERLAKEN = crc(
	4,
	0x3,
	false,
	0xf,
	false,
	0xf,
) as CrcInterface<number>;

export default CRC_4_INTERLAKEN;
