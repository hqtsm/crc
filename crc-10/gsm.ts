/**
 * @module
 *
 * CRC-10/GSM
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-10/GSM
 */
export default crc(
	10,
	0x175,
	false,
	0x000,
	false,
	0x3ff,
) as CrcInterface<number>;
