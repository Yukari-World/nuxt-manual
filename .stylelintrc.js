module.exports = {
	"extends": [
		"stylelint-config-recommended-scss",
		"stylelint-config-prettier",
		"stylelint-config-recess-order",
	],
	"plugins": [
		"stylelint-scss",
		"stylelint-order",
	],
	"overrides": [
		{
			"files": ["**/*.vue"],
			"customSyntax": "postcss-html",
		},
	],
	"rules": {
		"at-rule-no-unknown": null,
		"block-no-empty": null,
		"color-hex-case": "upper",
		"color-hex-length":"long",
		"color-no-invalid-hex": true,
		"font-family-name-quotes": "always-unless-keyword",
		"font-family-no-duplicate-names": true,
		"indentation": ["tab", {
			"indentInsideParens": "twice",
			"except": [
				"value",
			]
		}],
		"max-empty-lines": 1,
		"no-descending-specificity": null,
		"rule-empty-line-before": ["always", {
			"except": [
				"first-nested",
			],
			"ignore": [
				"after-comment",
			]
		}],
		"selector-list-comma-newline-after": "always-multi-line",
		"string-quotes": "double",
		"order/order": [
			[
				{
					"type": "at-rule",
					"name": "extend",
				},
				"custom-properties",
				"dollar-variables",
				"declarations",
				{
					"type": "at-rule",
					"name": "supports",
					"hasBlock": true,
				}, {
					"type": "at-rule",
					"name": "import",
					"hasBlock": true,
				}, {
					"type": "at-rule",
					"name": "include",
					"hasBlock": true,
				},
				"rules",
				"at-rules",
			],
			{ severity: 'warning' },
		],
		"scss/at-function-parentheses-space-before": "always",
		"scss/at-rule-no-unknown": true,
		"scss/double-slash-comment-whitespace-inside": "always",
	}
};
