/**
 * @module
 *
 * CRC-11/UMTS
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-11/UMTS
 */
export const CRC_11_UMTS = crc(
	11,
	0x307,
	false,
	0x000,
	false,
	0x000,
) as CrcInterface<number>;

export default CRC_11_UMTS;
