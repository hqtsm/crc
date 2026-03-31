/**
 * @module
 *
 * CRC-16/CMS
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/CMS
 */
export const CRC_16_CMS = crc(
	16,
	0x8005,
	false,
	0xffff,
	false,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_CMS;
