<template lang="pug">
.category--js.sub--ajax.page--fetch-api
	AlertStub

	section
		h2 互換性に関する注意事項
		ul
			li Internet Explorer全てのバージョンにおいてFetchAPIを使用することはできない。つまりInternet Explorerを対応に含む場合はこの方法を利用できない。
			li
				TextToken(type="javascript").token.class-name formData
				| はInternet ExplorerとMicrosoft Edge17までは殆どの機能が対応していない。

	section
		h2 参考リンク
		p
			a(href="https://developer.mozilla.org/ja/docs/Web/API/Fetch_API", target="_blank", rel="external noopener") MDN Web Docs
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'Fetch API' });
const indexStore = useIndexStore();


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
