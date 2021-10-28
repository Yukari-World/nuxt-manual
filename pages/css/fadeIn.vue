<template lang="pug">
div
	section
		h2 説明
		p 下から上へのコンテンツフェードインが要求されることが多いためその一例を記述する。

	section
		h2 使用方法と解説

		h3 CSS
		pre.language-css.line-numbers: code.
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
		pre.language-html.line-numbers: code.
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
		pre.language-javascript.line-numbers: code.
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
		.area
			.anim.box-1
				v-img(src='/img/sander-wehkamp-779070.jpg', alt='', height='30vw', max-height='250px')
				p 要素1
			.anim.box-2
				v-img(src='/img/andrea-cau-51160.jpg', alt='', height='30vw', max-height='250px')
				p 要素2
			.anim.box-3
				v-img(src='/img/denys-nevozhai-154974.jpg', alt='', height='30vw', max-height='250px')
				p 要素3
			.anim.box-4
				v-img(src='/img/astemir-almov-265122.jpg', alt='', height='30vw', max-height='250px')
				p 要素4
			.anim.box-5
				v-img(src='/img/denys-nevozhai-100695.jpg', alt='', height='30vw', max-height='250px')
				p 要素5
			.anim.box-6
				v-img(src='/img/ben-neale-297658.jpg', alt='', height='30vw', max-height='250px')
				p 要素6
			.anim.box-7
				v-img(src='/img/denys-nevozhai-351730.jpg', alt='', height='30vw', max-height='250px')
				p 要素7
			.anim.box-8
				v-img(src='/img/john-westrock-777794.jpg', alt='', height='30vw', max-height='250px')
				p 要素8
			.anim.box-9
				v-img(src='/img/kelsey-johnsen-727.jpg', alt='', height='30vw', max-height='250px')
				p 要素9
			.anim.box-10
				v-img(src='/img/ray-hennessy-253874.jpg', alt='', height='30vw', max-height='250px')
				p 要素10
			.anim.box-11
				v-img(src='/img/scott-ruzzene-355988.jpg', alt='', height='30vw', max-height='250px')
				p 要素11
			.anim.box-12
				v-img(src='/img/mark-solarski-209233.jpg', alt='', height='30vw', max-height='250px')
				p 要素12
			.anim.box-13
				v-img(src='/img/shubhankar-sharma-51901.jpg', alt='', height='30vw', max-height='250px')
				p 要素13
			.anim.box-14
				v-img(src='/img/tyler-van-der-hoeven-357415.jpg', alt='', height='30vw', max-height='250px')
				p 要素14
			.anim.box-15
				v-img(src='/img/robert-lukeman-150146.jpg', alt='', height='30vw', max-height='250px')
				p 要素15
			.anim.box-16
				v-img(src='/img/markus-spiske-357131.jpg', alt='', height='30vw', max-height='250px')
				p 要素16

	section
		h2 使用上の注意
		ul
			li アニメーション時間が長すぎるとストレスの要因にもなりうるため、長くても1秒程度には収めること。
</template>

<script lang="ts">
import Vue from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'フェードイン',
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

		window.addEventListener(
			'scroll',
			function() {
				const myFade = document.getElementsByClassName('anim');
				for (let i = 0; i < myFade.length; i++) {
					const targetElement = myFade[i].getBoundingClientRect(); // ターゲット要素の高さ
					const scroll = document.documentElement.scrollTop || document.body.scrollTop; // スクロール
					const windowHeight = window.innerHeight; // ウィンドウの高さ
					if (scroll > scroll + targetElement.top - windowHeight + 200) {
						myFade[i].classList.add('show');
					}
				}
			},
			false,
		);
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
.area {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;

	@supports (-ms-ime-align: auto) or
		((-webkit-text-size-adjust: none) and (-webkit-marquee-repetition: infinite) and (object-fit: fill)) {
		justify-content: space-around;
	}

	.anim {
		width: 30vw;
		max-width: 250px;
		height: 30vw;
		max-height: 250px;
		margin-bottom: 15px;
		background: #0E2EBB no-repeat top/auto 100%;
	}
}

.anim {
	position: relative;
	overflow: hidden;
	transition: all 1s ease;
	transform: translateY(100px);
	opacity: 0;

	&.show {
		transform: none;
		opacity: 1;
	}

	.v-image {
		position: absolute;
		top: 0;
		left: 50%;
		height: 100%;
		-webkit-transform: translate(-50%, 0);
		-ms-transform: translate(-50%, 0);
		transform: translate(-50%, 0);
	}

	p {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		box-sizing: border-box;
		width: 4rem;
		padding: 5px;
		line-height: 1;
		border-bottom-right-radius: 10px;
		background-color: rgba(0, 0, 0, 0.6);
	}
}
</style>
