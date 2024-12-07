/**
 * @module
 *
 * CRC-16/OPENSAFETY-B
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/OPENSAFETY-B
 */
export default crc(
	16,
	0x755b,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;
