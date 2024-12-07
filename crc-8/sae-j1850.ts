/**
 * @module
 *
 * CRC-8/SAE-J1850
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/SAE-J1850
 */
export default crc(
	8,
	0x1d,
	false,
	0xff,
	false,
	0xff,
) as CrcInterface<number>;
