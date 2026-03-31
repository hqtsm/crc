/**
 * @module
 *
 * CRC-8/BLUETOOTH
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/BLUETOOTH
 */
export const CRC_8_BLUETOOTH = crc(
	8,
	0xa7,
	true,
	0x00,
	true,
	0x00,
) as CrcInterface<number>;

export default CRC_8_BLUETOOTH;
