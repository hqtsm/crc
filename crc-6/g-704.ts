/**
 * @module
 *
 * CRC-6/G-704
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-6/G-704
 */
export const CRC_6_G_704 = crc(
	6,
	0x03,
	true,
	0x00,
	true,
	0x00,
) as CrcInterface<number>;

export default CRC_6_G_704;
