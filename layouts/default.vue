<template lang="pug">
v-app#inspire
	//- サイドバー
	//- 内部処理はサイドバーコンポーネント参照
	v-navigation-drawer(v-model='drawer', app)
		CommonSidebar

	//- ページヘッダー
	v-app-bar(app)
		v-app-bar-nav-icon(aria-label='Side Menu', @click.stop='drawer = !drawer')
		CommonHeader(:title='title')
		v-spacer

		v-btn(icon, aria-label='Search')
			v-icon mdi-magnify

		v-menu(location='bottom left', transition='slide-y-transition')
			template(v-slot:activator='{ props }')
				v-btn(icon, aria-label='Menu', v-on='props')
					v-icon mdi-dots-vertical
			v-list
				v-list-item(v-for='(temp, index) in headMenu', active-class='light-blue--text', link, nuxt, :to='temp.link', :key='index')
					v-icon {{ temp.icon }}
					//- v-list-item-title(v-text="$t(temp.title)")
					v-list-item-title {{ $t(temp.title) }}

		v-menu(location='bottom left', transition='slide-y-transition')
			template(v-slot:activator='{ props }')
				v-btn(icon, aria-label='Translate', v-on='props')
					v-icon mdi-translate
			v-list
				v-list-item(v-for='(locale, index) in availableLocales', active-class='light-blue--text', link, nuxt, :to='useSwitchLocalePath(locale.code)', :key='locale.code')
					v-list-item-title {{ locale.name }}

	//- ページコンテンツ
	v-main
		v-container(fluid)
			//- router-view
			slot
		CommonFooter

		//- v-btn(color='red', fab, fixed, bottom, right, aria-label='Page Top', @click="$vuetify.goTo('#inspire', {duration: 500, offset: 0, easing: 'easeOutCubic'})")
		//- 	v-icon mdi-chevron-up
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
// const switchLocalePath = useSwitchLocalePath();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const availableLocales = computed(() => {
	return locales.value.filter((i: { code: string; }) => i.code !== locale.value);
});
</script>

<script lang="ts">
export default {
	data() {
		return {
			drawer: true,
			title: '',
			headMenu: [
				{ title: 'header.title', icon: 'mdi-home', link: '/' },
				{ title: 'header.log', icon: 'mdi-history', link: '/updateLog' },
				{ title: 'header.login', icon: 'mdi-login', link: '/user/login' },
			],
		};
	},

	computed: {
		// availableLocales() {
		// 	return this.$i18n.locales;
		// },
	},

	beforeCreate() {
		// this.$store.dispatch('fetchRandomWords');
		// this.$store.dispatch('fetchList');
	},

	created() {
		// this.$vuetify.theme.dark = true;
		// this.$store.dispatch('fetchList');
		// this.$store.dispatch('fetchRandomWords');
		this.setListener();
	},

	methods: {
		/**
		 * イベントを作成する
		 *
		 * @returns {void}
		 */
		setListener(): void {
			// emitで発火させたイベント名にする
			// this.$nuxt.$on('update-header', this.setHeader);
		},

		/**
		 * タイトルの表示内容の更新
		 *
		 * @param   {string}    title   ヘッダーに表示するタイトル
		 * @returns {void}
		 */
		setHeader(title: string): void {
			// 第1引数にはemitで渡した値が入ってくる。
			// 第2引数以降を渡す場合も同様に、それ以降の引数で受け取れる
			this.title = title || '';
		},
	},
};
</script>

<style lang="scss">
// ----------------------------------------------------------------------------------------------------
// Common Style
section {
	&:not(:first-child) {
		margin-top: 1.5rem;
		border: solid;
		border-color: rgba(255, 255, 255, 0.12);
		border-width: thin 0 0 0;
	}
}

.no-speak {
	speak-as: none;
}

.code-toolbar {
	+h2, +h3 {
		margin-top: 1.5rem;
	}
}

// ----------------------------------------------------------------------------------------------------
// Vender Profile Initialize
::-webkit-scrollbar {
	width: 10px;
	height: 10px;
	background-color: #303030;

	&-track {
		// border-radius: 10px;
		background-color: transparent;
		// box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
	}

	&-thumb {
		background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.25));
		border-radius: 10px;
		box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3);
		transition: all 0.1s ease;

		@media (prefers-color-scheme: light) {
			background-image: linear-gradient(to bottom right, rgba(102, 102, 102, 0.75), rgba(102, 102, 102, 0.25));
			box-shadow: 0 0 0 1px rgba(102, 102, 102, 0.3);
		}
	}

	&-corner {
		background-color: transparent;
	}
}

// ----------------------------------------------------------------------------------------------------
// Vuetify Overwrite
.v-application {
	.code-toolbar {

		// ----------------------------------------------------------------------------------------------------
		// Prism Overwrite
		code, pre {
			&[class*="language-"] {
				margin: unset;
				font-family: "Migu 1M", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace;
				line-height: 1.2;
				tab-size: 4;
				-webkit-overflow-scrolling: touch;

				&::-webkit-scrollbar {
					width: 5px;
					height: 5px;
				}
			}
		}

		pre {
			max-height: 75vh;
			overflow-y: scroll;

			&[class*="language-"] {
				>code {
					$size: 2.286em;

					display: block;
					font-size: 14px;
					font-weight: normal;
					color: unset;
					white-space: pre;
					background-color: unset;
					border-radius: unset;
					box-shadow: unset;

					@media (prefers-color-scheme: light) {
						background-size: $size $size;
					}
				}
			}
		}

		// ----------------------------------------------------------------------------------------------------
		// Vuetify Overwrite Fix
		[class*="language-"] {
			code {
				padding: 0;
				background-color: transparent;
			}

			.title {
				font-family: inherit !important;
				font-size: inherit !important;
				font-weight: inherit;
				line-height: inherit;
				letter-spacing: 0 !important;
			}
		}
	}

	code {
		font-weight: normal;

		&:before {
			content: unset;
		}

		&:after {
			content: unset;
		}
	}
}

// ----------------------------------------------------------------------------------------------------
// CodeMirror Overwrite
.CodeMirror {
	font-family: "Migu 1M", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace;
	font-size: 14px;
}
</style>
