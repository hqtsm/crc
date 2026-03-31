/**
 * @module
 *
 * CRC-15/MPT1327
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-15/MPT1327
 */
export const CRC_15_MPT1327 = crc(
	15,
	0x6815,
	false,
	0x0000,
	false,
	0x0001,
) as CrcInterface<number>;

export default CRC_15_MPT1327;
