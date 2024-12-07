/**
 * @module
 *
 * CRC-6/GSM
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-6/GSM
 */
export default crc(
	6,
	0x2f,
	false,
	0x00,
	false,
	0x3f,
) as CrcInterface<number>;
