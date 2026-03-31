/**
 * @module
 *
 * CRC-16/MODBUS
 */

import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/MODBUS
 */
export const CRC_16_MODBUS = crc(
	16,
	0x8005,
	true,
	0xffff,
	true,
	0x0000,
) as CrcInterface<number>;

export default CRC_16_MODBUS;
