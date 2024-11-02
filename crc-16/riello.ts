import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-16/RIELLO
 */
export default crc(
	16,
	0x1021,
	true,
	0xb2aa,
	true,
	0x0000,
) as CrcInterface<number>;
