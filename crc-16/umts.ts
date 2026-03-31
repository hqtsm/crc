/**
 * @module
 *
 * CRC-16/UMTS
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/UMTS
 */
export const CRC_16_UMTS = crc(
	16,
	0x8005,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_UMTS;
