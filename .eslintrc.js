module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'@nuxtjs',
		'prettier',
		'prettier/vue',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended'
	],
	plugins: [
		'prettier'
	],
	// add your custom rules here
	rules: {
		"func-style": ["error", "declaration", { "allowArrowFunctions": false }],
		"indent": ["warn", "tab"],
		"no-console": "off",
		"no-tabs": ["off", { allowIndentationTabs: true }],
		"prettier/prettier": "off",
		"semi": ["error", "always"]
	}
}
