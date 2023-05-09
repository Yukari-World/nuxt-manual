<template lang="pug">
.category--node.sub--gulp.page--manual-gulp
	v-alert(type='info', border='start', colored-border, dense, elevation='5', :title="$t('common.stub.workInProgress.title')", :text="$t('common.stub.workInProgress.desc')")

	section
		h2 説明
		p 記述前
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'Gulp導入 マニュアル' });
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
