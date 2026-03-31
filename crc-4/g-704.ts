/**
 * @module
 *
 * CRC-4/G-704
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-4/G-704
 */
export const CRC_4_G_704 = crc(
	4,
	0x3,
	true,
	0x0,
	true,
	0x0,
) as CrcInterface<number>;

export default CRC_4_G_704;
