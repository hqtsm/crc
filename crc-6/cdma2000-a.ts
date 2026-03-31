/**
 * @module
 *
 * CRC-6/CDMA2000-A
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-6/CDMA2000-A
 */
export const CRC_6_CDMA2000_A = crc(
	6,
	0x27,
	false,
	0x3f,
	false,
	0x00,
) as CrcInterface<number>;

export default CRC_6_CDMA2000_A;
