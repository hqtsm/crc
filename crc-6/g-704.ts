/**
 * @module
 *
 * CRC-6/G-704
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-6/G-704
 */
export default crc(
	6,
	0x03,
	true,
	0x00,
	true,
	0x00,
) as CrcInterface<number>;
