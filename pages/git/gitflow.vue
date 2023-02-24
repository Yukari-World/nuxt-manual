<template lang="pug">
.category-git.page-gitflow
	v-alert(type='info', border='start', colored-border, dense, elevation='5', :title="$t('common.stub.workInProgress.title')", :text="$t('common.stub.workInProgress.desc')")

	section
		h2 説明
		p 記述前

	section
		h2 参考リンク
		a(href='https://danielkummer.github.io/git-flow-cheatsheet/index.ja_JP.html', target='_blank', rel='external noopener') git-flow cheatsheet
		br
		a(href='https://qiita.com/gold-kou/items/7f6a3b46e2781b0dd4a0', target='_blank', rel='external noopener') いまさらだけどGitを基本から分かりやすくまとめてみた - Qiita
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'git-flow' });
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
