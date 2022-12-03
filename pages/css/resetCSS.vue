<template lang="pug">
.category-css.page-reset-css
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2(v-t="'common.stub.work_in_progress.title'")
		p(v-t="'common.stub.work_in_progress.desc'")

	section
		h2 説明
		p 記述前

	section
		pre.language-css.line-numbers: code.
			/* http://meyerweb.com/eric/tools/css/reset/
			 v2.0 | 20110126
			 License: none (public domain)
			 */

			html, body, div, span, applet, object, iframe,
			h1, h2, h3, h4, h5, h6, p, blockquote, pre,
			a, abbr, acronym, address, big, cite, code,
			del, dfn, em, img, ins, kbd, q, s, samp,
			small, strike, strong, sub, sup, tt, var,
			b, u, i, center,
			dl, dt, dd, ol, ul, li,
			fieldset, form, label, legend,
			table, caption, tbody, tfoot, thead, tr, th, td,
			article, aside, canvas, details, embed,
			figure, figcaption, footer, header, hgroup,
			menu, nav, output, ruby, section, summary,
			time, mark, audio, video {
				margin: 0;
				padding: 0;
				border: 0;
				font-size: 100%;
				font: inherit;
				vertical-align: baseline;
			}
			/* HTML5 display-role reset for older browsers */
			article, aside, details, figcaption, figure,
			footer, header, hgroup, menu, nav, section {
				display: block;
			}
			body {
				line-height: 1;
			}
			ol, ul {
				list-style: none;
			}
			blockquote, q {
				quotes: none;
			}
			blockquote:before, blockquote:after,
			q:before, q:after {
				content: '';
				content: none;
			}
			table {
				border-collapse: collapse;
				border-spacing: 0;
			}
		a(href='https://meyerweb.com/eric/tools/css/reset/', target='_blank', rel='external noopener') CSS Tools: Reset CSS - meyerweb.com

</template>

<script lang="ts">
import Vue from 'vue';
import { highlightAll } from 'prismjs';
import 'prismjs/components/prism-css';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'ResetCSS',
			},
		};
	},

	head(): object {
		return {
			title: this.header.title,
		};
	},

	mounted() {
		highlightAll();
		// plugins.fileHighlight.highlight();
		this.updateHeader();
	},

	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('update-header', this.header.title);
		},
	},
});
</script>
