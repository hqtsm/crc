/**
 * @module
 *
 * CRC-8/LTE
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/LTE
 */
export default crc(
	8,
	0x9b,
	false,
	0x00,
	false,
	0x00,
) as CrcInterface<number>;
