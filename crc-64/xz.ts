/**
 * @module
 *
 * CRC-64/XZ
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-64/XZ
 */
export const CRC_64_XZ = crc(
	64n,
	0x42f0e1eba9ea3693n,
	true,
	0xffffffffffffffffn,
	true,
	0xffffffffffffffffn,
) as CrcInterface<bigint>;

export default CRC_64_XZ;
