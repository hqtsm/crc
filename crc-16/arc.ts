/**
 * @module
 *
 * CRC-16/ARC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/ARC
 */
export default crc(
	16,
	0x8005,
	true,
	0x0000,
	true,
	0x0000,
) as CrcInterface<number>;
