/**
 * @module
 *
 * CRC-16/XMODEM
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/XMODEM
 */
export const CRC_16_XMODEM = crc(
	16,
	0x1021,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_XMODEM;
