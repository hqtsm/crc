/**
 * @module
 *
 * CRC-16/MCRF4XX
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/MCRF4XX
 */
export const CRC_16_MCRF4XX = crc(
	16,
	0x1021,
	true,
	0xffff,
	true,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_MCRF4XX;
