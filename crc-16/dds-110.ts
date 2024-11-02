import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/DDS-110
 */
export default crc(
	16,
	0x8005,
	false,
	0x800d,
	false,
	0x0000,
) as CrcInterface<number>;
