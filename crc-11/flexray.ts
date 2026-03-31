/**
 * @module
 *
 * CRC-11/FLEXRAY
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-11/FLEXRAY
 */
export const CRC_11_FLEXRAY = crc(
	11,
	0x385,
	false,
	0x01a,
	false,
	0x000,
) as CrcInterface<number>;

export default CRC_11_FLEXRAY;
