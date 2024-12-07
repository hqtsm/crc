/**
 * @module
 *
 * CRC-16/OPENSAFETY-A
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/OPENSAFETY-A
 */
export default crc(
	16,
	0x5935,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;
