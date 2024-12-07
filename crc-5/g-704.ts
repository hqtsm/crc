/**
 * @module
 *
 * CRC-5/G-704
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-5/G-704
 */
export default crc(
	5,
	0x15,
	true,
	0x00,
	true,
	0x00,
) as CrcInterface<number>;
