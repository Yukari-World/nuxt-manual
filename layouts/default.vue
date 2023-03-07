<template lang="pug">
div
	//- サイドバー
	//- 内部処理はサイドバーコンポーネント参照
	v-navigation-drawer(v-model='drawer', app)
		CommonSidebar

	//- ページヘッダー
	v-app-bar(app)
		v-app-bar-nav-icon(aria-label='Side Menu', @click.stop='drawer = !drawer')
		CommonHeader
		v-spacer

		v-btn(icon, aria-label='Search')
			v-icon mdi-magnify

		v-menu(location='bottom left', transition='slide-y-transition')
			template(v-slot:activator='{ props }')
				v-btn(icon, aria-label='Menu', v-bind='props')
					v-icon mdi-dots-vertical
			v-list
				v-list-item(v-for="(temp, index) in headMenu", active-class='text-light-blue', link, nuxt, :to='temp.link', :key='index')
					template(v-slot:prepend)
						v-icon {{ temp.icon }}
					//- v-list-item-title(v-text="$t(temp.title)")
					v-list-item-title {{ $t(temp.title) }}

		v-menu(location='bottom left', transition='slide-y-transition')
			template(v-slot:activator='{ props }')
				v-btn(icon, aria-label='Translate', v-bind='props')
					v-icon mdi-translate
			v-list
				v-list-item(v-for="(locale, index) in availableLocales", active-class='text-light-blue', @click.prevent.stop="setLocale(locale.code)", :key='locale.code')
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
import { useIndexStore } from '../store/index';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-highlight/prism-line-highlight';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const { locale, locales, setLocale } = useI18n();
const indexStore = useIndexStore();
// const switchLocalePath = useSwitchLocalePath();
const drawer = ref(true);
const headMenu = reactive([
	{ title: 'header.title', icon: 'mdi-home', link: '/' },
	{ title: 'header.log', icon: 'mdi-history', link: '/updateLog' },
	{ title: 'header.login', icon: 'mdi-login', link: '/user/login' },
]);


// ----------------------------------------------------------------------------------------------------
// Store Initialize

async function storeInit() {
	await indexStore.fetchMenuList();
	await indexStore.fetchRandomWords();
}
await storeInit();


// ----------------------------------------------------------------------------------------------------
// Computed

const availableLocales = computed(function() {
	return locales.value.filter((i: { code: string; }) => i.code !== locale.value);
});
</script>

<script lang="ts">
</script>

<style lang="scss">
// ----------------------------------------------------------------------------------------------------
// Common Style
section {
	&:not(:first-child) {
		margin-top: 3rem;
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

	.code-toolbar {
		> .toolbar {
			> .toolbar-item {
				&:not(:last-child) {
					margin-right: 0.2rem;
				}
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
