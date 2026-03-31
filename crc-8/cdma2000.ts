/**
 * @module
 *
 * CRC-8/CDMA2000
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/CDMA2000
 */
export const CRC_8_CDMA2000 = crc(
	8,
	0x9b,
	false,
	0xff,
	false,
	0x00,
) as CrcInterface<number>;

export default CRC_8_CDMA2000;
