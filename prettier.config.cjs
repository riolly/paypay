module.exports = {
	trailingComma: 'es5',
	useTabs: true,
	tabWidth: 2,
	semi: false,
	singleQuote: true,
	bracketSpacing: false,
	jsxSingleQuote: true,
	plugins: [require('prettier-plugin-tailwindcss')],
	tailwindConfig: './tailwind.config.cjs',
	overrides: [
		{
			files: ['.*', '*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
		{
			files: ['**/*.astro'],
			options: {
				parser: 'astro',
			},
		},
	],
}
