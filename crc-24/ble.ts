/**
 * @module
 *
 * CRC-24/BLE
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/BLE
 */
export const CRC_24_BLE = crc(
	24,
	0x00065b,
	true,
	0x555555,
	true,
	0x000000,
) as CrcInterface<number>;

export default CRC_24_BLE;
