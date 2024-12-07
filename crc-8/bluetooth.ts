/**
 * @module
 *
 * CRC-8/BLUETOOTH
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/BLUETOOTH
 */
export default crc(
	8,
	0xa7,
	true,
	0x00,
	true,
	0x00,
) as CrcInterface<number>;
