/**
 * @module
 *
 * CRC-8/I-CODE
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/I-CODE
 */
export const CRC_8_I_CODE = crc(
	8,
	0x1d,
	false,
	0xfd,
	false,
	0x00,
) as CrcInterface<number>;

export default CRC_8_I_CODE;
