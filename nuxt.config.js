import shrinkRay from 'shrink-ray-current';
// import CsscombPlugin from 'csscomb-webpack-plugin';
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
		lang: {
			locale:  ['ja'],
			current: 'ja',
		},
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
		'~/plugins/firebase'
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
		'@nuxtjs/style-resources',
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
					name ({ isDev }) { isDev ? '[name].js' : '[path][hash].[ext]';}
				}
			});
			// config.plugins.push(new CsscombPlugin({
			// 	configFile: './.csscomb.json',
			// 	files:      [
			// 		'**/*.vue',
			//		 '**/*.s?(a|c)ss$',
			// 	],
			// }));
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
		extractCSS: false,
		filenames:  {
			app ({ isDev }) { isDev ? '[name].js' : '[name].[chunkhash].js';}
		},
		optimization: {
			splitChunks: {
				automaticNameMaxLength: 128,
				cacheGroups:            {
					clusterJs: {
						name:      'cluster.js',
						test:      /[\\/]node_modules[\\/]/,
						chunks:    'all',
						minChunks: 3,
						minSize:   1,
						enforce:   true,
					},
					clusterStyles: {
						name:    'cluster.styles',
						test:    /\.s?(a|c)ss$/,
						chunks:  'all',
						minSize: 1,
						enforce: true
					}
				}
			},
			runtimeChunk: true
		},
		postcss: {
			plugins: {
				'postcss-import':     {},
				'postcss-url':        {},
				'postcss-preset-env': this.preset,
				'css-mqpacker':       {},
				'cssnano':            { preset: 'default' },
			},
			order:  'presetEnvAndCssnanoLast',
			preset: {
				stage: 2
			}
		},
		splitChunks: {
			layouts: false,
			pages:   true,
			commons: true
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
			description:      'Nuxtで纏められた主にHTML技術関連のマニュアルページ',
			display:          'standalone',
			homepage_url:     'https://github.com/Yukari-World/nuxt-manual',
			lang:             'ja',
			manifest_version: 2,
			name:             'Nuxt Technical Manual',
			short_name:       'Nuxt Manual',
			start_url:        './',
			theme_color:      '#000011',
			version:          '1.0.0.0',
		},
		workbox: {
			clientsClaim:   true,
			offline:        true,
			skipWaiting:    true,
			runtimeCaching: [
				{
					urlPattern:      '/_nuxt/.*.(js)$',
					handler:         'StaleWhileRevalidate',
					method:          'GET',
					strategyOptions: {
						cacheName:       'entry-cache',
						cacheExpiration: {
							maxAgeSeconds: 60 * 60 * 24 * 14, // 14日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				}, {
					urlPattern:      '/img/.*.(png|jpg|webp)$',
					handler:         'cacheFirst',
					method:          'GET',
					strategyOptions: {
						cacheName:       'image-cache',
						cacheExpiration: {
							maxAgeSeconds: 60 * 60 * 24 * 30, // 30日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				}, {
					urlPattern:      '^https://cdn.jsdelivr.net/',
					handler:         'cacheFirst',
					method:          'GET',
					strategyOptions: {
						cacheName:       'jsdelivr-cache',
						cacheExpiration: {
							maxAgeSeconds: 60 * 60 * 24 * 30, // 30日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				}, {
					urlPattern:      '^https://fonts.googleapis.com/',
					handler:         'cacheFirst',
					method:          'GET',
					strategyOptions: {
						cacheName:       'google-fonts-cache',
						cacheExpiration: {
							maxAgeSeconds: 60 * 60 * 24 * 30, // 30日
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				}, {
					urlPattern:      '^https://fonts.gstatic.com/',
					handler:         'cacheFirst',
					method:          'GET',
					strategyOptions: {
						cacheName:       'gstatic-fonts-cache',
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
