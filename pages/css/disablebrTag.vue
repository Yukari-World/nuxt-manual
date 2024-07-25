<template lang="pug">
.category--css.page--disable-br-tag
	section
		h2 説明
		p スマートフォン等のブラウザでは表示できる情報量の違いで改行してほしくない場合が発生する。この改行をCSSで簡単に無効にする方法が存在するため記述する。

	section
		h2 使用方法と解説
		p 非常に単純なため、細かい説明は省略する。
		BlockCode.language-css {{ CBNone }}

		p 再度有効にする場合、以下の方法で行う。
		BlockCode.language-css {{ CBActive }}

	section
		h2 使用上の注意
		ul
			li HTML文字の間に改行やタブ等があると不自然な隙間が発生するのでできるだけ文字を詰めることを推奨する。
			li classを利用して有効なタグを指定することもできる。

	section
		h2 参考リンク
		p
			a(href="https://www.msng.info/archives/2013/03/turning-off-html-br-with-css.php", target="_blank", rel="external noopener") HTML の br タグを CSS だけで消す方法 - 頭ん中
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'brタグによる改行を無効化' });
const indexStore = useIndexStore();

const CBNone = ref(
`br {
	display: none;
}`);

const CBActive = ref(
`br {
	display: inline;
}`);


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
