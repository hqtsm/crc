/**
 * @module
 *
 * CRC-5/USB
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-5/USB
 */
export const CRC_5_USB = crc(
	5,
	0x5,
	true,
	0x1f,
	true,
	0x1f,
) as CrcInterface<number>;

export default CRC_5_USB;
