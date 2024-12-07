/**
 * @module
 *
 * CRC-32/JAMCRC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/JAMCRC
 */
export default crc(
	32,
	0x04c11db7,
	true,
	0xffffffff,
	true,
	0x00000000,
) as CrcInterface<number>;
