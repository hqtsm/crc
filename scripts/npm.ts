// deno-lint-ignore-file no-top-level-await no-console

import { build, emptyDir } from '@deno/dnt';

import denoJson from '../deno.json' with { type: 'json' };

if (Deno.args.length !== 1 || !/^(dev|prod)$/.test(Deno.args[0])) {
	console.error('Args: dev|prod');
	Deno.exit(1);
}

const [env] = Deno.args;
const GITHUB_REPOSITORY = Deno.env.get('GITHUB_REPOSITORY');
const [description] = (await Deno.readTextFile('README.md'))
	.split(/[\r\n]+/)
	.filter((s) => /^\w/.test(s));

await emptyDir('./npm');
await build({
	test: env === 'dev',
	importMap: 'deno.json',
	entryPoints: Object.entries(denoJson.exports)
		.map(([name, path]) => name === '.' ? path : { name, path }),
	outDir: './npm',
	shims: {
		deno: env === 'dev' ? 'dev' : false,
	},
	package: {
		name: denoJson.name,
		version: denoJson.version,
		description,
		license: denoJson.license,
		sideEffects: false,
		...(env !== 'prod' ? { private: true } : {}),
		...(GITHUB_REPOSITORY
			? {
				repository: {
					type: 'git',
					url: `git+https://github.com/${GITHUB_REPOSITORY}.git`,
				},
				bugs: {
					url: `https://github.com/${GITHUB_REPOSITORY}/issues`,
				},
			}
			: {}),
	},
	typeCheck: 'both',
	compilerOptions: {
		lib: ['ESNext'],
		sourceMap: true,
	},
	async postBuild(): Promise<void> {
		await Promise.all([
			Deno.copyFile('LICENSE.txt', 'npm/LICENSE.txt'),
			Deno.copyFile('README.md', 'npm/README.md'),
			Deno.writeTextFile(
				'npm/.npmignore',
				[
					'.*',
					'ehthumbs.db',
					'Thumbs.db',
					'node_modules',
					'package-lock.json',
					'',
				].join('\n'),
			),
		]);
	},
});