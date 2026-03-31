/**
 * @module
 *
 * CRC-16/DECT-X
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/DECT-X
 */
export const CRC_16_DECT_X = crc(
	16,
	0x0589,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_DECT_X;
