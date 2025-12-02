<template lang="pug">
.category--js.sub--ajax.page--index
	section
		h2 {{ header.title }}
		p Ajaxに関するマニュアルやチートシートを掲載しています。

		CommonContents(main-category="js", sub-category="Ajax")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: Ajax' });
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
