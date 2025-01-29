<template lang="pug">
.category--html.page--omit-http
	AlertDeprecated

	section
		h2 説明
		p http://やhttps://といった混在した記述を解消する記述方法がある。

	section
		h2 使用方法と解説
		p このようなリンクがあるとする。
		BlockCode.language-http: pre https://prismjs.com/

		p これを以下のように記述することができる。
		BlockCode.language-http: pre //prismjs.com/

		p 詳細な内容は省略する。

	section
		h2 使用上の注意
		ul
			li このような記述方法は現在Googleでは推奨されていない。数年前までは推奨していたが現在はhttps://を推奨している。
			li ローカルファイルで開いた場合file://として認識するためこの方法を使用しないほうが良い。

	section
		h2 参考リンク
		a(href="https://prokatsu.com/http-not-omit/", target="_blank", rel="external noopener") 【2018年版】http,httpsは省略しない方がいい | プロカツ！
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'httpの省略' });
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
