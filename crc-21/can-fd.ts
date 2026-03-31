/**
 * @module
 *
 * CRC-21/CAN-FD
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-21/CAN-FD
 */
export const CRC_21_CAN_FD = crc(
	21,
	0x102899,
	false,
	0x000000,
	false,
	0x000000,
) as CrcInterface<number>;

export default CRC_21_CAN_FD;
