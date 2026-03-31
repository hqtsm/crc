/**
 * @module
 *
 * CRC-64/NVME
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-64/NVME
 */
export const CRC_64_NVME = crc(
	64n,
	0xad93d23594c93659n,
	true,
	0xffffffffffffffffn,
	true,
	0xffffffffffffffffn,
) as CrcInterface<bigint>;

export default CRC_64_NVME;
