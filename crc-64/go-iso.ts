/**
 * @module
 *
 * CRC-64/GO-ISO
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-64/GO-ISO
 */
export const CRC_64_GO_ISO = crc(
	64n,
	0x000000000000001bn,
	true,
	0xffffffffffffffffn,
	true,
	0xffffffffffffffffn,
) as CrcInterface<bigint>;

export default CRC_64_GO_ISO;
