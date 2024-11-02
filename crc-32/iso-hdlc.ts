import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-32/ISO-HDLC
 */
export default crc(
	32,
	0x04c11db7,
	true,
	0xffffffff,
	true,
	0xffffffff,
) as CrcInterface<number>;
