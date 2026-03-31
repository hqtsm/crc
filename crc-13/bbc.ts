/**
 * @module
 *
 * CRC-13/BBC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-13/BBC
 */
export const CRC_13_BBC = crc(
	13,
	0x1cf5,
	false,
	0x0000,
	false,
	0x0000,
) as CrcInterface<number>;

export default CRC_13_BBC;
