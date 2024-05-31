import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import vuePug from 'eslint-plugin-vue-pug';

export default createConfigForNuxt({
	features: {
		stylistic: {
			commaDangle: 'always-multiline',
			indent: 'tab',
			quotes: 'single',
			semi: true,
		},
		tooling: true,
	},
}).override('nuxt/vue/setup', {
	plugins: {
		vuePug,
	},
}).override('nuxt/vue/rules', {
	languageOptions: {
		parserOptions: {
			templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug' },
		},
	},
	rules: {
		// base
		'vue/component-name-in-template-casing': 'off',
		'vue/html-self-closing': 'off',
		'vue/html-end-tags': 'off',
		'vue/html-indent': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/no-v-text-v-html-on-component': 'off',
		'vue/singleline-html-element-content-newline': 'off',
	},
}).override('nuxt/stylistic', {
	rules: {
		'@stylistic/member-delimiter-style': ['warn', {
			multiline: {
				delimiter: 'comma',
				requireLast: true,
			},
			singleline: {
				delimiter: 'comma',
				requireLast: false,
			},
			multilineDetection: 'brackets',
		}],
		'@stylistic/no-multiple-empty-lines': ['warn', { max: 2 }],
		'@stylistic/space-before-function-paren': ['off', {
			anonymous: 'never',
			asyncArrow: 'never',
			named: 'never',
		}],
	},
});
