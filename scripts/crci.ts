// deno-lint-ignore-file no-console no-top-level-await

import { crc } from '../crc.ts';

if (Deno.args.length !== 8 || !/^[fs]$/.test(Deno.args[6])) {
	console.error(
		'Args: size poly reflectIn xorIn reflectOut xorOut f|s file|str',
	);
	Deno.exit(1);
}

const [size, poly, reflectIn, xorIn, reflectOut, xorOut, fs, fos] = Deno.args;
const crcN = crc(
	BigInt(size),
	BigInt(`0x${poly}`),
	reflectIn !== '0',
	BigInt(`0x${xorIn}`),
	reflectOut !== '0',
	BigInt(`0x${xorOut}`),
);
let c = crcN.init();
c = crcN.update(
	c,
	fs === 'f' ? await Deno.readFile(fos) : new TextEncoder().encode(fos),
);
c = crcN.finalize(c);
console.log(`0x${c.toString(16)}`);
