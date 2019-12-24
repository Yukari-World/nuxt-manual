<template lang="pug">
span
	dt(:id='"wordID" + ($route.params.id)')
		h3(v-html='randomWords[$route.params.id - 1].title')
		h4 出典: {{randomWords[$route.params.id - 1].original}}
	dd
		div(v-html='randomWords[$route.params.id - 1].summary')
		.boxTag
			ul.tagList
				//- <a data-tag="' + searchTag + '">' + searchTag + '</a>
				//- コンテンツタグの出力
				li(v-for='(tag) in randomWords[$route.params.id - 1].tags')
					a(:data-tag='tag') {{tag}}
</template>

<script>
import { mapState } from 'vuex';

export default {
	validate({ params }) {
		return params.id >= 0;
	},
	computed: {
		// storeからのデータ読み込み
		...mapState({
			randomWords: (state) => state.randomWords
		})
	},
};
</script>
