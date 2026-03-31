/**
 * @module
 *
 * CRC-24/INTERLAKEN
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/INTERLAKEN
 */
export const CRC_24_INTERLAKEN = crc(
	24,
	0x328b63,
	false,
	0xffffff,
	false,
	0xffffff,
) as CrcInterface<number>;

export default CRC_24_INTERLAKEN;
