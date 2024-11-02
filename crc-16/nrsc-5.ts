import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/NRSC-5
 */
export default crc(
	16,
	0x080b,
	true,
	0xffff,
	true,
	0x0000,
) as CrcInterface<number>;
