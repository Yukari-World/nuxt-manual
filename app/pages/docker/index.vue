<template lang="pug">
.category--docker.page--index
	section
		h2 {{ header.title }}
		p Dockerに関するマニュアルやチートシートを掲載しています。

		CommonContents(main-category="docker")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: Docker' });
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
