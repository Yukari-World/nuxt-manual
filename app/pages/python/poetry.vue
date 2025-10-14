<template lang="pug">
	.category--python.page--poetry
		AlertStub

		section
			h2 説明
			p 記述前
	</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'Poetry' });
const indexStore = useIndexStore();


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function () {
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>
