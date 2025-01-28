<template lang="pug">
.category--html.page--file-download
	section
		h2 説明
		p メディアリンク等を作成した場合、再生ではなくダウンロードさせたい場合がある。HTML5を利用することでダウンロードさせることができるので説明する。

	section
		h2 使用方法と解説
		p 使い方は非常に単純でaタグにダウンロード要素を付与すれば良い。

		BlockCode.language-html {{ CB }}

	section
		h2 使用上の注意
		ul
			li
				| download属性を利用する場合、
				a(href="https://developer.mozilla.org/ja/docs/Web/Security/Same-origin_policy", target="_blank", rel="external noopener") 同一オリジンのURL
				| を指定する必要がある。
			li Internet ExplorerとiOSのSafariはこの仕様に対応していない。

	section
		h2 参考リンク
		p
			a(href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/a", target="_blank", rel="external noopener") MDN Web Docs
			br
			a(href="https://chaika.hatenablog.com/entry/2016/03/25/073203", target="_blank", rel="external noopener") HTML5 ファイルをダウンロードさせるリンクを作りたい。 - かもメモ
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'ファイルダウンロード' });
const indexStore = useIndexStore();

const CB = ref(`<a download="exsample.txt" href="saa/exsample.txt">ダウンロード</a>`);


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
