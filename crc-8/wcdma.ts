/**
 * @module
 *
 * CRC-8/WCDMA
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/WCDMA
 */
export const CRC_8_WCDMA = crc(
	8,
	0x9b,
	true,
	0x00,
	true,
	0x00,
) as CrcInterface<number>;

export default CRC_8_WCDMA;
