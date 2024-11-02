import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-64/MS
 */
export default crc(
	64n,
	0x259c84cba6426349n,
	true,
	0xffffffffffffffffn,
	true,
	0x0000000000000000n,
) as CrcInterface<bigint>;
