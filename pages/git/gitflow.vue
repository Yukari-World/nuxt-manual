<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2 書きかけのページ
		p このページの内容は書きかけです。不定期なタイミングで記述内容が追加、変更されることがあります。

	section
		h2 説明
		p 記述前

	section
		h2 参考リンク
		a(href='https://danielkummer.github.io/git-flow-cheatsheet/index.ja_JP.html', target='_blank', rel='external noopener') git-flow cheatsheet
		br
		a(href='https://qiita.com/gold-kou/items/7f6a3b46e2781b0dd4a0', target='_blank', rel='external noopener') いまさらだけどGitを基本から分かりやすくまとめてみた - Qiita
</template>

<script>
import Prism from 'prismjs';

export default {
	data() {
		return {
			header: {
				title: 'git-flow',
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
