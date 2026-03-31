/**
 * @module
 *
 * CRC-16/GENIBUS
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/GENIBUS
 */
export const CRC_16_GENIBUS = crc(
	16,
	0x1021,
	false,
	0xffff,
	false,
	0xffff,
) as CrcInterface<number>;

export default CRC_16_GENIBUS;
