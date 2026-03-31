/**
 * @module
 *
 * CRC-64/REDIS
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-64/REDIS
 */
export const CRC_64_REDIS = crc(
	64n,
	0xad93d23594c935a9n,
	true,
	0x0000000000000000n,
	true,
	0x0000000000000000n,
) as CrcInterface<bigint>;

export default CRC_64_REDIS;
