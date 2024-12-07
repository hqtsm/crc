/**
 * @module
 *
 * CRC-16/IBM-3740
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/IBM-3740
 */
export default crc(
	16,
	0x1021,
	false,
	0xffff,
	false,
	0x0000,
) as CrcInterface<number>;
