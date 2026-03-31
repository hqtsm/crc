/**
 * @module
 *
 * CRC-32/BASE91-D
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/BASE91-D
 */
export const CRC_32_BASE91_D = crc(
	32,
	0xa833982b,
	true,
	0xffffffff,
	true,
	0xffffffff,
) as CrcInterface<number>;

export default CRC_32_BASE91_D;
