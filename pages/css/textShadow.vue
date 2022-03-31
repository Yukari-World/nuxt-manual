<template lang="pug">
div
	section
		h2 説明
		p 画像の上に文字を出力させる時、白地に白文字や黒地に黒文字といったことが発生することがある。これは可読性に大きく影響する。しかし、文字装飾を付与することで可読性の向上を望める場合がある。

	section
		h2 使用方法と解説
		h3 基本的な使い方
		pre.language-css.line-numbers: code.
			text-shadow: 0 0 6px #000000;
		.yw-exsample-area.yw-exsample1
			p I was once an adventurer like you;then I took an arrow in the knee.
		p 文字の真下にぼかし6pxの黒の影を付与する。数値が小さい程文字の原型が残り、大きくなる程ぼやけたようになる。

		h4 値が小さい場合
		pre.language-css.line-numbers: code.
			text-shadow: 0 0 2px #000000;
		.yw-exsample-area.yw-exsample1-1
			p I was once an adventurer like you;then I took an arrow in the knee.

		h4 値が大きい場合
		pre.language-css.line-numbers: code.
			text-shadow: 0 0 10px #000000;
		.yw-exsample-area.yw-exsample1-2
			p I was once an adventurer like you;then I took an arrow in the knee.

		h3 複数の影をつける
		pre.language-css.line-numbers: code.
			text-shadow: 5px 5px 2px #0000FF, -5px -5px 1px #FF0000;
		.yw-exsample-area.yw-exsample2
			p I was once an adventurer like you;then I took an arrow in the knee.
		p 赤と青の影を付与する。カンマを使用することで複数定義することができる。数の制限は特にないが、あくまで装飾に過ぎず、多く指定し過ぎると却って可読性を損なう要因となる。

	section
		h2 使用上の注意
		ul
			li 文字色と背景に合わせて文字装飾の色を調整することを忘れずに。

	section
		h2 参考リンク
		p
			a(href='https://developer.mozilla.org/ja/docs/Web/CSS/text-shadow', target='_blank', rel='external noopener') MDN Web Docs
</template>

<script lang="ts">
import Vue from 'vue';
import { highlightAll } from 'prismjs';

import 'prismjs/components/prism-css';

export default Vue.extend({
	data() {
		return {
			header: {
				title: '文字装飾による可読性の向上',
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
.yw-exsample-area {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 500px;
	height: 200px;
	margin: 5px auto;
	color: #000000;
	border-radius: 10px;
	background-color: #F5F9FA;
}

.yw-exsample1 {
	text-shadow: 0 0 6px #000000;
}

.yw-exsample1-1 {
	text-shadow: 0 0 2px #000000;
}

.yw-exsample1-2 {
	text-shadow: 0 0 10px #000000;
}

.yw-exsample2 {
	text-shadow: 5px 5px 2px #0000FF, -5px -5px 1px #FF0000;
}
</style>
