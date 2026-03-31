/**
 * @module
 *
 * CRC-8/GSM-B
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/GSM-B
 */
export const CRC_8_GSM_B = crc(
	8,
	0x49,
	false,
	0x00,
	false,
	0xff,
) as CrcInterface<number>;

export default CRC_8_GSM_B;
