import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-64/XZ
 */
export default crc(
	64n,
	0x42f0e1eba9ea3693n,
	true,
	0xffffffffffffffffn,
	true,
	0xffffffffffffffffn,
) as CrcInterface<bigint>;
