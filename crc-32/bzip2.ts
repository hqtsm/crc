/**
 * @module
 *
 * CRC-32/BZIP2
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/BZIP2
 */
export const CRC_32_BZIP2 = crc(
	32,
	0x04c11db7,
	false,
	0xffffffff,
	false,
	0xffffffff,
) as CrcInterface<number>;

export default CRC_32_BZIP2;
