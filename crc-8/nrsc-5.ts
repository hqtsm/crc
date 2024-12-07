/**
 * @module
 *
 * CRC-8/NRSC-5
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/NRSC-5
 */
export default crc(
	8,
	0x31,
	false,
	0xff,
	false,
	0x00,
) as CrcInterface<number>;
