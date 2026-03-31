/**
 * @module
 *
 * CRC-12/GSM
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-12/GSM
 */
export const CRC_12_GSM = crc(
	12,
	0xd31,
	false,
	0x000,
	false,
	0xfff,
) as CrcInterface<number>;

export default CRC_12_GSM;
