/**
 * @module
 *
 * CRC-17/CAN-FD
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-17/CAN-FD
 */
export const CRC_17_CAN_FD = crc(
	17,
	0x1685b,
	false,
	0x00000,
	false,
	0x00000,
) as CrcInterface<number>;

export default CRC_17_CAN_FD;
