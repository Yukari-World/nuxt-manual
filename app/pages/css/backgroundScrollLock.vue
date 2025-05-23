<template lang="pug">
.category--css.page--background-scroll-lock
	section
		h2 説明
		p Parallaxの一つに背景のスクロールを固定させたままでコンテンツをスクロールさせる方法がある。これはその一例である。

	section
		h2 使用方法と解説
		BlockCode.language-css {{ CB01 }}

		.yw-layer1
		p
			TextToken(type="css").property background
			| で1行に収める場合の記述方法。詰め込み過ぎているあまり理解し辛いと思われるので、これを細かな単位に分解する。

		BlockCode.language-css {{ CB02 }}

		.yw-layer2
		p 上の内容を分解した時の内容。カンマを利用することで細かく分解した場合でも複数の背景を指定することができる。
			br
			TextToken(type="css").property background
			| プロパティは以下の各プロパティのショートハンド(幾つかのスタイル設定を一括で行うこと。例えば、
			TextToken(type="css").property margin
			| 、
			TextToken(type="css").property padding
			| 、
			TextToken(type="css").property border
			| 等もこれに該当する)として補完している。ここで表示されているプロパティの値は各初期値である。

		BlockCode.language-css {{ CB03 }}

		p ここで重要なのは
			TextToken(type="css").property background-attachment
			| 。これにfixedを指定する事により、画像がスクロールされなくなる。

	section
		h2 使用上の注意
		ul
			li 1行指定の場合、複雑化しすぎるのでソースコードの短縮を望む場合を除けば避けるべきである。Sass/SCSSを使用している場合、Node.jsにコンパイル時に短縮化してくれるpackageが存在するのでそちらを使用したほうがミスが少なくなる。
			li モバイル端末のブラウザではこの方法では実装することができない(MDNでは利用可とはなっているが)。実装方法はあるが非常に複雑なためここでは省略する。

	section
		h2 おまけ SCSSで記述
		p SCSSで記述する場合、以下のように記述しても同様のことを行うことができる。
		h3 SCSS(Input)
		BlockCode.language-scss {{ CB04 }}

		h3 CSS(Output)
		BlockCode.language-scss {{ CB05 }}

	section
		h2 参考リンク
		p
			a(href="https://developer.mozilla.org/ja/docs/Web/CSS/background", target="_blank", rel="external noopener") MDN Web Docs
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: '背景画像スクロールの固定' });
const indexStore = useIndexStore();

const CB01 = ref(`.header-background {
	background: linear-gradient(to top, rgba(0, 100, 111, 0.6) 0%, rgba(0, 75, 36, 0) 100%) repeat-x 0 100px/100% 50% local, url(./img/nicholas-loo-372788.jpg) repeat top left center;
}`);

const CB02 = ref(`.header-background {
	background-image: linear-gradient(to top, rgba(0, 100, 111, 0.6) 0%, rgba(0, 75, 36, 0) 100%), url(./img/nicholas-loo-372788.jpg);
	background-repeat: repeat-x, repeat;
	background-position: 0 100px, top center;
	background-size: 100% 50%, auto;
	background-attachment: local, fixed;
}`);

const CB03 = ref(`background-image: none;/* 背景画像指定 */
background-position: 0% 0%;/* 背景画像の位置指定 */
background-size: auto auto;/* 背景画像の大きさを指定 */
background-repeat: repeat;/* 背景画像のループ指定 */
background-origin: padding-box;
background-clip: border-box;
background-attachment: scroll;/* 背景画像のスクロール指定 */
background-color: transparent;/* 背景色の指定 */`);

const CB04 = ref(`.header-background {
	background: {
		image: linear-gradient(to top, rgba(0, 100, 111, 0.6) 0%, rgba(0, 75, 36, 0) 100%), url(./img/nicholas-loo-372788.jpg);
		repeat: repeat-x, repeat;
		position: 0 100px, top center;
		size: 100% 50%, auto;
		attachment: local, fixed;
	}
}`);

const CB05 = ref(`.header-background {
	background-image: linear-gradient(to top, rgba(0, 100, 111, 0.6) 0%, rgba(0, 75, 36, 0) 100%), url(./img/nicholas-loo-372788.jpg);
	background-repeat: repeat-x, repeat;
	background-position: 0 100px, center;
	background-size: 100% 50%, auto;
	background-attachment: local, fixed;
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

<style lang="scss">
.category--css {
	&.page--background-scroll-lock {
		.yw-layer1, .yw-layer2 {
			width: 80%;
			max-width: 800px;
			height: 200px;
			margin: 5px auto;
			border-radius: 10px;
		}

		.yw-layer1 {
			background: linear-gradient(to top, rgba(0, 100, 111, 0.6) 0%, rgba(0, 75, 36, 0) 100%) repeat-x 0 100px / 100% 50% local, url("/img/nicholas-loo-372788.jpg") repeat top center fixed;
		}

		.yw-layer2 {
			background-image: linear-gradient(to top, rgba(0, 100, 111, 0.6) 0%, rgba(0, 75, 36, 0) 100%), url("/img/nicholas-loo-372788.jpg");
			background-repeat: repeat-x, repeat;
			background-attachment: local, fixed;
			background-position: 0 100px, top center;
			background-size: 100% 50%, auto;
		}

		@media only screen and (max-width: 992px) {
			.yw-layer1, .yw-layer2 {
				background-position: 0 100px, top left 10vw;
			}
		}
	}
}
</style>
