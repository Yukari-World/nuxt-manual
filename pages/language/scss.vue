<template lang="pug">
.category--language.page--scss
	AlertStub

	section
		h2 説明
		p 記述前

	section
		h2 記述方法
		p
			| 記述方法はCSSに近い。内部に要素を指定していくことで階層を表す事が出来る。
			| この記述方法はPostCSSでも使用する事が出来る。
		h4 SCSS
		BlockCode.language-scss: pre.
			h1, h2, h3, h4, h5, h6 {
				font-family: "游ゴシック体", "Yu Gothic", "YuGothic", "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", "Osaka", "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
			}

			ul {
				list-style: none;

				li {
					&amp;:not(:first-child) {
						margin-top: 5px;
					}
				}

				ul {
					margin-left: 2em;
				}
			}

			@keyframes flashString {
				0% {
					color: #FFFFFF;
					text-shadow: unset;
				}

				90% {
					color: #FFFFFF;
					text-shadow: 0 0 10px rgba(255, 255, 255, 0);
				}

				95% {
					color: #FFFF66;
					text-shadow: 0 0 10px #FFFF66;
				}

				100% {
					color: #FFFFFF;
					text-shadow: 0 0 10px rgba(255, 255, 255, 0);
				}
			}

		p これを出力した場合、以下のように出力される。尚、Gulpコンパイル時、様々な追加処理を行っている都合上通常の結果と異なる場合がある。
		h4 CSS
		BlockCode.language-css: pre.
			h1, h2, h3, h4, h5, h6 {
				font-family: 游ゴシック体,Yu Gothic,YuGothic,ヒラギノ角ゴシック Pro,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,Osaka,ＭＳ Ｐゴシック,MS PGothic,sans-serif;
			}

			ul {
				list-style: none;
			}

			ul li:not(:first-child) {
				margin-top: 5px;
			}

			ul ul {
				margin-left: 2em;
			}

			@keyframes flashString {
				0% {
					color: #FFFFFF;
					text-shadow: unset;
				}

				90% {
					color: #FFFFFF;
					text-shadow: 0 0 10px rgba(255, 255, 255, 0);
				}

				95% {
					color: #FFFF66;
					text-shadow: 0 0 10px #FFFF66;
				}

				100% {
					color: #FFFFFF;
					text-shadow: 0 0 10px rgba(255, 255, 255, 0);
				}
			}

	section
		h2 拡張機能
		h3 変数
		p Sass及びSCSSでは変数を使用することができる。また、変数を演算に使用することができる。
		h4 SCSS
		BlockCode.language-scss: pre.
			$gradation-pattern: linear-gradient(to right, #000011, #1164FF, #FFFF99);
			$background-color: #000011;
			$footer-line: 5px;

			body {
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				font-family: "メイリオ", "Meiryo", sans-serif;
				font-size: 14px;
				color: #FFFFFF;
				background-color: $background-color;
			}

			footer {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 3px;
				padding-top: 5px;
				padding-bottom: 5px;
				border-width: 0;
				border-style: solid;
				border-top-width: $footer-line;
				border-bottom-width: $footer-line * 3;
				// 間に式を使う場合は\#{}で囲む
				border-image: $gradation-pattern 1 / \#{$footer-line} 0 \#{$footer-line * 3} / 0 stretch;
			}

		h4 CSS
		BlockCode.language-css: pre.
			body {
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				font-family: メイリオ,Meiryo,sans-serif;
				font-size: 14px;
				color: #FFFFFF;
				background-color: #000011;
			}

			footer {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 3px;
				padding-top: 5px;
				padding-bottom: 5px;
				border-width: 5px 0 15px;
				border-style: solid;
				border-image: linear-gradient(90deg, #000011, #1164FF, #FFFF99) 1/5px 0 15px/0 stretch;
			}

		h3 レスポンシブ
		p
			| タグ内に
			code.language-scss: span.token.keyword @media
			| タグを記述することで簡単にレスポンシブ対応ができる。
		h4 SCSS
		BlockCode.language-scss: pre.
			$gradation-pattern: linear-gradient(to right, #000011, #1164FF, #FFFF99);

			footer {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 3px;
				padding-top: 5px;
				padding-bottom: 5px;
				border-width: 0;
				border-style: solid;
				border-top-width: 5px;
				border-bottom-width: 15px;
				border-image: $gradation-pattern 1/5px 0 15px/0 stretch;

				@media only screen and (max-width: 768px) {
					flex-direction: column-reverse;
				}

				p {
					@media only screen and (max-width: 768px) {
						box-sizing: border-box;
						width: 100%;
					}

					&amp;:first-child {
						padding: 0 0 0 10px;

						b {
							font-weight: 900;
						}
					}

					&amp;:last-child {
						margin-left: 2em;
						text-align: right;
						white-space: nowrap;
					}

					@media only screen and (max-width: 768px) {
						margin-bottom: 15px;
						margin-left: 0;
					}

					@media only screen and (max-width: 576px) {
						white-space: normal;
					}
				}
			}

		h4 CSS
		p
			| 出力結果。以下の通り
			code.language-scss: span.token.keyword @media
			| タブは要素分だけ個別で出力されるため、何らかの整形ツールで纏めると見栄え等で良くなる。
		BlockCode.language-css: pre.
			footer {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 3px;
				padding-top: 5px;
				padding-bottom: 5px;
				border-width: 5px 0 15px;
				border-style: solid;
				border-image: linear-gradient(90deg, #000011, #1164FF, #FFFF99) 1/5px 0 15px/0 stretch;
			}

			footer p:first-child {
				padding: 0 0 0 10px;
			}

			footer p:first-child b {
				font-weight: 900;
			}

			footer p:last-child {
				margin-left: 2em;
				text-align: right;
				white-space: nowrap;
			}

			@media only screen and (max-width: 768px) {
				footer {
					flex-direction: column-reverse;
				}
			}

			@media only screen and (max-width: 768px) {
				footer p {
					box-sizing: border-box;
					width: 100%;
				}
			}

			@media only screen and (max-width: 768px) {
				footer p:last-child {
					margin-bottom: 15px;
					margin-left: 0;
				}
			}

			@media only screen and (max-width: 576px) {
				footer p:last-child {
					white-space: normal;
				}
			}

		p
			| また
			code.language-scss: span.token.keyword @media
			| タブは幾つかの要素に分割することもできる。
		h4 SCSS
		BlockCode.language-scss: pre.
			$gradation-pattern: linear-gradient(to right, #000011, #1164FF, #FFFF99);

			footer {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 3px;
				padding-top: 5px;
				padding-bottom: 5px;
				border-width: 0;
				border-style: solid;
				border-top-width: 5px;
				border-bottom-width: 15px;
				border-image: $gradation-pattern 1/5px 0 15px/0 stretch;

				@media only screen {
					@media (max-width: 768px) {
						flex-direction: column-reverse;
					}
				}
			}

		h4 CSS
		BlockCode.language-css: pre.
			footer {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 3px;
				padding-top: 5px;
				padding-bottom: 5px;
				border-width: 5px 0 15px;
				border-style: solid;
				border-image: linear-gradient(90deg, #000011, #1164FF, #FFFF99) 1/5px 0 15px/0 stretch;
			}

			@media only screen and (max-width: 768px) {
				footer {
					flex-direction: column-reverse;
				}
			}

	section
		h2 最後に
		p かつてHTML時代のマニュアルに使われていたSCSSファイルを置いているので参考程度に。
		BlockCode(data-src="/sass/style.scss", data-download-link)

	section
		h2 リンク
		a(href="http://scss-lang.com/", title="Sass: Syntactically Awesome Style Sheets", target="_blank", rel="external noopener") Sass(Syntactically Awesome Style Sheets)(SCSS)
</template>

<script setup lang="ts">
import { highlightAll, plugins } from 'prismjs';
import { useIndexStore } from '@/store/index';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'SCSS' });
const indexStore = useIndexStore();


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	highlightAll();
	plugins.fileHighlight.highlight();
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>
