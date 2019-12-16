<template lang="pug">
v-app#inspire
	v-navigation-drawer(v-model='drawer', app)
		SideList

	v-app-bar(app)
		v-app-bar-nav-icon(@click.stop='drawer = !drawer')
		HeaderVue(:title='title')

	v-content
		v-container(fluid)
			router-view
				nuxt
		FooterVue
</template>

<style lang="scss">
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
// Prism Overwrite
code,
pre {
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
			background-color: unset;
			color: unset;
			box-shadow: unset;
			display: block;
			border-radius: unset;
			white-space: pre-wrap;
			font-size: 14px;
			font-weight: normal;

			@media (prefers-color-scheme: light) {
				background-size: $size $size;
			}
		}
	}
}

// ----------------------------------------------------------------------------------------------------
// Vuetify Overwrite
.v-application {
	code {
		font-weight: normal;

		&:before {
			content: unset;
		}
	}
}
</style>

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
		SideList
	},
	data() {
		return {
			drawer: null,
			title:  ''
		};
	},
	created() {
		// this.$vuetify.theme.dark = true;
		this.setListener();
	},
	methods: {
		setListener() {
			// emitで発火させたイベント名にする
			this.$nuxt.$on('updateHeader', this.setHeader);
		},
		setHeader(title) {
			// 第1引数にはemitで渡した値が入ってくる。
			// 第2引数以降を渡す場合も同様に、それ以降の引数で受け取れる
			this.title = title || '';
		}
	}
};
</script>
