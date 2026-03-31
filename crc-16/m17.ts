/**
 * @module
 *
 * CRC-16/M17
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/M17
 */
export const CRC_16_M17 = crc(
	16,
	0x5935,
	false,
	0xffff,
	false,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_M17;
