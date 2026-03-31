/**
 * @module
 *
 * CRC-24/FLEXRAY-B
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/FLEXRAY-B
 */
export const CRC_24_FLEXRAY_B = crc(
	24,
	0x5d6dcb,
	false,
	0xabcdef,
	false,
	0x000000,
) as CrcInterface<number>;

export default CRC_24_FLEXRAY_B;
