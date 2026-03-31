/**
 * @module
 *
 * CRC-6/GSM
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-6/GSM
 */
export const CRC_6_GSM = crc(
	6,
	0x2f,
	false,
	0x00,
	false,
	0x3f,
) as CrcInterface<number>;

export default CRC_6_GSM;
