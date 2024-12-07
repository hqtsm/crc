/**
 * @module
 *
 * CRC-24/FLEXRAY-B
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/FLEXRAY-B
 */
export default crc(
	24,
	0x5d6dcb,
	false,
	0xabcdef,
	false,
	0x000000,
) as CrcInterface<number>;
