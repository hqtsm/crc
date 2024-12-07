/**
 * @module
 *
 * CRC-16/GSM
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/GSM
 */
export default crc(
	16,
	0x1021,
	false,
	0x0000,
	false,
	0xffff,
) as CrcInterface<number>;
