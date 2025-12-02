<template lang="pug">
.page--vue.sub--nuxtjs.page--index
	section
		h2 {{ header.title }}
		p Nuxt.jsに関するマニュアルやチートシートを掲載しています

		CommonContents(main-category="vue", sub-category="Nuxtjs")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: Nuxt.js' });
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
