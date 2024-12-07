/**
 * @module
 *
 * CRC-16/M17
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/M17
 */
export default crc(
	16,
	0x5935,
	false,
	0xffff,
	false,
	0x0000,
) as CrcInterface<number>;
