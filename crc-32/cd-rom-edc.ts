/**
 * @module
 *
 * CRC-32/CD-ROM-EDC
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/CD-ROM-EDC
 */
export const CRC_32_CD_ROM_EDC = crc(
	32,
	0x8001801b,
	true,
	0x00000000,
	true,
	0x00000000,
) as CrcInterface<number>;

export default CRC_32_CD_ROM_EDC;
