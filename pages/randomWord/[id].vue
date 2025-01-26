<template lang="pug">
.category--home.page--randomword
	section
		//- 件数が0なら非表示。これをしないと不具合が起きる
		//- 一応上限を超えた処理も無効化する
		template(v-if="wordList.length > 0 && wordList.length >= Number($route.params.id)")
			BlockRandomWord(:target-id="Number($route.params.id)", :word-list="wordList[Number($route.params.id) - 1]")
		article(v-else)
			h3 Now Loading...
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const indexStore = useIndexStore();


// ----------------------------------------------------------------------------------------------------
// Computed

const wordList = computed(function() {
	return indexStore.getRandomWords;
});
</script>

<script lang="ts">
</script>
