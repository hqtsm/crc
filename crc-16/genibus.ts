/**
 * @module
 *
 * CRC-16/GENIBUS
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/GENIBUS
 */
export default crc(
	16,
	0x1021,
	false,
	0xffff,
	false,
	0xffff,
) as CrcInterface<number>;
