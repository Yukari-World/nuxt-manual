<template lang="pug">
.category--sql.page--zero-count
	v-alert(type='info', border='start', colored-border, dense, elevation='5', :title="$t('common.stub.workInProgress.title')", :text="$t('common.stub.workInProgress.desc')")

	section
		h2 説明
		p
			| SQLでCOUNTを使用したときに件数が0件となる出力は意外と難しく、通常の方法では出ないことが多い。
			| その出力方法の一例を挙げる。
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';
import 'prismjs/components/prism-sql';


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
	highlightAll();
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>
