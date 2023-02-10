export default defineNuxtConfig({
	ssr: false,

	app: {
		head: {
			meta: [
				{ charset: 'utf-8' },
				{ hid: 'description', name: 'description', content: 'Nuxtで纏められた主にHTML技術関連のマニュアルページ' },
				{ hid: 'theme-color', name: 'theme-color', content: '#000011' },
				{ hid: 'color-scheme', name: 'color-scheme', content: 'dark light' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			],
		},
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		// 'codemirror/lib/codemirror.css',
		// 'codemirror/theme/material.css',
		// 'codemirror/theme/tomorrow-night-eighties.css',
		// 'vuetify/lib/styles/main.sass',
		'@/assets/css/prismTomorrowNight.css',
	],

	// ----------------------------------------------------------------------------------------------------
	// Module list and configuration

	modules: [
		'@nuxtjs/i18n',
		'@pinia/nuxt',
		'nuxt-purgecss',
	],

	i18n: {
		defaultLocale: 'ja-JP',
		langDir: 'locales/',
		lazy: true,
		locales: [
			{ code: 'en-US', iso: 'en-US', name: 'English', files: [ 'en.yaml', 'en-US.yaml' ] },
			{ code: 'ja-JP', iso: 'ja-JP', name: 'Japanese', files: [ 'ja.yaml', 'ja-JP.yaml' ] },
		],
		vueI18n: {
			legacy: false,
			locale: 'ja-JP',
			fallbackLocale: 'ja-JP',
		},
	},

	// ----------------------------------------------------------------------------------------------------
	// Build configuration

	build: {
		transpile: [ 'vuetify' ],
	},

	// ----------------------------------------------------------------------------------------------------
	// Vite configuration

	vite: {
		define: {
			'process.env.DEBUG': false,
		},
		server: {
			watch: {
				usePolling: true,
			},
		},
	},
});
