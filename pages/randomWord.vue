<template lang="pug">
#randomOutput
	//- <dt id="wordID' + ++listCount + '"><h3>' + dataTemp.title + '</h3><h4>出典: ' + dataTemp.original + '</h4></dt>
	//- <dd>' + dataTemp.summary + '<div class="boxTag"><ul class="tagList">' + tagText + '</ul></div></dd>
	template(v-for='(words, index) in randomWords')
		dt(:id='"wordID" + (index + 1)')
			h3(v-html='words.title')
			h4 出典: {{words.original}}
		dd
			div(v-html='words.summary')
			.boxTag
				ul.tagList
					//- <a data-tag="' + searchTag + '">' + searchTag + '</a>
					//- コンテンツタグの出力
					li(v-for='(tag) in words.tags')
						a(:data-tag='tag') {{tag}}
</template>

<style lang="scss">
#randomOutput {
	h3, h4 {
		font-family: "メイリオ", "Meiryo", sans-serif;
		font-weight: 400;
		border-left: 0;
	}

	h4 {
		margin: 0;
		margin-bottom: 1rem;
		padding: 0;
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
			border-width: 3px 0 0;
			border-style: solid;
			-webkit-border-image: -webkit-gradient(linear, left top, right top, from(#000011), color-stop(#1164FF), to(#FFFF66)) 1/3px 0 0/0 stretch;
			-webkit-border-image: -webkit-linear-gradient(left, #000011, #1164FF, #FFFF66) 1/3px 0 0/0 stretch;
			-o-border-image: -o-linear-gradient(left, #000011, #1164FF, #FFFF66) 1/3px 0 0/0 stretch;
			border-image: -webkit-gradient(linear, left top, right top, from(#000011), color-stop(#1164FF), to(#FFFF66)) 1/3px 0 0/0 stretch;
			border-image: linear-gradient(90deg, #000011, #1164FF, #FFFF66) 1/3px 0 0/0 stretch;
		}

		h3 {
			margin-left: 0;
			padding: 0 0 0 10px;
		}

		h4 {
			padding: 0 0 0 10px;
			font-size: 0.75rem;
		}
	}

	dd {
		h3 {
			margin: 0;
			padding: 0;
		}
	}

	.boxTag {
		display: flex;
		justify-content: flex-end;
		margin-top: 2.5rem;
	}

	.tagList {
		display: inline-flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		box-sizing: border-box;
		max-width: 70%;
		margin: 0;
		padding-right: 10px;
		list-style: none;
		font-size: 0.75rem;
		border-top: 1px #FFFFFF solid;

		li {
			margin: 0 0 0 10px;
			padding-right: 0;

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

<script>
import { mapState } from 'vuex';
import Prism from 'prismjs';

export default {
	data() {
		return {
			header: {
				title: 'ランダムワード集'
			}
		};
	},
	computed: {
		// storeからのデータ読み込み
		...mapState({
			randomWords: (state) => state.randomWords
		})
	},
	mounted() {
		Prism.highlightAll();
		Prism.fileHighlight();
		this.updateHeader();
		setTimeout(this.scroll, 300);
	},
	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('updateHeader', this.header.title);
		},
		scroll() {
			console.log(this.$route);
			const hash = this.$route.hash;
			if (hash && hash.match(/^#.+$/)) {
				this.$scrollTo(hash);
			}
		}
	}
};
</script>
