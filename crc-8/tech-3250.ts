/**
 * @module
 *
 * CRC-8/TECH-3250
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/TECH-3250
 */
export const CRC_8_TECH_3250 = crc(
	8,
	0x1d,
	true,
	0xff,
	true,
	0x00,
) as CrcInterface<number>;

export default CRC_8_TECH_3250;
