/**
 * @module
 *
 * CRC-16/ISO-IEC-14443-3-A
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/ISO-IEC-14443-3-A
 */
export const CRC_16_ISO_IEC_14443_3_A = crc(
	16,
	0x1021,
	true,
	0xc6c6,
	true,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_ISO_IEC_14443_3_A;
