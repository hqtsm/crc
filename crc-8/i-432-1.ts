/**
 * @module
 *
 * CRC-8/I-432-1
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/I-432-1
 */
export const CRC_8_I_432_1 = crc(
	8,
	0x07,
	false,
	0x00,
	false,
	0x55,
) as CrcInterface<number>;

export default CRC_8_I_432_1;
