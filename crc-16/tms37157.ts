/**
 * @module
 *
 * CRC-16/TMS37157
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/TMS37157
 */
export const CRC_16_TMS37157 = crc(
	16,
	0x1021,
	true,
	0x89ec,
	true,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_TMS37157;
