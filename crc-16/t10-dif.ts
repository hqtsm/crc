/**
 * @module
 *
 * CRC-16/T10-DIF
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/T10-DIF
 */
export const CRC_16_T10_DIF = crc(
	16,
	0x8bb7,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_T10_DIF;
