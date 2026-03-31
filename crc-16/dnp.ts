/**
 * @module
 *
 * CRC-16/DNP
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/DNP
 */
export const CRC_16_DNP = crc(
	16,
	0x3d65,
	true,
	0x0000,
	true,
	0xffff,
) as CrcInterface<number>;

export default CRC_16_DNP;
