/**
 * @module
 *
 * CRC-16/IBM-SDLC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/IBM-SDLC
 */
export default crc(
	16,
	0x1021,
	true,
	0xffff,
	true,
	0xffff,
) as CrcInterface<number>;
