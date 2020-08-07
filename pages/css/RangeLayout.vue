<template lang="pug">
div
	v-alert(type='warning', border='left', colored-border, dense, elevation='5')
		h2 {{ $t('common.stub.non_standard.title') }}
		p {{ $t('common.stub.non_standard.desc') }}

	section
		h2 説明
		p aa

	section
		h2 使用方法と解説

		p
			| 本題に入る前に、本ページでは以下のCSSを適応している。
			br
			code.language-html
				span.token.punctuation &lt;
				span.token.tag input type="range"
				span.token.punctuation &gt;
			| の使い方は別ページを参照。

		pre.language-css.line-numbers: code.
			input[type="range"] {
				box-sizing: border-box;
				width: 70%;
				max-width: 600px;
			}

		p HTMLは以下の通りである。
		pre.language-html.line-numbers: code.
			&lt;input type="range" min="0" max="1000" step="1" value="500"&gt;

		fieldset
			legend デフォルト
			input(type='range', min='0', max='1000', step='1', value='500')

		pre.language-css.line-numbers: code.
			input[type="range"].slider {
				box-sizing: border-box;
				height: 5px;
				opacity: 0.7;
				border-radius: 10px;
				outline: none;
				background: #CCCCCC;

				/* appearanceは標準化が進む現在非標準の機能なのでベンダープレフィックスを付与することを推奨 */
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
			}

			/* スライダーのポインターの設定。webkitとmozで分けておくことを推奨 */
			input[type="range"].slider::-webkit-slider-thumb {
				box-sizing: border-box;
				width: 25px;
				height: 25px;
				min-height: 25px;
				cursor: pointer;
				border: 2px outset #CCCCCC;
				border-right-style: inset;
				border-bottom-style: inset;
				border-radius: 50%;
				background: #FFFF33;
				-webkit-appearance: none;
				appearance: none;
			}

			input[type="range"].slider::-moz-slider-thumb {
				box-sizing: border-box;
				width: 25px;
				height: 25px;
				cursor: pointer;
				border: 2px outset #CCCCCC;
				border-right-style: inset;
				border-bottom-style: inset;
				border-radius: 50%;
				background: #FFFF33;
				-moz-appearance: none;
				appearance: none;
			}

		fieldset
			legend CSSを適応後
			input.slider(type='range', min='0', max='1000', step='1', value='500')

	section
		h2 使用上の注意
		ul
			li Microsoft Edgeではwebkitの仕様が採用されるが、スライダーのポインターは範囲をはみ出して表示する事は出来ない。
			li visibilityを使用することでポインターを消すとこができる。なお、display: noneでは数値が編集できなくなるため、この方法は推奨しない。
			li appearanceの指定を無効している関係でポインターのサイズが0となっているのでポインターのサイズ指定は必ず行う必要がある。

	section
		h2 参考リンク
		p
			a(href='https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-slider-thumb', target='_blank', rel='external noopener') MDN Web Docs / ::-webkit-slider-thumb (English)
			br
			a(href='https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-slider-runnable-track', target='_blank', rel='external noopener') MDN Web Docs / ::-webkit-slider-runnable-track (English)
			br
			a(href='https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-thumb', target='_blank', rel='external noopener') MDN Web Docs / ::-moz-range-thumb (English)
			br
			a(href='https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-track', target='_blank', rel='external noopener') MDN Web Docs / ::-moz-range-track (English)
			br
			a(href='https://www.w3schools.com/howto/howto_js_rangeslider.asp', target='_blank', rel='external noopener') W3Schools (English)
</template>

<style scoped lang="scss">
fieldset {
	padding: 15px;
	color: #000000;
	border: 2px solid #FFFFFF;
	background-color: #9999CC;
}

legend {
	padding: 0.25rem 0.75rem;
	line-height: 1;
	color: #FFFFFF;
	border: 2px solid #FFFFFF;
	background-color: #000011;
}

input[type="range"] {
	box-sizing: border-box;
	width: 70%;
	max-width: 600px;

	&.slider {
		height: 5px;
		opacity: 0.7;
		border-radius: 10px;
		outline: none;
		background: #CCCCCC;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		&::-webkit-slider-thumb {
			box-sizing: border-box;
			width: 25px;
			height: 25px;
			min-height: 25px;
			cursor: pointer;
			border: 2px outset #CCCCCC;
			border-right-style: inset;
			border-bottom-style: inset;
			border-radius: 50%;
			background: #FFFF33;
			-webkit-appearance: none;
			appearance: none;
		}

		&::-moz-slider-thumb {
			box-sizing: border-box;
			width: 25px;
			height: 25px;
			cursor: pointer;
			border: 2px outset #CCCCCC;
			border-right-style: inset;
			border-bottom-style: inset;
			border-radius: 50%;
			background: #FFFF33;
			-moz-appearance: none;
			appearance: none;
		}
	}
}

@media (prefers-color-scheme: light) {
	fieldset {
		border-color: #CCCCCC;
	}

	legend {
		color: #000000;
		border-color: #CCCCCC;
		background-color: #FFFFFF;
	}
}
</style>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

export default {
	data() {
		return {
			header: {
				title: 'スライダーレイアウト',
			},
		};
	},
	mounted() {
		Prism.highlightAll();
		// Prism.fileHighlight();
		this.updateHeader();
	},
	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('updateHeader', this.header.title);
		},
	},
};
</script>
