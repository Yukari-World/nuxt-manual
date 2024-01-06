<template lang="pug">
.category--js.sub--ajax.page--xml-http-request
	AlartStub
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'XMLHttpRequest' });
const indexStore = useIndexStore();


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	highlightAll();
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>
