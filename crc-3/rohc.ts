/**
 * @module
 *
 * CRC-3/ROHC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-3/ROHC
 */
export const CRC_3_ROHC = crc(
	3,
	0x3,
	true,
	0x7,
	true,
	0x0,
) as CrcInterface<number>;

export default CRC_3_ROHC;
