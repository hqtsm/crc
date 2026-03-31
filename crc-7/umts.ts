/**
 * @module
 *
 * CRC-7/UMTS
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-7/UMTS
 */
export const CRC_7_UMTS = crc(
	7,
	0x45,
	false,
	0x00,
	false,
	0x00,
) as CrcInterface<number>;

export default CRC_7_UMTS;
