<template lang="pug">
span
	dt(:id='"wordID" + ($route.params.id)')
		h3(v-html='randomWords[$route.params.id - 1].title')
		h4 出典: {{ randomWords[$route.params.id - 1].original }}
	dd
		div(v-html='randomWords[$route.params.id - 1].summary')
		.boxTag
			ul.tagList
				//- <a data-tag="' + searchTag + '">' + searchTag + '</a>
				//- コンテンツタグの出力
				li(v-for='(tag) in randomWords[$route.params.id - 1].tags')
					a(:data-tag='tag') {{ $t(tag) }}
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
	// validate({ params }) {
	// 	return params.id >= 0;
	// },
	computed: {
		// storeからのデータ読み込み
		...mapState({
			randomWords: (state: any) => state.randomWords,
		}),
	},
});
</script>

<style lang="scss">
#randomOutput {
	h3, h4 {
		font-family: "メイリオ", "Meiryo", sans-serif;
		font-weight: 400;
		border-left: 0;
	}

	h4 {
		padding: 0;
		margin: 0;
		margin-bottom: 1rem;
	}

	p {
		padding: 0;
		line-height: 1.4;

		&:nth-child(1n+2) {
			margin-top: 1rem;
		}
	}

	dl {
		padding: 0;
	}

	dt {
		&:not(:first-child) {
			border-style: solid;
			border-width: 3px 0 0;
			border-image: linear-gradient(90deg, #000011, #1164FF, #FFFF66) 1/3px 0 0/0 stretch;
		}

		h3 {
			padding: 0 0 0 10px;
			margin-left: 0;
		}

		h4 {
			padding: 0 0 0 10px;
			font-size: 0.75rem;
		}
	}

	dd {
		h3 {
			padding: 0;
			margin: 0;
		}
	}

	.boxTag {
		display: flex;
		justify-content: flex-end;
		margin-top: 2.5rem;
	}

	.tagList {
		box-sizing: border-box;
		display: inline-flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		max-width: 70%;
		padding-right: 10px;
		margin: 0;
		font-size: 0.75rem;
		list-style: none;
		border-top: 1px #FFFFFF solid;

		li {
			padding-right: 0;
			margin: 0 0 0 10px;

			a {
				color: #FFFFFF;
				cursor: pointer;
			}
		}
	}
}

.object {
	&-safe {
		color: #33FF33;
	}

	&-euclid {
		color: #FFFF33;
	}

	&-keter {
		color: #FF3333;
	}
}

@media only screen and (max-width: 768px) {
	#randomOutput {
		.tagList {
			max-width: 90%;
		}
	}
}

@media print, (prefers-color-scheme: light) {
	#randomOutput {
		dt {
			&:not(:first-child) {
				border-image-source: linear-gradient(90deg, #FFFFFF, #1164FF, #FFFF99);
			}
		}

		.tagList {
			border-color: #CC0000;
		}
	}
}
</style>
