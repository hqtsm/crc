// deno-lint-ignore-file no-top-level-await no-console

import { build, emptyDir } from '@deno/dnt';
import denoJson from '../deno.json' with { type: 'json' };

if (Deno.args.length !== 1 || !/^(dev|prod)$/.test(Deno.args[0])) {
	console.error('Args: dev|prod');
	Deno.exit(1);
}

const [env] = Deno.args;

const GITHUB_REPOSITORY = Deno.env.get('GITHUB_REPOSITORY');

const readme = (await Deno.readTextFile('README.md')).split(/[\r\n]+/);
const [description] = readme.filter((s) => /^\w/.test(s));
const keywords = readme.map((s) => s.match(/^\!\[(.*)\]\((.*)\)$/))
	.filter((m) => m && m[2].startsWith('https://img.shields.io/badge/'))
	.map((m) => m![1]);

const entryPoints = [];
let types: string | undefined;
let typed: { [s: string]: string[] } | null = null;
for (const [name, path] of Object.entries(denoJson.exports)) {
	const d = path.replace(/^(\.\/)?(.*)(\.[^.]+)$/i, './esm/$2.d$3');
	if (name === '.') {
		entryPoints.unshift(path);
		types = d;
	} else {
		entryPoints.push({ name, path });
		(typed ??= {})[name.replace(/^\.\//, '')] = [d];
	}
}

const outDir = './npm';

await emptyDir(outDir);

await build({
	test: env === 'dev',
	importMap: 'deno.json',
	entryPoints,
	outDir,
	shims: {
		deno: env === 'dev' ? 'dev' : false,
	},
	package: {
		name: denoJson.name,
		version: denoJson.version,
		description,
		keywords,
		license: denoJson.license,
		sideEffects: false,
		types,
		...(typed ? { typesVersions: { '*': typed } } : {}),
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
		target: 'Latest',
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
