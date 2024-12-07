/**
 * @module
 *
 * CRC-16/EN-13757
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/EN-13757
 */
export default crc(
	16,
	0x3d65,
	false,
	0x0000,
	false,
	0xffff,
) as CrcInterface<number>;
