/**
 * @module
 *
 * CRC-16/CDMA2000
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/CDMA2000
 */
export const CRC_16_CDMA2000 = crc(
	16,
	0xc867,
	false,
	0xffff,
	false,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_CDMA2000;
