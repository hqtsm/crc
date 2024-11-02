import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/MCRF4XX
 */
export default crc(
	16,
	0x1021,
	true,
	0xffff,
	true,
	0x0000,
) as CrcInterface<number>;
