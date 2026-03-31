/**
 * @module
 *
 * CRC-24/OPENPGP
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/OPENPGP
 */
export const CRC_24_OPENPGP = crc(
	24,
	0x864cfb,
	false,
	0xb704ce,
	false,
	0x000000,
) as CrcInterface<number>;

export default CRC_24_OPENPGP;
