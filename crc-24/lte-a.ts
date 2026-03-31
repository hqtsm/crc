/**
 * @module
 *
 * CRC-24/LTE-A
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/LTE-A
 */
export const CRC_24_LTE_A = crc(
	24,
	0x864cfb,
	false,
	0x000000,
	false,
	0x000000,
) as CrcInterface<number>;

export default CRC_24_LTE_A;
