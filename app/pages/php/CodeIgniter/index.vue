<template lang="pug">
.category--php.sub--code-igniter.page--index
	section
		h2 {{ header.title }}
		p CodeIgniterに関するマニュアルやチートシートを掲載しています

		CommonContents(main-category="php", sub-category="CodeIgniter")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: CodeIgniter' });
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
