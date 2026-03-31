/**
 * @module
 *
 * CRC-32/JAMCRC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/JAMCRC
 */
export const CRC_32_JAMCRC = crc(
	32,
	0x04c11db7,
	true,
	0xffffffff,
	true,
	0x00000000,
) as CrcInterface<number>;

export default CRC_32_JAMCRC;
