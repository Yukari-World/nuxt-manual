<template lang="pug">
div
	section
		h2 説明
		p 背景に画像と画像、画像とグラデーションを重ねる機会が増えてきたため、幾つかその例を取り上げる。

	section
		h2 使用方法と解説
		pre.language-css.line-numbers: code.
			.header-background {
				background: linear-gradient(to top, rgba(0, 100, 111, 0.6) 0%, rgba(0, 75, 36, 0) 100%) repeat-x bottom/50% 100%, url(./img/robert-lukeman-150146.jpg) no-repeat bottom/100%;
			}

		.layer1

		p グラデーションと背景画像を重ねる1行指定の例。background要素が非常に長くなっているが、それよりも重要なのは右の要素から左の要素へ重ねられていく点である。
		pre.language-css.line-numbers: code.
			.header-background {
				background-image: linear-gradient(to top, rgba(0, 100, 111, 0.6) 0%, rgba(0, 75, 36, 0) 100%), url(./img/robert-lukeman-150146.jpg);
				background-repeat: repeat-x, no-repeat;
				background-position: bottom, bottom;
				background-size: 50% 100%, 100%;
			}

		.layer2
		p 分解した時の内容。カンマを使うことで複数枚指定する事が出来る。こちらも同様に右の要素が下のレイヤーに来る。

	section
		h2 使用上の注意
		ul
			li wordpressのヘッダー画像でヘッダー画像のカスタマイズ項目を使用する場合、この方法は推奨されない。styleタグもしくはstyle要素で直接記述する方法を利用しない限り使用することができないためである。

	section
		h2 参考リンク
		p
			a(href='https://www.webcreatorbox.com/tech/css-blend-mode', target='_blank', rel='external noopener') CSSブレンドモードで画像を彩ろう | Webクリエイターボックス
</template>

<script lang="ts">
import Vue from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-css';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'backgroundを重ねる',
			},
		};
	},
	head(): object {
		return {
			title: this.header.title,
		};
	},
	mounted() {
		Prism.highlightAll();
		// Prism.plugins.fileHighlight.highlight();
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
.layer1,
.layer2 {
	width: 350px;
	height: 200px;
	margin: 5px auto;
	border-radius: 10px;
}

.layer1 {
	background: linear-gradient(to top, rgba(0, 100, 111, 0.6) 0%, rgba(0, 75, 36, 0) 100%) repeat-x bottom/50% 100%, url(/img/robert-lukeman-150146.jpg) no-repeat bottom/100%;
}

.layer2 {
	background-image: linear-gradient(to top, rgba(0, 100, 111, 0.6) 0%, rgba(0, 75, 36, 0) 100%), url(/img/robert-lukeman-150146.jpg);
	background-repeat: repeat-x, no-repeat;
	background-position: bottom, bottom;
	background-size: 50% 100%, 100%;
}
</style>
