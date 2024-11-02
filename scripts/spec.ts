// deno-lint-ignore-file no-await-in-loop no-top-level-await no-console

export function* coverage(): Generator<{
	size: number;
	poly: bigint;
	reflectIn: boolean;
	xorIn: bigint;
	reflectOut: boolean;
	xorOut: bigint;
}> {
	const sizes = [
		...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		...[15, 16, 17],
		...[23, 24, 25],
		...[31, 32, 33],
		...[63, 64, 65],
	];
	for (const size of sizes) {
		const bits = (1n << BigInt(size)) - 1n;
		const polys = [...new Set([1n, bits / 2n, bits])].filter(Boolean);
		const xors = [0n, ...polys];
		const reflects = [true, false];
		for (const poly of polys) {
			for (const xorIn of xors) {
				for (const reflectIn of reflects) {
					for (const xorOut of xors) {
						for (const reflectOut of reflects) {
							yield {
								size,
								poly,
								reflectIn,
								xorIn,
								reflectOut,
								xorOut,
							};
						}
					}
				}
			}
		}
	}
}

if (Deno.args.length !== 2 || !/^[fs]$/.test(Deno.args[0])) {
	console.error('Args: f|s file_or_string');
	Deno.exit(1);
}

const [fs, fos] = Deno.args;
const dec = new TextDecoder();
console.log('export default `');
for (const cov of coverage()) {
	const command = new Deno.Command('pycrc', {
		args: [
			`--width=${cov.size}`,
			`--poly=0x${cov.poly.toString(16)}`,
			`--reflect-in=${+cov.reflectIn}`,
			`--xor-in=0x${cov.xorIn.toString(16)}`,
			`--reflect-out=${+cov.reflectOut}`,
			`--xor-out=0x${cov.xorOut.toString(16)}`,
			fs === 'f' ? `--check-file=${fos}` : `--check-string=${fos}`,
		],
	});
	const { code, stdout, stderr } = await command.output();
	if (code !== 0) {
		throw new Error(`${code}: ${dec.decode(stderr)}`);
	}
	const hash = dec.decode(stdout).trim();
	console.log([
		cov.size,
		cov.poly.toString(16),
		+cov.reflectIn,
		cov.xorIn.toString(16),
		+cov.reflectOut,
		cov.xorOut.toString(16),
		hash.replace(/^0x/, ''),
	].join(' '));
}
console.log('`;');
