/**
 * @module
 *
 * CRC-14/DARC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-14/DARC
 */
export default crc(
	14,
	0x0805,
	true,
	0x0000,
	true,
	0x0000,
) as CrcInterface<number>;
