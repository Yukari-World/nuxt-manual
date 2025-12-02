<template lang="pug">
.category--other.sub--apache.page--index
	section
		h2 {{ header.title }}
		p Apacheに関するマニュアルやチートシートを掲載しています。

		CommonContents(main-category="other", sub-category="Apache")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: Apache' });
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
