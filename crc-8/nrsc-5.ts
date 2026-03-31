/**
 * @module
 *
 * CRC-8/NRSC-5
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/NRSC-5
 */
export const CRC_8_NRSC_5 = crc(
	8,
	0x31,
	false,
	0xff,
	false,
	0x00,
) as CrcInterface<number>;

export default CRC_8_NRSC_5;
