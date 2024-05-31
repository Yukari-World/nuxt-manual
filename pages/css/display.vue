<template lang="pug">
.category--css.page--display
	AlertStub

	section
		h3 display-outside
		p 記述前

		h3 display-inside
		p 記述前

		h3 display-listitem
		p 記述前

		h3 display-internal
		p 記述前

		h3 display-box
		p 記述前

		h3 display-legacy
		p 記述前

	section
		h2 参考リンク
		a(href="https://developer.mozilla.org/ja/docs/Web/CSS/display", target="_blank", rel="external noopener") MDN Web Docs
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'display' });
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
