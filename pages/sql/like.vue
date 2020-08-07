<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2 {{ $t('common.stub.work_in_progress.title') }}
		p {{ $t('common.stub.work_in_progress.desc') }}
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-sql';

export default {
	data() {
		return {
			header: {
				title: '削除フラグ',
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
