/**
 * @module
 *
 * CRC-4/INTERLAKEN
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-4/INTERLAKEN
 */
export default crc(
	4,
	0x3,
	false,
	0xf,
	false,
	0xf,
) as CrcInterface<number>;
