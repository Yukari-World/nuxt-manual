// import randomWord from './static/json/randomWord.json';
// import axios from 'axios';
import shrinkRay from 'shrink-ray-current';
import ja from 'vuetify/es5/locale/ja';
import en from 'vuetify/es5/locale/en';
require('dotenv').config();

export default {
	mode: 'universal',
	env: {
		baseUrl: process.env.BASE_URL || 'https://nuxt-technical-manual.netlify.com/',
	},
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_description || 'Nuxt Technical Manual v0.2.0',
		meta: [
			{ charset: 'utf-8' },
			{
				hid: 'description',
				name: 'description',
				content: 'Nuxtで纏められた主にHTML技術関連のマニュアルページ',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'theme-color',
				name: 'theme-color',
				content: '#000011',
			},
			{
				hid: 'color-scheme',
				name: 'color-scheme',
				content: 'dark light',
			},
		],
		link: [
			{ rel: 'preload', as: 'style', type: 'text/css', href: '/css/prismTomorrowNight.css' },
			{ rel: 'preload', as: 'style', type: 'text/css', href: '/css/prism.css' },
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', type: 'text/css', href: '/css/prismTomorrowNight.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/css/prism.css', media: 'print, (prefers-color-scheme: light)' },
		],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#FFCC66' },
	/*
	 ** Customize Vuetify theme
	 */
	vuetify: {
		lang: {
			locale: {en, ja},
			current: 'ja',
		},
		theme: {
			dark: true,
			primary: '#3F51B5',
			secondary: '#2196F3',
		},
		treeShake: true,
	},
	/*
	 ** Global CSS
	 */
	css: [
		'codemirror/lib/codemirror.css',
		'codemirror/theme/material.css',
		'codemirror/theme/tomorrow-night-eighties.css',
	],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		// '~/plugins/auth',
		{ src: '~plugins/codemirror', ssr: false },
		// '~plugins/firebase',
		// '~/plugins/globals.js',
		// '~/plugins/vue-scrollto',
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		'@nuxtjs/stylelint-module',
		'@nuxtjs/vuetify',
		// '@nuxt/typescript-build',
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'@nuxtjs/dotenv',
		'@nuxtjs/pwa',
		'@nuxtjs/style-resources',
		'nuxt-i18n',
		'nuxt-purgecss',
		['vue-scrollto/nuxt', { duration: 300 }],
		'@nuxtjs/sitemap',
	],
	router: {
		middleware: 'index',
	},
	sitemap: {
		path: '/sitemap.xml',
		hostname: process.env.BASE_URL || 'https://nuxt-technical-manual.netlify.com/',
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, {isDev, isClient}) {
		},
		babel: {
			babelrc: false,
			cacheDirectory: undefined,
			presets: ['@nuxt/babel-preset-app'],
			plugins: [
				[
					'prismjs',
					{
						// languages: [
						// ],
						plugins: [
							'autolinker',
							'autoloader',
							'command-line',
							'copy-to-clipboard',
							'custom-class',
							'data-uri-highlight',
							'file-highlight',
							'highlight-keywords',
							'inline-color',
							'line-highlight',
							'line-numbers',
							'show-language',
							'toolbar',
							'wpd',
						],
						theme: 'tomorrow',
						css: false,
					},
				],
			],
		},
		extractCSS: false,
		filenames: {
			app({ isDev }) {
				isDev ? '[name].js' : '[name].[contenthash:7].js';
			},
		},
		optimization: {
			splitChunks: {
				automaticNameMaxLength: 128,
				cacheGroups: {
					clusterJs: {
						name: 'cluster.js',
						test: /[\\/]node_modules[\\/]/,
						chunks: 'all',
						minChunks: 3,
						minSize: 1,
						enforce: true,
					},
					clusterStyles: {
						name: 'cluster.styles',
						test: /\.s?(a|c)ss$/,
						chunks: 'all',
						minSize: 1,
						enforce: true,
					},
				},
			},
			runtimeChunk: true,
		},
		postcss: {
			plugins: {
				'postcss-import': {},
				'postcss-url': {},
				'postcss-preset-env': this.preset,
				'css-mqpacker': {},
				cssnano: { preset: 'default' },
			},
			order: 'presetEnvAndCssnanoLast',
			preset: {
				stage: 2,
			},
		},
		splitChunks: {
			layouts: true,
			pages: true,
			commons: true,
		},
	},
	i18n: {
		defaultLocale: 'ja-JP',
		langDir: 'locales/',
		locales: [
			{ code: 'en-US', iso: 'en-US', name: 'English', file: 'en-US.js' },
			{ code: 'ja-JP', iso: 'ja-JP', name: 'Japanese', file: 'ja-JP.js' },
		],
		lazy: true,
		strategy: 'prefix_except_default',
		vueI18n: {},
		vueI18nLoader: true,
		vuex: {
			syncLocale: true,
		},
	},
	/*
	 ** PWA configuration
	 */
	pwa: {
		manifest: {
			author: 'Yukari-World',
			background_color: '#000011',
			default_locale: 'ja',
			description: 'Nuxtで纏められた主にHTML技術関連のマニュアルページ',
			display: 'standalone',
			homepage_url: 'https://github.com/Yukari-World/nuxt-manual',
			lang: 'ja',
			manifest_version: 2,
			name: 'Nuxt Technical Manual',
			short_name: 'Nuxt Manual',
			start_url: './',
			theme_color: '#000011',
			version: '1.0.0.0',
		},
		workbox: {
			clientsClaim: true,
			offline: true,
			skipWaiting: true,
			runtimeCaching: [
				{
					urlPattern: '/_nuxt/.*.(js)$',
					handler: 'StaleWhileRevalidate',
					method: 'GET',
					strategyOptions: {
						cacheName: 'entry-cache',
						cacheExpiration: {
							maxAgeSeconds: 60 * 60 * 24 * 14, // 14日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				},
				{
					urlPattern: '/img/.*.(png|jpg|webp)$',
					handler: 'cacheFirst',
					method: 'GET',
					strategyOptions: {
						cacheName: 'image-cache',
						cacheExpiration: {
							maxAgeSeconds: 60 * 60 * 24 * 30, // 30日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				},
				{
					urlPattern: '^https://cdn.jsdelivr.net/',
					handler: 'cacheFirst',
					method: 'GET',
					strategyOptions: {
						cacheName: 'jsdelivr-cache',
						cacheExpiration: {
							maxAgeSeconds: 60 * 60 * 24 * 30, // 30日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				},
				{
					urlPattern: '^https://fonts.googleapis.com/',
					handler: 'cacheFirst',
					method: 'GET',
					strategyOptions: {
						cacheName: 'google-fonts-cache',
						cacheExpiration: {
							maxAgeSeconds: 60 * 60 * 24 * 30, // 30日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				},
				{
					urlPattern: '^https://fonts.gstatic.com/',
					handler: 'cacheFirst',
					method: 'GET',
					strategyOptions: {
						cacheName: 'gstatic-fonts-cache',
						cacheExpiration: {
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
	/*
	 ** purgeCSS configuration
	 */
	purgeCSS: {
		enabled: ({ isDev, isClient }) => !isDev && isClient, // or `false` when in dev/debug mode
		paths: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
		],
		styleExtensions: ['.css'],
		whitelist: ['body', 'html', 'nuxt-progress'],
		extractors: [
			{
				extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
				extensions: ['html', 'vue', 'js'],
			},
		],
	},
	/*
	 ** Server configuration
	 */
	server: {
		port: process.env.PORT || 8080,
	},
	/*
	 ** Render configuration
	 */
	render: {
		compressor: shrinkRay(),
	},
	// generate: {
	// 	routes () {
	// 		return axios.get('~/assets/json/randomWord.json')
	// 			.then((response) => {
	// 				response.items.map((_item, index) => {
	// 					return `randomWord/${index+1}`;
	// 				});
	// 			})
	// 			.catch(function(error) {
	// 				console.error(error);
	// 			});
	// 	},
	// },
};
