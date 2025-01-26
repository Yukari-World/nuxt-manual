<template lang="pug">
.category--home.page--randomword
	AlertStub
	section
		template(v-if="$route.params.id !== undefined")
			NuxtPage
		template(v-else)
			BlockRandomWord(v-for="(words, index) in wordList", :key="index", :target-id="index + 1", :word-list="words")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'ランダムワード集' });
const indexStore = useIndexStore();


// ----------------------------------------------------------------------------------------------------
// Computed

const wordList = computed(function() {
	return indexStore.getRandomWords;
});


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});
</script>

<script lang="ts">
</script>
