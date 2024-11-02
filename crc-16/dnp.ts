import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/DNP
 */
export default crc(
	16,
	0x3d65,
	true,
	0x0000,
	true,
	0xffff,
) as CrcInterface<number>;
