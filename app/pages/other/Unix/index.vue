<template lang="pug">
.category--other.sub--unix.page--index
	section
		h2 {{ header.title }}
		p Unixに関するマニュアルやチートシートを掲載しています。

		CommonContents(main-category="other", sub-category="Unix")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: Unix' });
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
