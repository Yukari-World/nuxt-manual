<template lang="pug">
.category--other.sub--apache.page--run-php-for-html
	section
		h2 説明
		p
			| HTMLファイルの拡張子のままPHPを動作させる方法があるので記述する。

	section
		h2 使用方法と解説
		p .htaccessファイルに以下の記述を追加する。

		BlockCode.language-xml {{ CB }}

		p 原理としてはHTMLファイルをPHPページであるとMIMEタイプを偽装することでPHPの処理を実行させることができる。

	section
		h2 説明
		ul
			li HTMLファイルを読み込む時、必ずPHPを仲介する都合上レスポンスが低下する可能性があるので注意が必要。
			li サーバーによってはこの記述方法では動作しない可能性がある。使用できるかどうかはサーバー側の情報を調べること。

	section
		h2 参考リンク
		p
			NuxtLink(to="https://xn--web-oi9du9bc8tgu2a.com/how-to-use-php-in-html-files/", target="_blank", rel="external noopener") htaccessに3行足すだけ！『.html』内でPHPを実行する方法！ | WEB改善事例集(GMOソリューションパートナー株式会社)
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'HTMLファイル内でPHPを動かす' });
const indexStore = useIndexStore();

const CB = ref(`<Files "\\.html$">
AddHandler application/x-httpd-php .html
</Files>
`);


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
