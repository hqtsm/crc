/**
 * @module
 *
 * CRC-24/OPENPGP
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/OPENPGP
 */
export default crc(
	24,
	0x864cfb,
	false,
	0xb704ce,
	false,
	0x000000,
) as CrcInterface<number>;
