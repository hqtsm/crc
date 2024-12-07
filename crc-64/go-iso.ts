/**
 * @module
 *
 * CRC-64/GO-ISO
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-64/GO-ISO
 */
export default crc(
	64n,
	0x000000000000001bn,
	true,
	0x0000000000000000n,
	true,
	0x0000000000000000n,
) as CrcInterface<bigint>;
