<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2 {{ $t('common.stub.work_in_progress.title') }}
		p {{ $t('common.stub.work_in_progress.desc') }}

	section
		h2 説明
		p 記述前

	section
		h2 参考リンク
		a(href='https://qiita.com/gold-kou/items/7f6a3b46e2781b0dd4a0', target='_blank', rel='external noopener') いまさらだけどGitを基本から分かりやすくまとめてみた - Qiita
</template>

<script>
import Prism from 'prismjs';

export default {
	data() {
		return {
			header: {
				title: 'HEADについて',
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
