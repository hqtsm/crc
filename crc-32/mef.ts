/**
 * @module
 *
 * CRC-32/MEF
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/MEF
 */
export default crc(
	32,
	0x741b8cd7,
	true,
	0xffffffff,
	true,
	0x00000000,
) as CrcInterface<number>;
