/**
 * @module
 *
 * CRC-16/SPI-FUJITSU
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/SPI-FUJITSU
 */
export default crc(
	16,
	0x1021,
	false,
	0x1d0f,
	false,
	0x0000,
) as CrcInterface<number>;
