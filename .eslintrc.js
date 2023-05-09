module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		// parser: 'babel-eslint',
		sourceType: 'module',
	},
	extends: [
		// '@nuxtjs',
		'prettier',
		'plugin:prettier/recommended',
		'@nuxt/eslint-config',
	],
	plugins: [
		'prettier',
	],
	// add your custom rules here
	rules: {

		'array-bracket-spacing': [ 'warn', 'always', { objectsInArrays: false }],
		'comma-spacing': [ 'error', {
			before: false,
			after: true,
		}],
		'comma-dangle': [ 'error', 'always-multiline' ],
		'curly': 'warn',
		'eol-last': [ 'warn', 'always' ],
		'func-style': [ 'error', 'declaration', { allowArrowFunctions: false }],
		'indent': [ 'warn', 'tab' ],
		'key-spacing': [ 'warn', {
			singleLine: {
				beforeColon: false,
				afterColon: true,
			},
			multiLine: {
				beforeColon: false,
				afterColon: true,
			},
		}],
		'keyword-spacing': [ 'warn', {
			before: true,
			after: true,
		}],
		'new-parens': 'error',
		'newline-per-chained-call': [ 'warn', { ignoreChainWithDepth: 4 }],
		'no-console': 'off',
		'no-confusing-arrow': 'error',
		'no-debugger': 'warn',
		'no-duplicate-imports': [ 'error', { includeExports: true }],
		'no-else-return': 'warn',
		'no-extra-semi': 'warn',
		'no-extra-parens': [ 'warn', 'all', { nestedBinaryExpressions: false }],
		'no-floating-decimal': 'error',
		'no-mixed-spaces-and-tabs': 'off',
		'no-multi-assign': 'error',
		'no-multi-spaces': [ 'warn', { ignoreEOLComments: false }],
		'no-multiple-empty-lines': [ 'error', { max: 2 }],
		'no-nested-ternary': 'error',
		'no-new-func': 'error',
		'no-param-reassign': [ 'error', { props: false }],
		'no-tabs': [ 'off', { allowIndentationTabs: true }],
		'no-unused-expressions': 'off',
		'no-useless-rename': 'error',
		'object-curly-spacing': [ 'warn', 'always' ],
		'operator-linebreak': [ 'error', 'after' ],
		'padded-blocks': [ 'off', 'never' ],
		'prefer-const': 'error',
		'prefer-exponentiation-operator': 'error',
		'prettier/prettier': 'off',
		'quote-props': [ 'warn', 'consistent-as-needed' ],
		'quotes': [ 'error', 'single' ],
		'rest-spread-spacing': [ 'warn', 'never' ],
		'semi': [ 'error', 'always' ],
		'semi-spacing': 'error',
		'semi-style': [ 'error', 'last' ],
		'space-before-blocks': 'warn',
		'space-before-function-paren': [ 'warn', 'never' ],
		'space-in-parens': [ 'warn', 'never' ],
		'space-infix-ops': 'error',
		'spaced-comment': [ 'error', 'always' ],
		'template-curly-spacing': [ 'warn', 'always' ],
		'yield-star-spacing': [ 'error', 'before' ],
		'import/no-named-as-default-member': 'off',
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
	},
};
