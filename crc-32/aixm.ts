/**
 * @module
 *
 * CRC-32/AIXM
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/AIXM
 */
export const CRC_32_AIXM = crc(
	32,
	0x814141ab,
	false,
	0x00000000,
	false,
	0x00000000,
) as CrcInterface<number>;

export default CRC_32_AIXM;
