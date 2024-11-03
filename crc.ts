/**
 * An array-like object of 8-bit numbers.
 */
export type CrcData = {
	/**
	 * Number of bytes.
	 */
	length: number;

	/**
	 * Bytes.
	 */
	[index: number]: number;
};

/**
 * CRC table.
 */
export type CrcTable<T extends number | bigint> = () => T[];

/**
 * CRC reflect.
 *
 * @param data Bits to reflect.
 * @param size Number of bits.
 * @returns Reflected bits.
 */
export type CrcReflect<T extends number | bigint> = (
	data: T,
	size: number | bigint,
) => T;

/**
 * CRC init.
 *
 * @returns Initial value.
 */
export type CrcInit<T extends number | bigint> = () => T;

/**
 * CRC update.
 *
 * @param crc Current value.
 * @param data Bytes.
 * @returns Updated value.
 */
export type CrcUpdate<T extends number | bigint> = (
	crc: T,
	data: Readonly<CrcData>,
) => T;

/**
 * CRC finalize.
 *
 * @param crc Value to finalize.
 * @returns Finalized CRC.
 */
export type CrcFinalize<T extends number | bigint> = (crc: T) => T;

/**
 * CRC interface.
 */
export type CrcInterface<T extends number | bigint> = {
	/**
	 * Bit size.
	 */
	readonly size: T;

	/**
	 * Polynomial.
	 */
	readonly poly: T;

	/**
	 * Reflect input.
	 */
	readonly refi: boolean;

	/**
	 * XOR input.
	 */
	readonly xori: T;

	/**
	 * Reflect output.
	 */
	readonly refo: boolean;

	/**
	 * XOR output.
	 */
	readonly xoro: T;

	/**
	 * CRC reflect.
	 */
	readonly reflect: CrcReflect<T>;

	/**
	 * CRC table.
	 */
	readonly table: CrcTable<T>;

	/**
	 * CRC init.
	 */
	readonly init: CrcInit<T>;

	/**
	 * CRC update.
	 */
	readonly update: CrcUpdate<T>;

	/**
	 * CRC finalize.
	 */
	readonly finalize: CrcFinalize<T>;
};

/**
 * CRC factory.
 *
 * @param size Bit size.
 * @param poly Polynomial.
 * @param refi Reflect input.
 * @param xori XOR input.
 * @param refo Reflect output.
 * @param xoro XOR output.
 */
export function crc<T extends number>(
	size: number,
	poly: number,
	refi: boolean,
	xori: number,
	refo: boolean,
	xoro: number,
): CrcInterface<number>;
export function crc<T extends bigint>(
	size: bigint,
	poly: bigint,
	refi: boolean,
	xori: bigint,
	refo: boolean,
	xoro: bigint,
): CrcInterface<bigint>;
export function crc<T extends number | bigint>(
	size: T,
	poly: T,
	refi: boolean,
	xori: T,
	refo: boolean,
	xoro: T,
): CrcInterface<T> {
	let t: T[];
	let s: number;
	let i8 = size - size;
	let i0 = i8++;
	let i1 = i8++;
	let i255 = (i1 << (i8 <<= i8)) - i1;
	let h = i1 << size - i1;
	let m = h - i1 << i1 | i1;
	let n = i0 === 0;
	let reflect = (data: T, width: number | bigint) => {
		let r = data & i1;
		while (--width) {
			r = r << i1 | ((data as number) >>= i1) & i1;
		}
		return (n ? r >>> 0 : r) as T;
	};
	let table = () => {
		let r = size < i8 ? i8 - size : i0;
		let l = size - i8 + r;
		let a = h << r;
		let x = poly << r;
		let t = [i0];
		let c;
		for (let i = i255; i;) {
			c = (refi ? reflect(i as T, 8) : i) << l;
			for (let j = 8; j--;) {
				c = c & a ? c << i1 ^ x : c << i1;
			}
			c >>= r;
			c = refi ? reflect(c as T, size) as number : (c & m);
			t[i--] = n ? c >>> 0 : c;
		}
		return t as T[];
	};
	return {
		size,
		poly,
		refi,
		xori,
		refo,
		xoro,
		reflect,
		table,
		init: refi ? () => reflect(xori, size) : () => xori,
		update: refi
			? (
				n
					? (crc: T, data: Readonly<CrcData>) => {
						t ??= table();
						for (let i = 0, l = data.length; i < l;) {
							crc = (
								t[
									(crc ^ data[i++]) & i255
								] ^ crc >>> i8
							) as T;
						}
						return crc >>> 0 as T;
					}
					: (crc: T, data: Readonly<CrcData>) => {
						t ??= table();
						for (let i = 0, l = data.length; i < l;) {
							crc = (
								t[
									Number(crc & i255) ^
									data[i++] & 255
								] ^ crc >> i8
							) as T;
						}
						return crc;
					}
			)
			: (
				(s = size - i8) > 0
					? (
						n
							? (crc: T, data: Readonly<CrcData>) => {
								t ??= table();
								for (let i = 0, l = data.length; i < l;) {
									crc = (
										t[
											(crc >>> s ^ data[i++]) & i255
										] ^ crc << i8 & m
									) as T;
								}
								return crc >>> 0 as T;
							}
							: (crc: T, data: Readonly<CrcData>) => {
								t ??= table();
								for (let i = 0, l = data.length; i < l;) {
									crc = (
										t[
											Number(crc >> s & i255) ^
											data[i++] & 255
										] ^ crc << i8 & m
									) as T;
								}
								return crc as T;
							}
					)
					: (
						(s = -s, n)
							? (crc: T, data: Readonly<CrcData>) => {
								t ??= table();
								for (let i = 0, l = data.length; i < l;) {
									crc = (
										t[
											(crc << s ^ data[i++]) & i255
										]
									) as T;
								}
								return crc as T;
							}
							: (crc: T, data: Readonly<CrcData>) => {
								t ??= table();
								for (let i = 0, l = data.length; i < l;) {
									crc = (
										t[
											Number(crc << s & i255) ^
											data[i++] & 255
										]
									) as T;
								}
								return crc as T;
							}
					)
			),
		finalize: refo === refi
			? (
				n
					? (crc: T) => (crc ^ xoro) >>> 0 as T
					: (crc: T) => (crc ^ xoro) as T
			)
			: (
				n
					? (crc: T) => (reflect(crc, size) ^ xoro) >>> 0 as T
					: (crc: T) => (reflect(crc, size) ^ xoro) as T
			),
	};
}
