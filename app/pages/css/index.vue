<template lang="pug">
.category--css.page--index
	section
		h2 {{ header.title }}
		p CSSに関するマニュアルやチートシートを掲載しています。

		CommonContents(main-category="css")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: CSS' });
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
