import { assertEquals } from '@std/assert';

import { crc } from './crc.ts';

import _123456789 from './spec/123456789.ts';
import _00ff from './spec/00ff.ts';

function* parseCoverage(
	s: string,
): Generator<{
	line: string;
	size: bigint;
	poly: bigint;
	reflectIn: boolean;
	xorIn: bigint;
	reflectOut: boolean;
	xorOut: bigint;
	expected: bigint;
}> {
	for (let line of s.split(/[\r\n]+/)) {
		line = line.trim();
		if (!line) {
			continue;
		}
		const pieces = line.split(/\s+/);
		yield {
			line,
			size: BigInt(+pieces[0]),
			poly: BigInt(`0x${pieces[1]}`),
			reflectIn: pieces[2] !== '0',
			xorIn: BigInt(`0x${pieces[3]}`),
			reflectOut: pieces[4] !== '0',
			xorOut: BigInt(`0x${pieces[5]}`),
			expected: BigInt(`0x${pieces[6]}`),
		};
	}
}

Deno.test('crc spec/123456789', () => {
	const input = new TextEncoder().encode('123456789');
	for (const cov of parseCoverage(_123456789)) {
		const crcB = crc(
			cov.size,
			cov.poly,
			cov.reflectIn,
			cov.xorIn,
			cov.reflectOut,
			cov.xorOut,
		);
		let c = crcB.init();
		c = crcB.update(c, input);
		c = crcB.finalize(c);
		assertEquals(c, cov.expected, cov.line);

		if (cov.size <= 32) {
			const crcI = crc(
				Number(cov.size),
				Number(cov.poly),
				cov.reflectIn,
				Number(cov.xorIn),
				cov.reflectOut,
				Number(cov.xorOut),
			);
			let c = crcI.init();
			c = crcI.update(c, input);
			c = crcI.finalize(c);
			assertEquals(c, Number(cov.expected), cov.line);
		}
	}
});

Deno.test('crc spec/00ff', () => {
	const input = new ArrayBuffer(256);
	const inputA = new Uint8Array(input);
	const inputB = new Int8Array(input);
	for (let i = inputA.length; i--;) {
		inputA[i] = i;
	}
	const inputA1 = inputA.subarray(0, 7);
	const inputA2 = inputA.subarray(7);
	const inputB1 = inputB.subarray(0, 7);
	const inputB2 = inputB.subarray(7);

	for (const cov of parseCoverage(_00ff)) {
		const crcB = crc(
			cov.size,
			cov.poly,
			cov.reflectIn,
			cov.xorIn,
			cov.reflectOut,
			cov.xorOut,
		);

		let c1 = crcB.init();
		c1 = crcB.update(c1, inputA1);
		c1 = crcB.update(c1, inputA2);
		c1 = crcB.finalize(c1);
		assertEquals(c1, cov.expected, cov.line);

		let c2 = crcB.init();
		c2 = crcB.update(c2, inputB1);
		c2 = crcB.update(c2, inputB2);
		c2 = crcB.finalize(c2);
		assertEquals(c2, cov.expected, cov.line);

		if (cov.size <= 32) {
			const crcI = crc(
				Number(cov.size),
				Number(cov.poly),
				cov.reflectIn,
				Number(cov.xorIn),
				cov.reflectOut,
				Number(cov.xorOut),
			);

			let c1 = crcI.init();
			c1 = crcI.update(c1, inputA1);
			c1 = crcI.update(c1, inputA2);
			c1 = crcI.finalize(c1);
			assertEquals(c1, Number(cov.expected), cov.line);

			let c2 = crcI.init();
			c2 = crcI.update(c2, inputB1);
			c2 = crcI.update(c2, inputB2);
			c2 = crcI.finalize(c2);
			assertEquals(c1, Number(cov.expected), cov.line);
		}
	}
});
