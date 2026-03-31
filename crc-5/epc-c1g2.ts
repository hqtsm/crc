/**
 * @module
 *
 * CRC-5/EPC-C1G2
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-5/EPC-C1G2
 */
export const CRC_5_EPC_C1G2 = crc(
	5,
	0x09,
	false,
	0x09,
	false,
	0x00,
) as CrcInterface<number>;

export default CRC_5_EPC_C1G2;
