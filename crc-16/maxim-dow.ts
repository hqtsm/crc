import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/MAXIM-DOW
 */
export default crc(
	16,
	0x8005,
	true,
	0x0000,
	true,
	0xffff,
) as CrcInterface<number>;
