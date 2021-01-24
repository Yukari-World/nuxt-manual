<template lang="pug">
v-app#inspire
	v-navigation-drawer(v-model='drawer', app)
		SideList

	v-app-bar(app)
		v-app-bar-nav-icon(aria-label='Side Menu', @click.stop='drawer = !drawer')
		HeaderVue(:title='title')
		v-spacer

		v-btn(icon, aria-label='Search')
			v-icon mdi-magnify

		v-menu(bottom, left, offset-y, transition='slide-y-transition')
			template(v-slot:activator='{ on }')
				v-btn(icon, aria-label='Menu', v-on='on')
					v-icon mdi-dots-vertical
			v-list
				v-list-item(v-for='(temp, index) in headMenu', active-class='light-blue--text', link, nuxt, :to='temp.link', :key='index')
					v-list-item-icon
						v-icon {{ temp.icon }}
					v-list-item-content
						v-list-item-title {{ $t(temp.title) }}

		v-menu(bottom, left, offset-y, transition='slide-y-transition')
			template(v-slot:activator='{ on }')
				v-btn(icon, aria-label='Translate', v-on='on')
					v-icon mdi-translate
			v-list
				v-list-item(v-for='(locale, index) in availableLocales', active-class='light-blue--text', link, nuxt, :to='switchLocalePath(locale.code)', :key='locale.code')
					v-list-item-content
						v-list-item-title {{ locale.name }}

	v-main
		v-container(fluid)
			router-view
				nuxt
		FooterVue

		v-btn(color='red', fab, fixed, bottom, right, aria-label='Page Top', @click="$vuetify.goTo('#inspire', {duration: 500, offset: 0, easing: 'easeOutCubic'})")
			v-icon mdi-chevron-up
</template>

<script>
// import axios from 'axios';
import HeaderVue from '@/components/_Header';
import FooterVue from '@/components/_Footer';
import SideList from '@/components/_SideList';
// import { SendAjax } from '@/assets/js/ajax-response.js';

export default {
	components: {
		HeaderVue,
		FooterVue,
		SideList,
	},
	data() {
		return {
			drawer: null,
			title: '',
			headMenu: [
				{ title: 'header.title', icon: 'mdi-home', link: '/' },
				{ title: 'header.log', icon: 'mdi-history', link: '/updateLog' },
				{ title: 'header.login', icon: 'mdi-login', link: '/user/login' },
			],
		};
	},
	computed: {
		availableLocales() {
			return this.$i18n.locales;
		},
	},
	created() {
		// this.$vuetify.theme.dark = true;
		this.setListener();
	},
	methods: {
		setListener() {
			// emitで発火させたイベント名にする
			this.$nuxt.$on('update-header', this.setHeader);
		},
		setHeader(title) {
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
		border-width: thin 0 0 0;
		border-color: rgba(255, 255, 255, 0.12);
	}
}

.no-speak {
	speak: none;
}

.code-toolbar {
	+ h2, + h3 {
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
		transition: all 0.1s ease;
		border-radius: 10px;
		background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.25));
		box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3);

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
				tab-size: 4;
				font-family: "Migu 1M", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace;
				line-height: 1.2;
				-webkit-overflow-scrolling: touch;

				&::-webkit-scrollbar {
					width: 5px;
					height: 5px;
				}
			}
		}

		pre {
			&[class*="language-"] {
				> code {
					$size: 2.286em;

					display: block;
					white-space: pre;
					font-size: 14px;
					font-weight: normal;
					color: unset;
					border-radius: unset;
					background-color: unset;
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
				background-color: transparent;
				padding: 0;
			}

			.title {
				letter-spacing: 0 !important;
				font-family: inherit !important;
				font-size: inherit !important;
				font-weight: inherit;
				line-height: inherit;
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
.CodeMirror pre.CodeMirror-line, .CodeMirror pre.CodeMirror-line-like {
	font-family: "Migu 1M", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace;
}
</style>
