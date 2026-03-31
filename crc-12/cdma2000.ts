/**
 * @module
 *
 * CRC-12/CDMA2000
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-12/CDMA2000
 */
export const CRC_12_CDMA2000 = crc(
	12,
	0xf13,
	false,
	0xfff,
	false,
	0x000,
) as CrcInterface<number>;

export default CRC_12_CDMA2000;
