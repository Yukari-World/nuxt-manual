<template lang="pug">
.category--home.page--sample
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
		BlockCode(data-src="/sass/sample.scss", data-download-link)

		h3#sqlSample SQL
		BlockCode(data-src="/files/sample.sql", data-download-link)

		h3 Fetch API ECMAScript 2015
		BlockCode(data-src="/js/nomodule/ajax-response.js", data-download-link)

		h3 Fetch API ECMAScript 2017
		BlockCode(data-src="/js/ajax-response.js", data-download-link)

		h3 Fetch API 呼び出し
		BlockCode.language-javascript {{ CBCallFetch }}

		h3 Fetch API 読み込み
		p
			code.language-html: span.token.attr-name nomodule
			| を使うことでECMAScript 2017非対応コードの分岐を行っている
		//- このコードブロックはscriptが含まれているため、変換していない
		BlockCode.language-html: pre.
			&lt;script type="module" src="js/sm-debug15.js"&gt;&lt;/script&gt;
			&lt;script type="application/javascript" nomodule src="js/nomodule/ajax-response.js"&gt;&lt;/script&gt;
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'サンプルデータ' });
const indexStore = useIndexStore();

const CBCallFetch = `/**
 * Fetch API呼び出し
 *
 * @return {Promise}    終了コード
 * @since   1.0.0
 * @version 1.0.0
 */
function getDateList() {
	return new Promise(function (resolve, reject) {
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
}`;


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>
