<template lang="pug">
.category--sql.sub--mysql.page--index
	section
		h2 {{ header.title }}
		p MySQLに関するマニュアルやチートシートを掲載しています。

		CommonContents(main-category="sql", sub-category="MySQL")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カテゴリ: MySQL' });
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
