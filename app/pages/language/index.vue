<template lang="pug">
.category--language.page--index
	AlertStub

	section
		h2 説明
		p 記述前
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: '' });
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
