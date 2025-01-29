<template lang="pug">
.category--sql.page--zero-count
	AlertStub

	section
		h2 説明
		p
			| SQLでCOUNTを使用したときに件数が0件となる出力は意外と難しく、通常の方法では出ないことが多い。
			| その出力方法の一例を挙げる。
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: '0件出力' });
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
