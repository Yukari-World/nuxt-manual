module.exports = {
	extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order'],
	// add your custom config here
	// https://stylelint.io/user-guide/configuration
	plugins: [
		'stylelint-order',
		'stylelint-scss',
		'stylelint-stylistic',
	],
	overrides: [
		{
			files: ['*.vue', '**/*.vue'],
			customSyntax: 'postcss-html',
		},
	],
	rules: {
		'at-rule-no-unknown': null,
		'block-no-empty': null,
		'color-hex-length': 'long',
		'color-no-invalid-hex': true,
		'font-family-name-quotes': 'always-unless-keyword',
		'font-family-no-duplicate-names': true,
		'function-calc-no-unspaced-operator': true,
		'length-zero-no-unit': true,
		'no-descending-specificity': null,
		'property-no-vendor-prefix': null,
		'rule-empty-line-before': ['always', {
			except: [
				'first-nested',
			],
			ignore: [
				'after-comment',
			],
		}],
		'order/order': [
			[
				{ type: 'at-rule', name: 'extend' },
				'custom-properties',
				'dollar-variables',
				'declarations',
				{ type: 'at-rule', name: 'supports', hasBlock: true },
				{ type: 'at-rule', name: 'import', hasBlock: true },
				{ type: 'at-rule', name: 'include', hasBlock: true },
				'rules',
				'at-rules',
			],
			{ severity: 'warning' },
		],
		'scss/at-function-parentheses-space-before': 'always',
		'scss/at-rule-no-unknown': true,
		'scss/comment-no-empty': null,
		'scss/double-slash-comment-empty-line-before': null,
		'scss/double-slash-comment-whitespace-inside': 'always',
		'stylistic/block-closing-brace-empty-line-before': 'never',
		'stylistic/block-closing-brace-newline-after': 'always',
		'stylistic/block-closing-brace-newline-before': 'always',
		'stylistic/block-opening-brace-newline-after': 'always',
		'stylistic/block-opening-brace-space-before': 'always',
		'stylistic/color-hex-case': 'upper',
		'stylistic/declaration-block-semicolon-newline-after': 'always',
		'stylistic/declaration-block-semicolon-space-before': 'never',
		'stylistic/declaration-colon-space-after': 'always',
		'stylistic/declaration-colon-space-before': 'never',
		'stylistic/function-comma-space-after': 'always',
		'stylistic/indentation': ['tab', {
			indentInsideParens: 'twice',
			except: [
				'value',
			],
		}],
		'stylistic/max-empty-lines': 1,
		'stylistic/number-no-trailing-zeros': true,
		'stylistic/selector-list-comma-newline-after': 'always-multi-line',
		'stylistic/selector-list-comma-space-after': 'always',
		'stylistic/string-quotes': 'double',
		'stylistic/unit-case': 'lower',
		'stylistic/value-list-comma-space-after': 'always',
	},
};
