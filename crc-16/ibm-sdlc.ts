/**
 * @module
 *
 * CRC-16/IBM-SDLC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/IBM-SDLC
 */
export const CRC_16_IBM_SDLC = crc(
	16,
	0x1021,
	true,
	0xffff,
	true,
	0xffff,
) as CrcInterface<number>;

export default CRC_16_IBM_SDLC;
