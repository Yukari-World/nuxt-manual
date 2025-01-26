<template lang="pug">
.category--language.page--sass
	AlertStub

	section
		h2 Sassとは

	section
		h2 記述方法
		p 記述方法はRubyやPugに近い。タブで階層を示し、セミコロンと括弧は必要としない。
		h4 Sass
		BlockCode.language-sass {{ CBSassSample }}

		p これを出力した場合、以下のように出力される。尚、Gulpコンパイル時、様々な追加処理を行っている都合上通常の結果と異なる場合がある。
		h4 CSS
		BlockCode.language-css {{ CBCssSample }}

	section
		h2 拡張機能
		h3 変数
		p Sass及びSCSSでは変数を使用することができる。また、変数を演算に使用することができる。
		h4 Sass
		BlockCode.language-sass {{ CBSassVariable }}

		h4 CSS
		BlockCode.language-css {{ CBCssVariable }}

		h3 レスポンシブ
		p
			| タグ内に
			TextToken(type="sass").token.atrule @media
			| タグを記述することで簡単にレスポンシブ対応ができる。
		h4 Sass
		BlockCode.language-sass {{ CBSassMedia01 }}

		h4 CSS
		p
			| 出力結果。以下の通り
			TextToken(type="sass").token.atrule @media
			| タブは要素分だけ個別で出力されるため、何らかの整形ツールで纏めると見栄え等で良くなる。
		BlockCode.language-css {{ CBCssMedia01 }}

		p
			| また
			TextToken(type="sass").token.atrule @media
			| タブは幾つかの要素に分割することもできる。
		h4 Sass
		BlockCode.language-sass {{ CBSassMedia02 }}

		h4 CSS
		BlockCode.language-css {{ CBCssMedia02 }}

	section
		h2 変換方法
		p Sassはテンプレートエンジンであるため、そのままではCSSとして認識されない。そのため変換する必要がある。これはその一例である。
		h3 Vueで使用
		p Vueで使用する場合、sassパッケージをインストールするだけで機能するため、特別な変換は必要としない
		ol
			li
				p プロジェクトパッケージにがあるフォルダに移動し、以下のコマンドを入力を行う。Sassを利用する場合もこのパッケージで行う。
				BlockCode.language-batch: pre npm i -D sass
			li
				p Vueファイルを作成し、スタイルを使用する時に以下のように記述する。
				BlockCode.language-markup {{ CBUseSass }}

		section
			h2 最後に
			p このマニュアルはSCSSをSassに変換したファイルを置いているので参考程度に。
			BlockCode(data-src="/sass/buildSass.sass", data-download-link)

	section
		h2 リンク
		a(href="http://sass-lang.com/", target="_blank", rel="external noopener") Sass: Syntactically Awesome Style Sheets
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'Sass' });
const indexStore = useIndexStore();

const CBSassSample = ref(`h1, h2, h3, h4, h5, h6
	font-family: "游ゴシック体", "Yu Gothic", "YuGothic", "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", "Osaka", "ＭＳ Ｐゴシック", "MS PGothic", sans-serif

ul
	list-style: none

	li
		&:not(:first-child)
			margin-top: 5px

	ul
		margin-left: 2em

@keyframes flashString
	0%
		color: #FFFFFF
		text-shadow: unset

	90%
		color: #FFFFFF
		text-shadow: 0 0 10px rgba(255, 255, 255, 0)

	95%
		color: #FFFF66
		text-shadow: 0 0 10px #FFFF66

	100%
		color: #FFFFFF
		text-shadow: 0 0 10px rgba(255, 255, 255, 0)`);

const CBCssSample = ref(`h1, h2, h3, h4, h5, h6 {
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
}`);

const CBSassVariable = ref(`$gradation-pattern: linear-gradient(to right, #000011, #1164FF, #FFFF99)
$background-color: #000011
$footer-line: 5px

body
	display: flex
	justify-content: space-between
	align-items: flex-start
	font-family: "メイリオ", "Meiryo", sans-serif
	font-size: 14px
	color: #FFFFFF
	background-color: $background-color

footer
	display: flex
	justify-content: space-between
	align-items: center
	margin-top: 3px
	padding-top: 5px
	padding-bottom: 5px
	border-width: 0
	border-style: solid
	border-top-width: $footer-line
	border-bottom-width: $footer-line * 3
	// 間に式を使う場合は#{}で囲む
	border-image: $gradation-pattern 1 / #{$footer-line} 0 #{$footer-line * 3} / 0 stretch`);

const CBCssVariable = ref(`body {
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
}`);

const CBSassMedia01 = ref(`$gradation-pattern: linear-gradient(to right, #000011, #1164FF, #FFFF99)

footer
	display: flex
	justify-content: space-between
	align-items: center
	margin-top: 3px
	padding-top: 5px
	padding-bottom: 5px
	border-width: 0
	border-style: solid
	border-top-width: 5px
	border-bottom-width: 15px
	border-image: $gradation-pattern 1/5px 0 15px/0 stretch

	@media only screen and (max-width: 768px)
		flex-direction: column-reverse

	p
		@media only screen and (max-width: 768px)
			box-sizing: border-box
			width: 100%


		&:first-child
			padding: 0 0 0 10px

			b
				font-weight: 900

		&:last-child
			margin-left: 2em
			text-align: right
			white-space: nowrap

			@media only screen and (max-width: 768px)
				margin-bottom: 15px
				margin-left: 0

			@media only screen and (max-width: 576px)
				white-space: normal`);

const CBCssMedia01 = ref(`footer {
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
}`);

const CBSassMedia02 = ref(`$gradation-pattern: linear-gradient(to right, #000011, #1164FF, #FFFF99)

footer
	display: flex
	justify-content: space-between
	align-items: center
	margin-top: 3px
	padding-top: 5px
	padding-bottom: 5px
	border-width: 0
	border-style: solid
	border-top-width: 5px
	border-bottom-width: 15px
	border-image: $gradation-pattern 1/5px 0 15px/0 stretch

	@media only screen
		@media (max-width: 768px)
			flex-direction: column-reverse`);

const CBCssMedia02 = ref(`footer {
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
}`);

const CBUseSass = ref(`<style lang="sass">
// ここにスタイルを記述する
</style>`);


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

<style lang="sass">
ul
	text-align: normal
</style>
