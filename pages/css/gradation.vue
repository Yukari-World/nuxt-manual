<template lang="pug">
div
	section
		h2 グラデーション
		p HTML上でのグラデーションはいくつか方法があるがその一例

	section
		h2 使用方法と解説
		pre.language-css.line-numbers: code
			| background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
		.yw-gradient1
		p
			a(href='https://dyaddemo.wordpress.com/', title='Dyad – A theme that pairs well with any content', target='_blank', rel='external noopener') dyad
			| で使用されている直線グラデーション。
			br
			| 下から上に半透明の黒のグラデーションを行う。
			br
			| なお、
			code.language-css: span.token.property background
			| プロパティは
			code.language-css: span.token.property background
			| の各プロパティのショートハンドとして補完しており、
			code.language-css: span.token.property background-image
			| に対して適応する。

		pre.language-css.line-numbers: code
			| background: linear-gradient(45deg, red, blue);
		.yw-gradient2
		p
			a(href='https://developer.mozilla.org/ja/docs/Web/CSS/linear-gradient', target='_blank', rel='external noopener') MDN Web Docs
			| に公開されている例。対角線上に赤から青となるグラデーションが生成される。

		pre.language-css.line-numbers: code
			| background: linear-gradient(to top, #004B24 0%, #DBE5E0 86.45%, #FFFFFF 100%);
		.yw-gradient3
		p 三色グラデーションの例。カンマで繋ぐ事で複数色設定できる。更に割合を指定することで色の変わり目の位置を指定することができる。

		pre.language-css.line-numbers: code
			| background: linear-gradient(to right, #000011, #1164FF, #FFFF99);
		.yw-gradient4
		p 本マニュアルで使用されているグラデーション。%表記が省略された場合は色の変わり目が要素のサイズに対して均等な位置になるように位置が割り振られる(この場合は2個目の要素が50%の位置に来るように割り振られる)。左側の色は背景色と同じ色のため殆ど見えない。尚、このマニュアルの背景は黒ではない。

	section
		h2 使用上の注意
		ul
			li これらのCSSはブラウザ間の互換性が低い点に注意が必要。特にIEや古いスマートフォンを利用しているユーザーからは見えない可能性もある。対処としてはこれとは別に背景画像を用意することで完全ではないものの回避できる。
			li
				| グラデーションは
				b 画像扱い
				| であるため、取扱の間違いには注意。backgroundやborderに指定する場合
				code.language-markup color
				| ではなく、
				code.language-markup image
				| に指定する。
			li 複数利用する場合、スペックによっては表示速度に著しく影響するので注意が必要。対処法としてグラデーション背景を用意する方法がある。
			li
				| 画像タグ(
				code.language-markup
					span.token.punctuation &lt;
					span.token.tag img
					span.token.punctuation &gt;
				| )に対して適応する場合、beforeに付与する必要がある。また、必要に応じて
				code.language-css
					span.token.property z-index
				| による重なりを気にする必要がある。
			li 複数のブラウザで実装する場合、ベンダープレフィックスを忘れずに。gulpで自動付与する方法もあるが、詳細はgulpの項目を参照。

	section
		h2 参考リンク
		p
			a(href='https://developer.mozilla.org/ja/docs/Web/CSS/linear-gradient', target='_blank', rel='external noopener') MDN Web Docs
</template>

<script lang="ts">
import Vue from 'vue';
import { highlightAll } from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'グラデーション',
			},
		};
	},
	head(): object {
		return {
			title: this.header.title,
		};
	},
	mounted() {
		highlightAll();
		// plugins.fileHighlight.highlight();
		this.updateHeader();
	},
	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('update-header', this.header.title);
		},
	},
});
</script>

<style scoped lang="scss">
.yw-gradient1, .yw-gradient2, .yw-gradient3, .yw-gradient4 {
	width: 350px;
	height: 200px;
	margin: 5px auto;
	border-radius: 10px;
}

.yw-gradient1 {
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), #FFFFFF;
}

.yw-gradient2 {
	background: linear-gradient(45deg, red, blue), #FFFFFF;
}

.yw-gradient3 {
	background: linear-gradient(to top, #004B24 0%, #DBE5E0 86.45%, #FFFFFF 100%), #FFFFFF;
}

.yw-gradient4 {
	background: linear-gradient(to right, #000011, #1164FF, #FFFF99), #FFFFFF;
}
</style>
