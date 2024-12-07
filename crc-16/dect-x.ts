/**
 * @module
 *
 * CRC-16/DECT-X
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/DECT-X
 */
export default crc(
	16,
	0x0589,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;
