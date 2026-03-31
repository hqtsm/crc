/**
 * @module
 *
 * CRC-8/OPENSAFETY
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/OPENSAFETY
 */
export const CRC_8_OPENSAFETY = crc(
	8,
	0x2f,
	false,
	0x00,
	false,
	0x00,
) as CrcInterface<number>;

export default CRC_8_OPENSAFETY;
