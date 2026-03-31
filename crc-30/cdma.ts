/**
 * @module
 *
 * CRC-30/CDMA
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-30/CDMA
 */
export const CRC_30_CDMA = crc(
	30,
	0x2030b9c7,
	false,
	0x3fffffff,
	false,
	0x3fffffff,
) as CrcInterface<number>;

export default CRC_30_CDMA;
