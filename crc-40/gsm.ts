/**
 * @module
 *
 * CRC-40/GSM
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-40/GSM
 */
export const CRC_40_GSM = crc(
	40n,
	0x0004820009n,
	false,
	0x0000000000n,
	false,
	0xffffffffffn,
) as CrcInterface<bigint>;

export default CRC_40_GSM;
