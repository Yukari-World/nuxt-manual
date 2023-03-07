<template lang="pug">
.ad
	dt(:id='"wordID" + ($route.params.id)')
		h3(v-html='wordList[Number($route.params.id) - 1].title')
		h4 出典: {{ wordList[Number($route.params.id) - 1].original }}
	dd
		div(v-html='wordList[Number($route.params.id) - 1].summary')
		.boxTag
			ul.tagList
				//- <a data-tag="' + searchTag + '">' + searchTag + '</a>
				//- コンテンツタグの出力
				li(v-for='(tag) in wordList[Number($route.params.id) - 1].tags')
					a(:data-tag='tag') {{ $t(tag) }}
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
