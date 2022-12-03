<template lang="pug">
.category-node.sub-gulp.page-manual-gulp
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2 {{ $t('common.stub.work_in_progress.title') }}
		p {{ $t('common.stub.work_in_progress.desc') }}

	section
		h2 説明
		p 記述前
</template>

<script lang="ts">
import Vue from 'vue';
import { highlightAll } from 'prismjs';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'Gulp導入 マニュアル',
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
