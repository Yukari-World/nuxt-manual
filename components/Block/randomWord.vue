<template lang="pug">
.components--block--randomworld(:id="'wordID' + (targetId)")
	.header
		//- eslint-disable-next-line vue/no-v-html
		h3(v-html="wordList.title")
		h4 出典: {{ wordList.original }}

	.textbox
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
// ----------------------------------------------------------------------------------------------------
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

<style lang="scss">
.components--block--randomworld {
	&:not(:first-child) {
		border-style: solid;
		border-width: 3px 0 0;
		border-image: linear-gradient(90deg, #000011, #1164FF, #FFFF66) 1/3px 0 0/0 stretch;
	}

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

	.header {
		h3 {
			padding: 0 0 0 10px;
			margin-left: 0;
		}

		h4 {
			padding: 0 0 0 10px;
			font-size: 0.75rem;
		}
	}

	.textbox {
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
	.components--block--randomworld {
		.tagList {
			max-width: 90%;
		}
	}
}

@media print, (prefers-color-scheme: light) {
	.components--block--randomworld {
		&:not(:first-child) {
			border-image-source: linear-gradient(90deg, #FFFFFF, #1164FF, #FFFF99);
		}

		.tagList {
			border-color: #CC0000;
		}
	}
}
</style>
