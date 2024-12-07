/**
 * @module
 *
 * CRC-16/KERMIT
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/KERMIT
 */
export default crc(
	16,
	0x1021,
	true,
	0x0000,
	true,
	0x0000,
) as CrcInterface<number>;
