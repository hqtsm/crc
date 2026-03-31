/**
 * @module
 *
 * CRC-24/LTE-B
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/LTE-B
 */
export const CRC_24_LTE_B = crc(
	24,
	0x800063,
	false,
	0x000000,
	false,
	0x000000,
) as CrcInterface<number>;

export default CRC_24_LTE_B;
