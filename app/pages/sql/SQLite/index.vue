<template lang="pug">
.category--sql.sub--sqlite.page--index
	section
		h2 {{ header.title }}
		p SQLiteに関するマニュアルやチートシートを掲載しています。

		CommonContents(main-category="sql", sub-category="SQLite")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: SQLite' });
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
