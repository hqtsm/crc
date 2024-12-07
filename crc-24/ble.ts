/**
 * @module
 *
 * CRC-24/BLE
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/BLE
 */
export default crc(
	24,
	0x00065b,
	true,
	0x555555,
	true,
	0x000000,
) as CrcInterface<number>;
