/**
 * @module
 *
 * CRC-8/GSM-A
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/GSM-A
 */
export default crc(
	8,
	0x1d,
	false,
	0x00,
	false,
	0x00,
) as CrcInterface<number>;
