/**
 * @module
 *
 * CRC-5/EPC-C1G2
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-5/EPC-C1G2
 */
export default crc(
	5,
	0x09,
	false,
	0x09,
	false,
	0x00,
) as CrcInterface<number>;
