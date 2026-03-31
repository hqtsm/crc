/**
 * @module
 *
 * CRC-16/OPENSAFETY-B
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/OPENSAFETY-B
 */
export const CRC_16_OPENSAFETY_B = crc(
	16,
	0x755b,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_OPENSAFETY_B;
