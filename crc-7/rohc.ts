/**
 * @module
 *
 * CRC-7/ROHC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-7/ROHC
 */
export const CRC_7_ROHC = crc(
	7,
	0x4f,
	true,
	0x7f,
	true,
	0x00,
) as CrcInterface<number>;

export default CRC_7_ROHC;
