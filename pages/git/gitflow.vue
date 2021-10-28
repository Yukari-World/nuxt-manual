<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2(v-t="'common.stub.work_in_progress.title'")
		p(v-t="'common.stub.work_in_progress.desc'")

	section
		h2 説明
		p 記述前

	section
		h2 参考リンク
		a(href='https://danielkummer.github.io/git-flow-cheatsheet/index.ja_JP.html', target='_blank', rel='external noopener') git-flow cheatsheet
		br
		a(href='https://qiita.com/gold-kou/items/7f6a3b46e2781b0dd4a0', target='_blank', rel='external noopener') いまさらだけどGitを基本から分かりやすくまとめてみた - Qiita
</template>

<script lang="ts">
import Vue from 'vue';
import Prism from 'prismjs';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'git-flow',
			},
		};
	},
	head(): object {
		return {
			title: this.header.title,
		};
	},
	mounted() {
		Prism.highlightAll();
		// Prism.plugins.fileHighlight.highlight();
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
