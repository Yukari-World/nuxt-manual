<template lang="pug">
.category--csharp.sub--maui.page--index
	section
		h2 {{ header.title }}
		p MAUIに関するマニュアルやチートシートを掲載しています。

		CommonContents(main-category="csharp", sub-category="MAUI")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: MAUI' });
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
