<template lang="pug">
dt(:id='"wordID" + (targetId)')
	h3(v-html='wordList.title')
	h4 出典: {{ wordList.original }}
dd
	div(v-html='wordList.summary')
	.boxTag
		ul.tagList
			//- <a data-tag="' + searchTag + '">' + searchTag + '</a>
			//- コンテンツタグの出力
			li(v-for='(tag) in wordList.tags')
				a(:data-tag='tag') {{ $t(tag) }}
</template>

<script setup lang="ts">
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Property List

const props = defineProps({
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
