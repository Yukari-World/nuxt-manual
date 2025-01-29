import stylelint from 'vite-plugin-stylelint';

export default defineNuxtConfig({
	// ----------------------------------------------------------------------------------------------------
	// Module list and configuration

	modules: [
		'@nuxt/eslint',
		'@nuxtjs/i18n',
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
		'@pinia/nuxt',
		'@vite-pwa/nuxt',
		'@vueuse/nuxt',
		'nuxt-link-checker',
		// 'nuxt-purgecss',
	],

	ssr: false,


	// ----------------------------------------------------------------------------------------------------
	// Development tools configuration

	devtools: {
		componentInspector: false,

		timeline: {
			enabled: true,
		},
	},


	// ----------------------------------------------------------------------------------------------------
	// Application configuration

	app: {
		baseURL: '/',
		head: {
			titleTemplate: '%s | Nuxt Technical Manual v0.5.0',
			meta: [
				{ charset: 'utf-8' },
				{ hid: 'description', name: 'description', content: 'Nuxtで纏められた主にHTML技術関連のマニュアルページ' },
				{ hid: 'theme-color', name: 'theme-color', content: '#000011' },
				{ hid: 'color-scheme', name: 'color-scheme', content: 'dark light' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			],
		},
	},


	// ----------------------------------------------------------------------------------------------------
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
	// Build configuration

	build: {
		transpile: ['vuetify'],
	},


	// ----------------------------------------------------------------------------------------------------
	// Development server configuration

	devServer: {
		host: process.env.host || '0.0.0.0',
		port: Number(process.env.port) || 3000,
	},

	future: {
		compatibilityVersion: 4,
	},

	compatibilityDate: '2025-01-28',


	// ----------------------------------------------------------------------------------------------------
	// Vite configuration

	vite: {
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
	},


	// ----------------------------------------------------------------------------------------------------
	// postcss configuration

	postcss: {
		plugins: {
			autoprefixer: {},
			cssnano: {},
		},
	},


	// ----------------------------------------------------------------------------------------------------
	// eslint configuration

	eslint: {
		checker: true,
	},


	// ----------------------------------------------------------------------------------------------------
	// i18n configuration

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
			{ code: 'en-US', language: 'en-US', name: 'English', files: ['en.yaml', 'en-US.yaml'] },
			{ code: 'ja-JP', language: 'ja-JP', name: 'Japanese', files: ['ja.yaml', 'ja-JP.yaml'] },
		],
		strategy: 'prefix_except_default',
	},


	// ----------------------------------------------------------------------------------------------------
	// PWA configuration

	pwa: {
		// devOptions: {
		// 	enabled: true,
		// },
		manifest: {
			background_color: '#000011',
			description: 'Nuxtで纏められた主にHTML技術関連のマニュアルページ',
			display: 'standalone',
			lang: 'ja',
			name: 'Nuxt Technical Manual',
			short_name: 'Nuxt Manual',
			start_url: '/',
			theme_color: '#000011',
		},
		// registerType: 'autoUpdate',
		workbox: {
			cleanupOutdatedCaches: true,
			clientsClaim: true,
			globPatterns: ['**/*.{css,html,ico,js,json,png,svg}'],
			// globPatterns: [],
			skipWaiting: true,
			runtimeCaching: [
				{
					urlPattern: '/_nuxt\/.+\.js$/', // eslint-disable-line
					handler: 'StaleWhileRevalidate',
					method: 'GET',
					options: {
						cacheName: 'entry-cache',
						expiration: {
							maxAgeSeconds: 60 * 60 * 24 * 14, // 14日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				}, {
					urlPattern: '/.+\.(css|eot|json|ttf|woff|woff2)$/', // eslint-disable-line
					handler: 'StaleWhileRevalidate',
					method: 'GET',
					options: {
						cacheName: 'static-cache',
						expiration: {
							maxAgeSeconds: 60 * 60 * 24 * 14, // 14日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				}, {
					urlPattern: '/.+\.(gif|jpeg|jpg|png|webp)$/', // eslint-disable-line
					handler: 'CacheFirst',
					method: 'GET',
					options: {
						cacheName: 'image-cache',
						expiration: {
							maxAgeSeconds: 60 * 60 * 24 * 30, // 30日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				},
			],
		},
	},
});
