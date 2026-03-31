/**
 * @module
 *
 * CRC-8/DVB-S2
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/DVB-S2
 */
export const CRC_8_DVB_S2 = crc(
	8,
	0xd5,
	false,
	0x00,
	false,
	0x00,
) as CrcInterface<number>;

export default CRC_8_DVB_S2;
