/**
 * @module
 *
 * CRC-8/MAXIM-DOW
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/MAXIM-DOW
 */
export default crc(
	8,
	0x31,
	true,
	0x00,
	true,
	0x00,
) as CrcInterface<number>;
