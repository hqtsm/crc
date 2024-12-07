/**
 * @module
 *
 * CRC-21/CAN-FD
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-21/CAN-FD
 */
export default crc(
	21,
	0x102899,
	false,
	0x000000,
	false,
	0x000000,
) as CrcInterface<number>;
