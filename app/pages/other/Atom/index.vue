<template lang="pug">
.category--other.sub--atom.page--index
	section
		h2 {{ header.title }}
		p Atomに関するマニュアルやチートシートを掲載しています。

		CommonContents(main-category="other", sub-category="Atom")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: Atom' });
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
