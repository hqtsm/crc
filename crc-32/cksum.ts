/**
 * @module
 *
 * CRC-32/CKSUM
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/CKSUM
 */
export const CRC_32_CKSUM = crc(
	32,
	0x04c11db7,
	false,
	0x00000000,
	false,
	0xffffffff,
) as CrcInterface<number>;

export default CRC_32_CKSUM;
