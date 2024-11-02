import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-64/WE
 */
export default crc(
	64n,
	0x42f0e1eba9ea3693n,
	false,
	0xffffffffffffffffn,
	false,
	0xffffffffffffffffn,
) as CrcInterface<bigint>;
