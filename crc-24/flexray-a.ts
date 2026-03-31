/**
 * @module
 *
 * CRC-24/FLEXRAY-A
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/FLEXRAY-A
 */
export const CRC_24_FLEXRAY_A = crc(
	24,
	0x5d6dcb,
	false,
	0xfedcba,
	false,
	0x000000,
) as CrcInterface<number>;

export default CRC_24_FLEXRAY_A;
