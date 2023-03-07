module.exports = {
	extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order'],
	// add your custom config here
	// https://stylelint.io/user-guide/configuration
	plugins: [
		'stylelint-scss',
		'stylelint-order',
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
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always',
		'block-opening-brace-newline-after': 'always',
		'block-opening-brace-space-before': 'always',
		'color-hex-case': 'upper',
		'color-hex-length': 'long',
		'color-no-invalid-hex': true,
		'declaration-block-semicolon-newline-after': 'always',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-colon-space-after': 'always',
		'declaration-colon-space-before': 'never',
		'font-family-name-quotes': 'always-unless-keyword',
		'font-family-no-duplicate-names': true,
		'function-calc-no-unspaced-operator': true,
		'function-comma-space-after': 'always',
		'indentation': ['tab', {
			indentInsideParens: 'twice',
			except: [
				'value',
			],
		}],
		'length-zero-no-unit': true,
		'max-empty-lines': 1,
		'no-descending-specificity': null,
		'number-no-trailing-zeros': true,
		'property-no-vendor-prefix': null,
		'rule-empty-line-before': ['always', {
			except: [
				'first-nested',
			],
			ignore: [
				'after-comment',
			],
		}],
		'selector-list-comma-newline-after': 'always-multi-line',
		'selector-list-comma-space-after': 'always',
		'string-quotes': 'double',
		'unit-case': 'lower',
		'value-list-comma-space-after': 'always',
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
	},
};
