/**
 * @module
 *
 * CRC-8/ROHC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/ROHC
 */
export default crc(
	8,
	0x07,
	true,
	0xff,
	true,
	0x00,
) as CrcInterface<number>;
