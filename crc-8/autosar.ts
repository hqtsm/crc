/**
 * @module
 *
 * CRC-8/AUTOSAR
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/AUTOSAR
 */
export const CRC_8_AUTOSAR = crc(
	8,
	0x2f,
	false,
	0xff,
	false,
	0xff,
) as CrcInterface<number>;

export default CRC_8_AUTOSAR;
