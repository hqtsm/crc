/**
 * @module
 *
 * CRC-8/DARC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/DARC
 */
export default crc(
	8,
	0x39,
	true,
	0x00,
	true,
	0x00,
) as CrcInterface<number>;
