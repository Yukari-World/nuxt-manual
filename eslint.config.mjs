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
		'vue/html-closing-bracket-newline': 'off', // ESLint Crash with pug
		'vue/html-closing-bracket-spacing': 'off', // ESLint Crash with pug
		'vue/html-end-tags': 'off', // wrong lint with pug
		'vue/html-indent': 'off', // wrong lint with pug
		'vue/html-self-closing': 'off', // wrong lint with pug
		'vue/max-attributes-per-line': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/no-v-text-v-html-on-component': 'off',
		'vue/singleline-html-element-content-newline': 'off',
	},
}).override('nuxt/vue/single-root', {
	rules: {
		'vue/no-multiple-template-root': 'off', // wrong lint with pug
	},
}).override('nuxt/stylistic', {
	rules: {
		'@stylistic/brace-style': ['warn', '1tbs'],
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
		'@stylistic/operator-linebreak': ['warn', 'after'],
		'@stylistic/space-before-function-paren': ['off', {
			anonymous: 'never',
			asyncArrow: 'never',
			named: 'never',
		}],
	},
});
