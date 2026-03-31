/**
 * @module
 *
 * CRC-16/DECT-R
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/DECT-R
 */
export const CRC_16_DECT_R = crc(
	16,
	0x0589,
	false,
	0x0000,
	false,
	0x0001,
) as CrcInterface<number>;

export default CRC_16_DECT_R;
