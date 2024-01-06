<template lang="pug">
.category--css.page--fade-in
	section
		h2 説明
		p 下から上へのコンテンツフェードインが要求されることが多いためその一例を記述する。

	section
		h2 使用方法と解説

		h3 CSS
		BlockCode.language-css: pre.
			.area {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-evenly;
			}

			@supports (-ms-ime-align: auto) or ((-webkit-text-size-adjust: none) and (-webkit-marquee-repetition: infinite) and (object-fit: fill)) {
				.area {
					justify-content: space-around;
				}
			}

			.area .anim {
				width: 30vw;
				max-width: 250px;
				height: 30vw;
				max-height: 250px;
				margin-bottom: 15px;
				background: #0E2EBB no-repeat top/auto 100%;
			}

			.anim {
				opacity: 0;
				transition: all 1s ease;
				transform: translateY(100px);
			}

			.anim.show {
				opacity: 1;
				transform: none;
			}
		p
			code.language-css: span.token.property justify-content
			| にspace-evenlyが使用されているが、未対応端末が多いため、その対処も忘れないように。

		h3 HTML
		BlockCode.language-html: pre.
			&lt;div class="area"&gt;
				&lt;div class="anim box-1"&gt;要素1&lt;/div&gt;
				&lt;div class="anim box-2"&gt;要素2&lt;/div&gt;
				&lt;div class="anim box-3"&gt;要素3&lt;/div&gt;
				&lt;div class="anim box-4"&gt;要素4&lt;/div&gt;
				&lt;div class="anim box-5"&gt;要素5&lt;/div&gt;
				&lt;div class="anim box-6"&gt;要素6&lt;/div&gt;
				&lt;div class="anim box-7"&gt;要素7&lt;/div&gt;
				&lt;div class="anim box-8"&gt;要素8&lt;/div&gt;
				&lt;div class="anim box-9"&gt;要素9&lt;/div&gt;
				&lt;div class="anim box-10"&gt;要素10&lt;/div&gt;
				&lt;div class="anim box-11"&gt;要素11&lt;/div&gt;
				&lt;div class="anim box-12"&gt;要素12&lt;/div&gt;
				&lt;div class="anim box-13"&gt;要素13&lt;/div&gt;
				&lt;div class="anim box-14"&gt;要素14&lt;/div&gt;
				&lt;div class="anim box-15"&gt;要素15&lt;/div&gt;
				&lt;div class="anim box-16"&gt;要素16&lt;/div&gt;
			&lt;/div&gt;
		p
			| boxナンバリングは単純に背景画像を指定するためのものであるため省略する。

		h3 JavaScript
		BlockCode.language-javascript: pre.
			window.addEventListener('DOMContentLoaded', function () {
				window.addEventListener('scroll', function () {
					let myFade = document.getElementsByClassName('anim');
					for (let i = 0; i &lt; myFade.length; i++) {
						let targetElement = myFade[i].getBoundingClientRect(); // ターゲット要素の高さ
						let scroll = document.documentElement.scrollTop || document.body.scrollTop; // スクロール
						let windowHeight = window.innerHeight; // ウィンドウの高さ
						if (scroll &gt; scroll + targetElement.top - windowHeight + 200) {
							myFade[i].classList.add('show');
						}
					}
				}, false);
			}, false);
		p
			| 執筆者はjQuery撲滅派なのでjQueryを利用した記述方法はないと考えて良い。

		h3 実行結果
		.yw-area
			.yw-anim.yw-box-1
				v-img(src='/img/sander-wehkamp-779070.jpg', alt='', height='30vw', max-height='250px')
				p 要素1
			.yw-anim.yw-box-2
				v-img(src='/img/andrea-cau-51160.jpg', alt='', height='30vw', max-height='250px')
				p 要素2
			.yw-anim.yw-box-3
				v-img(src='/img/denys-nevozhai-154974.jpg', alt='', height='30vw', max-height='250px')
				p 要素3
			.yw-anim.yw-box-4
				v-img(src='/img/astemir-almov-265122.jpg', alt='', height='30vw', max-height='250px')
				p 要素4
			.yw-anim.yw-box-5
				v-img(src='/img/denys-nevozhai-100695.jpg', alt='', height='30vw', max-height='250px')
				p 要素5
			.yw-anim.yw-box-6
				v-img(src='/img/ben-neale-297658.jpg', alt='', height='30vw', max-height='250px')
				p 要素6
			.yw-anim.yw-box-7
				v-img(src='/img/denys-nevozhai-351730.jpg', alt='', height='30vw', max-height='250px')
				p 要素7
			.yw-anim.yw-box-8
				v-img(src='/img/john-westrock-777794.jpg', alt='', height='30vw', max-height='250px')
				p 要素8
			.yw-anim.yw-box-9
				v-img(src='/img/kelsey-johnsen-727.jpg', alt='', height='30vw', max-height='250px')
				p 要素9
			.yw-anim.yw-box-10
				v-img(src='/img/ray-hennessy-253874.jpg', alt='', height='30vw', max-height='250px')
				p 要素10
			.yw-anim.yw-box-11
				v-img(src='/img/scott-ruzzene-355988.jpg', alt='', height='30vw', max-height='250px')
				p 要素11
			.yw-anim.yw-box-12
				v-img(src='/img/mark-solarski-209233.jpg', alt='', height='30vw', max-height='250px')
				p 要素12
			.yw-anim.yw-box-13
				v-img(src='/img/shubhankar-sharma-51901.jpg', alt='', height='30vw', max-height='250px')
				p 要素13
			.yw-anim.yw-box-14
				v-img(src='/img/tyler-van-der-hoeven-357415.jpg', alt='', height='30vw', max-height='250px')
				p 要素14
			.yw-anim.yw-box-15
				v-img(src='/img/robert-lukeman-150146.jpg', alt='', height='30vw', max-height='250px')
				p 要素15
			.yw-anim.yw-box-16
				v-img(src='/img/markus-spiske-357131.jpg', alt='', height='30vw', max-height='250px')
				p 要素16

	section
		h2 使用上の注意
		ul
			li アニメーション時間が長すぎるとストレスの要因にもなりうるため、長くても1秒程度には収めること。
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'フェードイン' });
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

	window.addEventListener(
		'scroll',
		function() {
			const myFade = document.getElementsByClassName('yw-anim');
			for (let i = 0; i < myFade.length; i++) {
				const targetElement = myFade[i].getBoundingClientRect(); // ターゲット要素の高さ
				const scroll = document.documentElement.scrollTop || document.body.scrollTop; // スクロール
				const windowHeight = window.innerHeight; // ウィンドウの高さ
				if (scroll > scroll + targetElement.top - windowHeight + 200) {
					myFade[i].classList.add('yw-show');
				}
			}
		},
		false,
	);

});
</script>

<script lang="ts">
</script>

<style lang="scss">
.category--css {
	&.page--fade-in {
		.yw-area {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;

			@supports (-ms-ime-align: auto) or ((-webkit-text-size-adjust: none) and (-webkit-marquee-repetition: infinite) and (object-fit: fill)) {
				justify-content: space-around;
			}

			.yw-anim {
				width: 30vw;
				max-width: 250px;
				height: 30vw;
				max-height: 250px;
				margin-bottom: 15px;
				background: #0E2EBB no-repeat top/auto 100%;
			}
		}

		.yw-anim {
			position: relative;
			overflow: hidden;
			opacity: 0;
			transition: all 1s ease;
			transform: translateY(100px);

			&.yw-show {
				opacity: 1;
				transform: none;
			}

			img {
				position: absolute;
				top: 0;
				left: 50%;
				width: 30vw;
				max-height: 100%;
				transform: translate(-50%, 0);
			}

			p {
				position: absolute;
				top: 0;
				left: 0;
				box-sizing: border-box;
				display: block;
				width: 4rem;
				padding: 5px;
				line-height: 1;
				background-color: rgba(0, 0, 0, 0.6);
				border-bottom-right-radius: 10px;
			}
		}
	}
}
</style>
