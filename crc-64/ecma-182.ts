import { crc, type CrcInterface } from '../crc.ts';

/**
 * CRC-64/ECMA-182
 */
export default crc(
	64n,
	0x42f0e1eba9ea3693n,
	false,
	0x0000000000000000n,
	false,
	0x0000000000000000n,
) as CrcInterface<bigint>;
