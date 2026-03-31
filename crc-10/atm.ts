/**
 * @module
 *
 * CRC-10/ATM
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-10/ATM
 */
export const CRC_10_ATM = crc(
	10,
	0x233,
	false,
	0x000,
	false,
	0x000,
) as CrcInterface<number>;

export default CRC_10_ATM;
