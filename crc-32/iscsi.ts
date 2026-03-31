/**
 * @module
 *
 * CRC-32/ISCSI
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/ISCSI
 */
export const CRC_32_ISCSI = crc(
	32,
	0x1edc6f41,
	true,
	0xffffffff,
	true,
	0xffffffff,
) as CrcInterface<number>;

export default CRC_32_ISCSI;
