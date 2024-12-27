<template lang="pug">
dt(:id="'wordID' + (targetId)")
	//- eslint-disable-next-line vue/no-v-html
	h3(v-html="wordList.title")
	h4 出典: {{ wordList.original }}
dd
	//- eslint-disable-next-line vue/no-v-html
	div(v-html="wordList.summary")
	.boxTag
		ul.tagList
			//- <a data-tag="' + searchTag + '">' + searchTag + '</a>
			//- コンテンツタグの出力
			li(v-for="(tag, index) in wordList.tags", :key="index")
				a(:data-tag="tag") {{ $t(tag) }}
</template>

<script setup lang="ts">
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Property List

defineProps({
	targetId: {
		type: Number,
		required: true,
	},
	wordList: {
		type: Object,
		required: true,
	},
});
</script>
