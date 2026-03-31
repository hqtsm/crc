/**
 * @module
 *
 * CRC-16/RIELLO
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/RIELLO
 */
export const CRC_16_RIELLO = crc(
	16,
	0x1021,
	true,
	0xb2aa,
	true,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_RIELLO;
