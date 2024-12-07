/**
 * @module
 *
 * CRC-24/OS-9
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/OS-9
 */
export default crc(
	24,
	0x800063,
	false,
	0xffffff,
	false,
	0xffffff,
) as CrcInterface<number>;
