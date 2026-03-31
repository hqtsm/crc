/**
 * @module
 *
 * CRC-16/MAXIM-DOW
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/MAXIM-DOW
 */
export const CRC_16_MAXIM_DOW = crc(
	16,
	0x8005,
	true,
	0x0000,
	true,
	0xffff,
) as CrcInterface<number>;

export default CRC_16_MAXIM_DOW;
