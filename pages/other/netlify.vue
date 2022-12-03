<template lang="pug">
.category-other.page-netlify
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2(v-t="'common.stub.work_in_progress.title'")
		p(v-t="'common.stub.work_in_progress.desc'")

	section
		h2 説明
		p NetlifyでNuxtのマニュアルを作成する機会があったので記述する。

	section
		h2 Netlifyとは
		p
			| a

	section
		h2 リンク
		a(href='https://www.netlify.com/', target='_blank', rel='external noopener') Netlify: All-in-one platform for automating modern web projects.

	section
		h2 参考リンク
		a(href='https://qiita.com/TakahiRoyte/items/b7c4d1581df1a17a93fb', target='_blank', rel='external noopener') 高機能ホスティングサービスNetlifyについて調べて使ってみた - Qiita
</template>

<script lang="ts">
import Vue from 'vue';
import { highlightAll } from 'prismjs';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'Netlify',
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
