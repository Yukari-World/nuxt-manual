<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2 {{ $t('common.stub.work_in_progress.title') }}
		p {{ $t('common.stub.work_in_progress.desc') }}

	section
		h2 互換性に関する注意事項
		ul
			li Internet Explorer全てのバージョンにおいてFetchAPIを使用することはできない。つまりInternet Explorerを対応に含む場合はこの方法を利用できない。
			li
				code.language-javascript: span.token.class-name formData
				| はInternet ExplorerとMicrosoft Edge17までは殆どの機能が対応していない。

	section
		h2 参考リンク
		p
			a(href='https://developer.mozilla.org/ja/docs/Web/API/Fetch_API', target='_blank', rel='external noopener') MDN Web Docs
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

export default {
	data() {
		return {
			header: {
				title: 'Fetch API',
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
