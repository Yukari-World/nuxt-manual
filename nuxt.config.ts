import stylelint from 'vite-plugin-stylelint';

export default defineNuxtConfig({
	ssr: false,

	app: {
		baseURL: '/',
		head: {
			titleTemplate: '%s | Nuxt Technical Manual v0.4.2',
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
		'@/assets/scss/style.scss',
		'vuetify/lib/styles/main.sass',
		'prismjs/themes/prism-tomorrow.css',
		'prismjs/plugins/toolbar/prism-toolbar.css',
		'prismjs/plugins/line-highlight/prism-line-highlight.css',
		'prismjs/plugins/line-numbers/prism-line-numbers.css',
	],

	// ----------------------------------------------------------------------------------------------------
	// Module list and configuration

	modules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/i18n',
		'@pinia/nuxt',
		'@vite-pwa/nuxt',
		// 'nuxt-purgecss',
	],

	i18n: {
		defaultLocale: 'ja-JP',
		detectBrowserLanguage: {
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
			useCookie: true,
			cookieSecure: true,
		},
		langDir: 'locales/',
		lazy: true,
		locales: [
			{ code: 'en-US', iso: 'en-US', name: 'English', files: [ 'en.json', 'en-US.json' ] },
			{ code: 'ja-JP', iso: 'ja-JP', name: 'Japanese', files: [ 'ja.json', 'ja-JP.json' ] },
		],
		strategy: 'prefix_except_default',
	},

	pwa: {
		manifest: {
			background_color: '#000011',
			description: 'Nuxtで纏められた主にHTML技術関連のマニュアルページ',
			display: 'standalone',
			lang: 'ja',
			name: 'Nuxt Technical Manual',
			short_name: 'Nuxt Manual',
			start_url: process.env.BASE_URL || 'https://nuxt-technical-manual.netlify.app/',
			theme_color: '#000011',
		},
		workbox: {
			clientsClaim: true,
			skipWaiting: true,
			cleanupOutdatedCaches: true,
			runtimeCaching: [
				{
					urlPattern: '/_nuxt/.*.(js)$',
					handler: 'StaleWhileRevalidate',
					method: 'GET',
					options: {
						cacheName: 'entry-cache',
						expiration: {
							maxAgeSeconds: 60 * 60 * 24 * 14, // 14日
						},
						cacheableResponse: {
							statuses: [ 0, 200 ],
						},
					},
				}, {
					urlPattern: '/_nuxt/.*.(css)$',
					handler: 'StaleWhileRevalidate',
					method: 'GET',
					options: {
						cacheName: 'style-cache',
						expiration: {
							maxAgeSeconds: 60 * 60 * 24 * 14, // 14日
						},
						cacheableResponse: {
							statuses: [ 0, 200 ],
						},
					},
				}, {
					urlPattern: '/img/.*.(gif|jpeg|jpg|png|webp)$',
					handler: 'CacheFirst',
					method: 'GET',
					options: {
						cacheName: 'image-cache',
						expiration: {
							maxAgeSeconds: 60 * 60 * 24 * 30, // 30日
						},
						cacheableResponse: {
							statuses: [ 0, 200 ],
						},
					},
				},
			],
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
		plugins: [
			stylelint({
				fix: true,
				include: [
					'assets/**/*.{css,less,scss,sass,vue}',
					'components/**/*.{css,less,scss,sass,vue}',
					// 'content/**/*.{css,less,scss,sass,vue}',
					'layouts/**/*.{css,less,scss,sass,vue}',
					'pages/**/*.{css,less,scss,sass,vue}',
					'server/**/*.{css,less,scss,sass,vue}',
					// 'src/**/*.{css,less,scss,sass,vue}',
					// 'styles/**/*.{css,less,scss,sass,vue}',
					'app.vue',
					// 'error.vue',
					// 'Error.vue',
				],
			}),
		],
		server: {
			watch: {
				usePolling: true,
			},
		},
	},
});
