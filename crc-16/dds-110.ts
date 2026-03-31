/**
 * @module
 *
 * CRC-16/DDS-110
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/DDS-110
 */
export const CRC_16_DDS_110 = crc(
	16,
	0x8005,
	false,
	0x800d,
	false,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_DDS_110;
