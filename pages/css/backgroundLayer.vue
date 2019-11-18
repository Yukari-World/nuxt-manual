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

<style scoped lang="scss">
.layer1,
.layer2 {
	width: 350px;
	height: 200px;
	margin: 5px auto;
	border-radius: 10px;
}

.layer1 {
	background: linear-gradient(to top, rgba(0, 100, 111, 0.6) 0%, rgba(0, 75, 36, 0) 100%) repeat-x bottom/50% 100%,
		url(/img/robert-lukeman-150146.jpg) no-repeat bottom/100%;
}

.layer2 {
	background-image: linear-gradient(to top, rgba(0, 100, 111, 0.6) 0%, rgba(0, 75, 36, 0) 100%),
		url(/img/robert-lukeman-150146.jpg);
	background-repeat: repeat-x, no-repeat;
	background-position: bottom, bottom;
	background-size: 50% 100%, 100%;
}
</style>

<script>
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-css';

import 'prismjs/plugins/autolinker/prism-autolinker';
import 'prismjs/plugins/autoloader/prism-autoloader';
import 'prismjs/plugins/command-line/prism-command-line';
import 'prismjs/plugins/data-uri-highlight/prism-data-uri-highlight';
import 'prismjs/plugins/file-highlight/prism-file-highlight';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/show-language/prism-show-language';

export default {
	title: 'test',
	data() {
		return {
			header: {
				title: 'backgroundを重ねる'
			}
		};
	},
	mounted() {
		Prism.highlightAll();
		Prism.fileHighlight();
		this.updateHeader();
	},
	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('updateHeader', this.header.title);
		}
	}
};
</script>
