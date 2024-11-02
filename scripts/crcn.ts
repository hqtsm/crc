// deno-lint-ignore-file no-console no-top-level-await

import { crc } from '../crc.ts';

if (Deno.args.length !== 8 || !/^[fs]$/.test(Deno.args[6])) {
	throw new Error(
		'Args: size poly reflectIn xorIn reflectOut xorOut f|s file|str',
	);
}
const [size, poly, reflectIn, xorIn, reflectOut, xorOut, fs, fos] = Deno.args;
const crcN = crc(
	+size,
	+`0x${poly}`,
	reflectIn !== '0',
	+`0x${xorIn}`,
	reflectOut !== '0',
	+`0x${xorOut}`,
);
let c = crcN.init();
c = crcN.update(
	c,
	fs === 'f' ? await Deno.readFile(fos) : new TextEncoder().encode(fos),
);
c = crcN.finalize(c);
console.log(`0x${c.toString(16)}`);