import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-24/INTERLAKEN
 */
export default crc(
	24,
	0x328b63,
	false,
	0xffffff,
	false,
	0xffffff,
) as CrcInterface<number>;
