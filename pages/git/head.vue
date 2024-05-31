<template lang="pug">
.category--git.page--head
	AlertStub

	section
		h2 説明
		p 記述前

	section
		h2 参考リンク
		a(href="https://qiita.com/gold-kou/items/7f6a3b46e2781b0dd4a0", target="_blank", rel="external noopener") いまさらだけどGitを基本から分かりやすくまとめてみた - Qiita
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'HEADについて' });
const indexStore = useIndexStore();


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	highlightAll();
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>
