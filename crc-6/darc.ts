/**
 * @module
 *
 * CRC-6/DARC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-6/DARC
 */
export const CRC_6_DARC = crc(
	6,
	0x19,
	true,
	0x00,
	true,
	0x00,
) as CrcInterface<number>;

export default CRC_6_DARC;
