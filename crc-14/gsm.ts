/**
 * @module
 *
 * CRC-14/GSM
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-14/GSM
 */
export const CRC_14_GSM = crc(
	14,
	0x202d,
	false,
	0x0000,
	false,
	0x3fff,
) as CrcInterface<number>;

export default CRC_14_GSM;
