<template lang="pug">
.category--other.sub--xampp.page--index
	section
		h2 {{ header.title }}
		p XAMPPに関するマニュアルやチートシートを掲載しています。

		CommonContents(main-category="other", sub-category="XAMPP")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: XAMPP' });
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
