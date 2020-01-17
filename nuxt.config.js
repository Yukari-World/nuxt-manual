import shrinkRay from 'shrink-ray-current';
require('dotenv').config();

export default {
	mode:   'universal',
	render: {
		compressor: shrinkRay()
	},
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_description || '',
		meta:  [
			{ charset: 'utf-8' },
			{
				hid:     'description',
				name:    'description',
				content: 'Nuxtで纏められた主にHTML技術関連のマニュアルページ'
			},
			{
				name:    'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid:     'theme-color',
				name:    'theme-color',
				content: '#000011'
			},
			{
				hid:     'color-scheme',
				name:    'color-scheme',
				content: 'dark light'
			}
		],
		link: [
			{ rel: 'preload', as: 'style', type: 'text/css', href: '/css/prismTomorrowNight.css' },
			{ rel: 'preload', as: 'style', type: 'text/css', href: '/css/prism.css' },
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', type: 'text/css', href: '/css/prismTomorrowNight.css' },
			{
				rel:   'stylesheet',
				type:  'text/css',
				href:  '/css/prism.css',
				media: 'print, (prefers-color-scheme: light)'
			}
		]
	},
	env: {
		baseUrl: process.env.BASE_URL || 'https://nuxt-technical-manual.netlify.com/'
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#FFCC66' },
	/*
	 ** Customize Vuetify theme
	 */
	vuetify: {
		theme: {
			dark:      true,
			primary:   '#3f51b5',
			secondary: '#2196f3'
		}
	},
	/*
	 ** Global CSS
	 */
	// css: ['@/assets/sass/style.scss'],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		// '~/plugins/globals.js'
		// '~/plugins/vue-scrollto'
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		'@nuxtjs/stylelint-module'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'@nuxtjs/dotenv',
		'@nuxtjs/pwa',
		'@nuxtjs/sitemap',
		'@nuxtjs/vuetify',
		['vue-scrollto/nuxt', { duration: 300 }]
	],
	router: {
		middleware: 'index'
	},
	sitemap: {
		path:     '/sitemap.xml',
		hostname: process.env.BASE_URL || 'https://nuxt-technical-manual.netlify.com/'
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			config.module.rules.push({
				test:    /\.json$/i,
				loader:  'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
			});
		},
		babel: {
			babelrc:        false,
			cacheDirectory: undefined,
			presets:        ['@nuxt/babel-preset-app'],
			plugins:        [
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
							'line-highlight',
							'line-numbers',
							'show-language',
							'toolbar',
							'wpd'
						],
						theme: 'tomorrow',
						css:   false
					}
				]
			]
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendor: {
						chunks:  'initial',
						name:    'vendor',
						test:    'vendor',
						enforce: true
					}
				}
			},
			runtimeChunk: true
		}
	},
	/*
	 ** PWA configuration
	 */
	pwa: {
		manifest: {
			author:           'Yukari-World',
			background_color: '#000011',
			default_locale:   'ja',
			display:          'standalone',
			homepage_url:     'https://github.com/Yukari-World/nuxt-manual',
			manifest_version: 2,
			name:             'HTML Technical Manual',
			short_name:       'HTML Manual',
			start_url:        process.env.BASE_URL || 'https://nuxt-technical-manual.netlify.com/',
			theme_color:      '#000011',
			version:          '1.0.0.0',
		},
		workbox: {
			clientsClaim:   true,
			offline:        true,
			skipWaiting:    true,
			runtimeCaching: [
				{
					urlPattern:      '^' + (process.env.BASE_URL || 'https://nuxt-technical-manual.netlify.com/') + 'img/.*.(png|jpg|webp)$',
					cacheName:       'image-cache',
					handler:         'cacheFirst',
					method:          'GET',
					strategyOptions: {
						cacheExpiration: {
							maxAgeSeconds: 60 * 60 * 24 * 30, // 30日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				}, {
					urlPattern:      '^https://cdn.jsdelivr.net/',
					cacheName:       'jsdelivr-cache',
					handler:         'cacheFirst',
					method:          'GET',
					strategyOptions: {
						cacheExpiration: {
							maxAgeSeconds: 60 * 60 * 24 * 30, // 30日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				}, {
					urlPattern:      '^https://fonts.googleapis.com/',
					cacheName:       'google-fonts-cache',
					handler:         'cacheFirst',
					method:          'GET',
					strategyOptions: {
						cacheExpiration: {
							maxAgeSeconds: 60 * 60 * 24 * 30, // 30日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				}, {
					urlPattern:      '^https://fonts.gstatic.com/',
					cacheName:       'gstatic-fonts-cache',
					handler:         'cacheFirst',
					method:          'GET',
					strategyOptions: {
						cacheExpiration: {
							maxAgeSeconds: 60 * 60 * 24 * 30, // 30日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				},
			]
		}
	},
	/*
	 ** Server configuration
	 */
	server: {
		port: 8080
	}
};
