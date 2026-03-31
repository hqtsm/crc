/**
 * @module
 *
 * CRC-3/GSM
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-3/GSM
 */
export const CRC_3_GSM = crc(
	3,
	0x3,
	false,
	0x0,
	false,
	0x7,
) as CrcInterface<number>;

export default CRC_3_GSM;
