/**
 * @module
 *
 * CRC-5/G-704
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-5/G-704
 */
export const CRC_5_G_704 = crc(
	5,
	0x15,
	true,
	0x00,
	true,
	0x00,
) as CrcInterface<number>;

export default CRC_5_G_704;
