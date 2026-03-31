/**
 * @module
 *
 * CRC-16/EN-13757
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/EN-13757
 */
export const CRC_16_EN_13757 = crc(
	16,
	0x3d65,
	false,
	0x0000,
	false,
	0xffff,
) as CrcInterface<number>;

export default CRC_16_EN_13757;
