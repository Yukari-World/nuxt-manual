<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2 書きかけのページ
		p このページの内容は書きかけです。不定期なタイミングで記述内容が追加、変更されることがあります。

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

<script>
import Prism from 'prismjs';

export default {
	data() {
		return {
			header: {
				title: 'Netlify',
			},
		};
	},
	mounted() {
		Prism.highlightAll();
		// Prism.fileHighlight();
		this.updateHeader();
	},
	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('updateHeader', this.header.title);
		},
	},
};
</script>
