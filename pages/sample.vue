<template lang="pug">
div
	section
		h2 サンプルデータについて
		p
			| このサンプルデータはマニュアル解説を円滑に行うために用意されたデータです。
			br
			| サンプルデータについての利用制限等は特にありませんので煮るなり潰すなりお好きにどうぞ。
		p
			| 各サンプルファイルはソースコード欄右上に表示されるツールバーからコピー、ダウンロードすることができます。
	section
		h2 サンプルデータ
		h3 SCSS
		pre.line-numbers(data-src='/sass/sample.scss', data-download-link)

		h3#sqlSample SQL
		pre.line-numbers(data-src='/files/sample.sql', data-download-link)

		h3 Fetch API ECMAScript 2015
		pre.line-numbers(data-src='/js/nomodule/ajax-response.js', data-download-link)

		h3 Fetch API ECMAScript 2017
		pre.line-numbers(data-src='/js/ajax-response.js', data-download-link)

		h3 Fetch API 呼び出し
		pre.language-javascript.line-numbers: code.
			/**
			&nbsp;* Fetch API呼び出し
			&nbsp;*
			&nbsp;* @return {Promise}    終了コード
			&nbsp;* @since   1.0.0
			&nbsp;* @version 1.0.0
			&nbsp;*/
			function getDateList() {
				return new Promise((resolve, reject) =&gt; {
					// フォームデータの読み込み
					let fd = new FormData();

					SendAjax('sample.php', fd) // アクセスするファイル。JSON形式で返すこと。JSONファイル読み込みでも可
						.then(function (json) {
							// console.log(json);
							// ここに処理内容を記述
							resolve(1); // ここを resolve(json); とすると戻り値としてJSONを指定することができる。
						})
						.catch(function (error) {
							// console.errorは処理を止めるので必要に応じて変更
							console.error('request failed', error);
							reject(error);
						});
				});
			}


		h3 Fetch API 読み込み
		p
			code.language-html: span.token.attr-name nomodule
			| を使うことでECMAScript 2017非対応コードの分岐を行っている
		pre.language-html.line-numbers: code.
			&lt;script type="module" src="js/sm-debug15.js"&gt;&lt;/script&gt;
			&lt;script type="application/javascript" nomodule src="js/nomodule/ajax-response.js"&gt;&lt;/script&gt;
</template>

<style scoped>
@import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
</style>

<script>
// import axios from 'axios';
// import Prism from 'prismjs';
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-pug';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-sql';

import 'prismjs/plugins/autolinker/prism-autolinker';
import 'prismjs/plugins/autoloader/prism-autoloader';
import 'prismjs/plugins/command-line/prism-command-line';
import 'prismjs/plugins/data-uri-highlight/prism-data-uri-highlight';
import 'prismjs/plugins/file-highlight/prism-file-highlight';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/show-language/prism-show-language';

export default {
	title: 'test',
	data() {
		return {
			header: {
				title: 'サンプルデータ'
			}
		};
	},
	mounted() {
		Prism.highlightAll();
		Prism.fileHighlight();
		this.updateHeader();
	},
	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('updateHeader', this.header.title);
		}
	}
};
</script>
