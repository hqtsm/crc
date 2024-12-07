/**
 * @module
 *
 * CRC-17/CAN-FD
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-17/CAN-FD
 */
export default crc(
	17,
	0x1685b,
	false,
	0x00000,
	false,
	0x00000,
) as CrcInterface<number>;
