<template lang="pug">
.category--other.page--netlify
	AlertStub

	section
		h2 説明
		p NetlifyでNuxtのマニュアルを作成する機会があったので記述する。

	section
		h2 Netlifyとは
		p
			| a

	section
		h2 リンク
		a(href="https://www.netlify.com/", target="_blank", rel="external noopener") Netlify: All-in-one platform for automating modern web projects.

	section
		h2 参考リンク
		a(href="https://qiita.com/TakahiRoyte/items/b7c4d1581df1a17a93fb", target="_blank", rel="external noopener") 高機能ホスティングサービスNetlifyについて調べて使ってみた - Qiita
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'Netlify' });
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
