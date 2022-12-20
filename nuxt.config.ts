export default defineNuxtConfig({
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
		locales: [
			{ code: 'en-US', iso: 'en-US', name: 'English', file: 'en-US.js' },
			{ code: 'ja-JP', iso: 'ja-JP', name: 'Japanese', file: 'ja-JP.js' },
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
