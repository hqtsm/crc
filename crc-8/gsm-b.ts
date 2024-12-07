/**
 * @module
 *
 * CRC-8/GSM-B
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/GSM-B
 */
export default crc(
	8,
	0x49,
	false,
	0x00,
	false,
	0xff,
) as CrcInterface<number>;
