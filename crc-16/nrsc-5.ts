/**
 * @module
 *
 * CRC-16/NRSC-5
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/NRSC-5
 */
export const CRC_16_NRSC_5 = crc(
	16,
	0x080b,
	true,
	0xffff,
	true,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_NRSC_5;
