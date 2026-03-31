/**
 * @module
 *
 * CRC-32/AUTOSAR
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/AUTOSAR
 */
export const CRC_32_AUTOSAR = crc(
	32,
	0xf4acfb13,
	true,
	0xffffffff,
	true,
	0xffffffff,
) as CrcInterface<number>;

export default CRC_32_AUTOSAR;
