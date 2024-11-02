import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-8/I-CODE
 */
export default crc(
	8,
	0x1d,
	false,
	0xfd,
	false,
	0x00,
) as CrcInterface<number>;
