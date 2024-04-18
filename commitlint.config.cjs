module.exports = {
	commitlint: {
		extends: ['@commitlint/config-conventional'],
	},
	rules: {
		'type-enum': [
			2,
			'always',
			['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'revert', 'chore'],
		],
	},
	types: [
		{ value: 'feat', emoji: ':sparkles:' },
		{ value: 'fix', emoji: ':bug:' },
		{ value: 'docs', emoji: ':memo:' },
		{ value: 'style', emoji: ':lipstick:' },
		{ value: 'refactor', emoji: ':recycle:' },
		{ value: 'perf', emoji: ':zap:' },
		{ value: 'test', emoji: ':white_check_mark:' },
		{
			value: 'build',
			emoji: ':package:',
		},
		{ value: 'ci', emoji: ':ferris_wheel:' },
		{ value: 'revert', emoji: ':rewind:' },
		{
			value: 'chore',
			emoji: ':hammer:',
		},
	],
	useEmoji: true,
}
