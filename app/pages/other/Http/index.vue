<template lang="pug">
.category--other.sub--http.page--index
	section
		h2 {{ header.title }}
		p HTTPに関するマニュアルやチートシートを掲載しています。

		CommonContents(main-category="other", sub-category="HTTP")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: HTTP' });
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
