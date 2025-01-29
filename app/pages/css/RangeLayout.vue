<template lang="pug">
.category--css.page--range-layout
	AlertNonStandard

	section
		h2 説明
		p aa

	section
		h2 使用方法と解説

		p
			| 本題に入る前に、本ページでは以下のCSSを適応している。
			br
			TextTag input type="range"
			| の使い方は別ページを参照。

		BlockCode.language-css: pre.
			input[type="range"] {
				box-sizing: border-box;
				width: 70%;
				max-width: 600px;
			}

		p HTMLは以下の通りである。
		BlockCode.language-html: pre.
			&lt;input type="range" min="0" max="1000" step="1" value="500"&gt;

		fieldset
			legend デフォルト
			input(type="range", min="0", max="1000", step="1", value="500")

		BlockCode.language-css: pre.
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
			input.yw-slider(type="range", min="0", max="1000", step="1", value="500")

	section
		h2 使用上の注意
		ul
			li
				span.text-decoration-line-through Microsoft Edgeではwebkitの仕様が採用されるが、スライダーのポインターは範囲をはみ出して表示する事は出来ない。
				br
				| バージョンアップでChromiumベースへと変更されたことで、現在この不具合は発生しない。
			li visibilityを使用することでポインターを消すとこができる。なお、display: noneでは数値が編集できなくなるため、この方法は推奨しない。
			li appearanceの指定を無効している関係でポインターのサイズが0となっているのでポインターのサイズ指定は必ず行う必要がある。

	section
		h2 参考リンク
		p
			NuxtLink(to="https://developer.mozilla.org/ja/docs/Web/CSS/::-webkit-slider-thumb", target="_blank", rel="external noopener") MDN Web Docs / ::-webkit-slider-thumb
			br
			NuxtLink(to="https://developer.mozilla.org/ja/docs/Web/CSS/::-webkit-slider-runnable-track", target="_blank", rel="external noopener") MDN Web Docs / ::-webkit-slider-runnable-track
			br
			NuxtLink(to="https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-thumb", target="_blank", rel="external noopener") MDN Web Docs / ::-moz-range-thumb (English)
			br
			NuxtLink(to="https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-track", target="_blank", rel="external noopener") MDN Web Docs / ::-moz-range-track (English)
			br
			NuxtLink(to="https://www.w3schools.com/howto/howto_js_rangeslider.asp", target="_blank", rel="external noopener") W3Schools (English)
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'スライダーレイアウト' });
const indexStore = useIndexStore();


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>

<style lang="scss">
.category--css {
	&.page--range-layout {
		fieldset {
			min-height: 50px;
			padding: 15px;
			color: #000000;
			background-color: #9999CC;
			border: 2px solid #FFFFFF;
		}

		legend {
			padding: 0.25rem 0.75rem;
			line-height: 1;
			color: #FFFFFF;
			background-color: #000011;
			border: 2px solid #FFFFFF;
		}

		input[type="range"] {
			box-sizing: border-box;
			width: 70%;
			max-width: 600px;

			&.yw-slider {
				height: 5px;
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				background: #CCCCCC;
				border-radius: 10px;
				outline: none;
				opacity: 0.7;

				&::-webkit-slider-thumb {
					box-sizing: border-box;
					width: 25px;
					height: 25px;
					min-height: 25px;
					-webkit-appearance: none;
					appearance: none;
					cursor: pointer;
					background: #FFFF33;
					border: 2px outset #CCCCCC;
					border-right-style: inset;
					border-bottom-style: inset;
					border-radius: 50%;
				}

				&::-moz-slider-thumb {
					box-sizing: border-box;
					width: 25px;
					height: 25px;
					-moz-appearance: none;
					appearance: none;
					cursor: pointer;
					background: #FFFF33;
					border: 2px outset #CCCCCC;
					border-right-style: inset;
					border-bottom-style: inset;
					border-radius: 50%;
				}
			}
		}

		@media (prefers-color-scheme: light) {
			fieldset {
				border-color: #CCCCCC;
			}

			legend {
				color: #000000;
				background-color: #FFFFFF;
				border-color: #CCCCCC;
			}
		}
	}
}
</style>
