<template lang="pug">
.page--vue.page--index
	section
		h2 {{ header.title }}
		p Vue.jsに関するマニュアルやチートシートを掲載しています。

		CommonContents(main-category="vue")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: Vue.js' });
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
