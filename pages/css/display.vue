<template lang="pug">
.category-css.page-display
	v-alert(type='info', border='start', colored-border, dense, elevation='5', :title="$t('common.stub.workInProgress.title')", :text="$t('common.stub.workInProgress.desc')")

	section
		h2 display-outside
		p 記述前

		h2 display-inside
		p 記述前

		h2 display-listitem
		p 記述前

		h2 display-internal
		p 記述前

		h2 display-box
		p 記述前

		h2 display-legacy
		p 記述前

	section
		h2 参考リンク
		a(href='https://developer.mozilla.org/ja/docs/Web/CSS/display', target='_blank', rel='external noopener') MDN Web Docs
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'display' });
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
