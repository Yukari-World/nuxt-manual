<template lang="pug">
div
	section
		h2 説明
		p スマートフォン等のブラウザでは表示できる情報量の違いで改行してほしくない場合が発生する。この改行をCSSで簡単に無効にする方法が存在するため記述する。

	section
		h2 使用方法と解説
		p 非常に単純なため、細かい説明は省略する。
		pre.language-css.line-numbers: code.
			br {
				display: none;
			}

		p 再度有効にする場合、以下の方法で行う。
		pre.language-css.line-numbers: code.
			br {
				display: inline;
			}

	section
		h2 使用上の注意
		ul
			li HTML文字の間に改行やタブ等があると不自然な隙間が発生するのでできるだけ文字を詰めることを推奨する。
			li classを利用して有効なタグを指定することもできる。

	section
		h2 参考リンク
		p
			a(href='https://www.msng.info/archives/2013/03/turning-off-html-br-with-css.php', target='_blank', rel='external noopener') HTML の br タグを CSS だけで消す方法 - 頭ん中
</template>

<script lang="ts">
import Vue from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-css';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'brタグによる改行を無効化',
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
