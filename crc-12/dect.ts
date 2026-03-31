/**
 * @module
 *
 * CRC-12/DECT
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-12/DECT
 */
export const CRC_12_DECT = crc(
	12,
	0x80f,
	false,
	0x000,
	false,
	0x000,
) as CrcInterface<number>;

export default CRC_12_DECT;
