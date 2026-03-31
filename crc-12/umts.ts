/**
 * @module
 *
 * CRC-12/UMTS
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-12/UMTS
 */
export const CRC_12_UMTS = crc(
	12,
	0x80f,
	false,
	0x000,
	true,
	0x000,
) as CrcInterface<number>;

export default CRC_12_UMTS;
