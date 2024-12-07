/**
 * @module
 *
 * CRC-16/USB
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/USB
 */
export default crc(
	16,
	0x8005,
	true,
	0xffff,
	true,
	0xffff,
) as CrcInterface<number>;
