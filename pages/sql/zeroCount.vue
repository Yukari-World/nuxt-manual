<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2 {{ $t('common.stub.work_in_progress.title') }}
		p {{ $t('common.stub.work_in_progress.desc') }}

	section
		h2 説明
		p
			| SQLでCOUNTを使用したときに件数が0件となる出力は意外と難しく、通常の方法では出ないことが多い。
			| その出力方法の一例を挙げる。
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-sql';

export default {
	data() {
		return {
			header: {
				title: '0件出力',
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
			this.$nuxt.$emit('update-header', this.header.title);
		},
	},
};
</script>
