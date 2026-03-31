/**
 * @module
 *
 * CRC-82/DARC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-82/DARC
 */
export const CRC_82_DARC = crc(
	82n,
	0x0308c0111011401440411n,
	true,
	0x000000000000000000000n,
	true,
	0x000000000000000000000n,
) as CrcInterface<bigint>;

export default CRC_82_DARC;
