/**
 * @module
 *
 * CRC-16/LJ1200
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/LJ1200
 */
export const CRC_16_LJ1200 = crc(
	16,
	0x6f63,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_LJ1200;
