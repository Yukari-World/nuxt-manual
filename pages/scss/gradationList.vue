<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2(v-t="'common.stub.work_in_progress.title'")
		p(v-t="'common.stub.work_in_progress.desc'")

	v-alert(type='warning', border='left', colored-border, dense, elevation='5')
		h2 応用技術
		p ここに記述されている内容は高度な内容なため、理解難易度が非常に高い可能性があります。

	section
		h2 説明
		p 今回以下のHTMLデザインを作成するとする。

		.list
			ul
				li.num-1
					.list-gradient
						p リスト項目1
				li.num-2
					.list-gradient
						p リスト項目2
				li.num-3
					.list-gradient
						p リスト項目3

	section
		h2 通常のCSSでは難しい点
		dl
			dt: h3 グラデーションが独立していない
			dd 各項目毎にグラデーションが連立しており、全体でまたがっている。
			dt: h3 項目毎に空白が均一ではない
			dd
				| 最初の項目程右に離れており、最後の項目程左に近い。
				br
				| 特に問題なのはグラデーションであり、マージン幅も考慮した上でポジションを決めなければならず、CSS単体で調整を行うのは非常に難しい。

	section
		h2 コードの生成
		h3 pug
		pre.language-pug.line-numbers: code.
			.list
				ul
					li.num-1
					.list-gradient
						p リスト項目1
					li.num-2
					.list-gradient
						p リスト項目2
					li.num-3
					.list-gradient
						p リスト項目3

		p これでも良いが、リストの追加や配置の入れ替え等を効率良く行えるようにするため以下のように記述する。
		pre.language-pug.line-numbers: code.
			.list
				-
					var boxList = [
						{
							title: 'リスト項目1',
						}, {
							title: 'リスト項目2',
						}, {
							title: 'リスト項目3',
						},
					];
					var i = 1;
				ul
					each item, index in boxList
						li(class='num-' + i++)
							div.list-gradient
								p &#035;{item.title}

		h3 SCSS
		p
			| SCSSファイル。これを基にCSSに出力する。細かい記述ルールは
			nuxt-link(:to="localePath('/language/sass')" title='SASS') こちら
			| を参照。
		pre.language-scss.line-numbers: code.
			@charset "UTF-8";

			// Import
			@import "_calc.scss";

			// 変数の定義(Global)
			$global-font: 14;
			// レスポンシブブレークポイントの設定
			$width-list: (
				xs:	576,
				sm:	768,
				md:	992,
				lg:	1200,
				lx:	1440,
				hd: 1920,
			) !default;

			// @mixinの定義
			// レスポンシブの設定
			@mixin min-screen($breakpoint: md) {
				@media only screen and (min-width: &#035;{map-get($width-list, $breakpoint) + 1}px) {
					@content;
				}
			}

			@mixin max-screen($breakpoint: md) {
				@media only screen and (max-width: &#035;{map-get($width-list, $breakpoint)}px) {
					@content;
				}
			}

			/// Viewport Widthの演算
			/// round-decimalは_calc.scssに定義
			@function calc-viewport($value: 1000, $breakpoint: md) {
				@return round-decimal(($value / map-get($width-list, $breakpoint)) * 100, 3) + vw;
			}

			.list {
				// 各項目の初期値を指定。この値を変えることで少ない記述で編集をすることができる。
				// pxで記述していないのは後のレスポンシブ記述を簡単にするため
				$list-width: 360;
				$list-height: 120;
				$list-margin-left: 60;
				$list-margin-bottom: 70;
				$list-max: 3; // リストの項目数
				$list-box-rotation: 20deg;
				$gradient-width: $list-width + $list-margin-left * ($list-max - 1);
				$gradient-height: ($list-height + $list-margin-bottom) * $list-max - $list-margin-bottom;

				ul {
					width: $gradient-width + px; // pxと足し合わせて文字列連結を行う
					height: $gradient-height + px;
					margin: 5px 120px 5px 25px;
					list-style: none;

					// mixinの内容を呼び出してレスポンシブを記述しやすく工夫する
					@include max-screen(lg) {
						width: calc-viewport($gradient-width, lg); // オブジェクトの大きさを元にvwを計算する。pxが無いのは計算が正しく行われないため
						height: calc-viewport($gradient-height, lg);
						margin: &#035;{calc-viewport(5, lg)} &#035;{calc-viewport(120, lg)} &#035;{calc-viewport(5, lg)} &#035;{calc-viewport(25, lg)};
					}
					@include max-screen(xs) {
						width: 85%;
						margin: &#035;{calc-viewport(5, xs)} &#035;{calc-viewport(120, xs)} &#035;{calc-viewport(5, xs)} &#035;{calc-viewport(25, xs)};
					}
				}

				li {
					&amp;:not(:last-child) {
						margin-bottom: $list-margin-bottom + px;

						@include max-screen(lg) {
							margin-bottom: calc-viewport($list-margin-bottom, lg);
						}
					}

					@for $i from 1 through ($list-max - 1) {
						&amp;:nth-of-type(&#035;{$i}) {
							margin-left: $list-margin-left * ($list-max - $i) + px;

							@include max-screen(lg) {
								margin-left: calc-viewport($list-margin-left * ($list-max - $i), lg);
							}
							@include max-screen(xs) {
								margin-left: 0;
							}
						}
					}
				}

				// .list-gradient
				&amp;-gradient {
					width: $list-width + px;
					height: $list-height + px;
					transform: skew(-$list-box-rotation); // リスト項目を傾ける
					background-image: linear-gradient(to left bottom, rgba(58, 58, 58, 0.84), rgba(177, 171, 171, 0.84));
					background-size: &#035;{$gradient-width + px} &#035;{$gradient-height + px};

					@include max-screen(lg) {
						width: calc-viewport($list-width, lg);
						height: calc-viewport($list-height, lg);
						background-size: &#035;{calc-viewport($gradient-width, lg)} &#035;{calc-viewport($gradient-height, lg)};
					}
					@include max-screen(xs) {
						width: 85vw;
						max-width: $list-width + px;
						background-size: 85vw &#035;{calc-viewport($gradient-height, xs)};
					}

					p {
						$font-size: 40;

						display: flex; // フレキシブルスタイルを使用して縦位置の中央に配置する
						justify-content: flex-start;
						align-items: center; // 縦に対する配置
						box-sizing: border-box; // 幅のとり方の設定
						width: $list-width + px;
						height: $list-height + px;
						padding-left: 20px;
						transform: skew($list-box-rotation); // 文字も傾いてしまうため逆方向に傾きを加えて元に戻す
						font-size: calc(1rem + &#035;{calc-viewport($font-size - $global-font, hd)});
						font-weight: 600;

						@include max-screen(lg) {
							width: calc-viewport($list-width, lg);
							height: calc-viewport($list-height, lg);
						}
						@include max-screen(xs) {
							width: 85vw;
							max-width: $list-width + px;
							padding-left: 30px;
						}
					}

					// 画像の位置を変更
					// 座標は項目ごとに異なるのでループで位置を変えていく
					@for $i from 1 through $list-max {
						.num-&#035;{$i} &amp; {
							background-position: left &#035;{-$list-margin-left * ($list-max - $i) + px} top &#035;{-($list-height + $list-margin-bottom) * ($i - 1) + px};

							@include max-screen(lg) {
								background-position: left -&#035;{calc-viewport($list-margin-left * ($list-max - $i), lg)} top -&#035;{calc-viewport(($list-height + $list-margin-bottom) * ($i - 1), lg)};
							}
							@include max-screen(xs) {
								background-position: left 0 top -&#035;{calc-viewport(($list-height + $list-margin-bottom) * ($i - 1), lg)};
							}
						}
					}
				}
			}

	section
		h2 コードの出力結果
		h3 HTML
		pre.language-html.line-numbers: code.
			&lt;div class="list"&gt;
				&lt;ul&gt;
					&lt;li class="num-1"&gt;
						&lt;div class="list-gradient"&gt;
							&lt;p&gt;リスト項目1&lt;/p&gt;
						&lt;/div&gt;
					&lt;/li&gt;
					&lt;li class="num-2"&gt;
						&lt;div class="list-gradient"&gt;
							&lt;p&gt;リスト項目2&lt;/p&gt;
						&lt;/div&gt;
					&lt;/li&gt;
					&lt;li class="num-3"&gt;
						&lt;div class="list-gradient"&gt;
							&lt;p&gt;リスト項目3&lt;/p&gt;
						&lt;/div&gt;
					&lt;/li&gt;
				&lt;/ul&gt;
			&lt;/div&gt;

		h3 CSS
		p
			| CSSの出力結果。メディアクエリはプラグインによりマージされている。また、互換性は
			a(href='https://github.com/postcss/autoprefixer', target='_blank', rel='external noopener') autoprefixer
			| により自動で確認、付与されている。
		pre.language-css.line-numbers: code.
			.list ul {
				width: 480px;
				height: 500px;
				margin: 5px 120px 5px 25px;
				list-style: none;
			}

			.list li:not(:last-child) {
				margin-bottom: 70px;
			}

			.list li:nth-of-type(1) {
				margin-left: 120px;
			}

			.list li:nth-of-type(2) {
				margin-left: 60px;
			}

			.list-gradient {
				width: 360px;
				height: 120px;
				-webkit-transform: skew(-20deg);
				-ms-transform: skew(-20deg);
				transform: skew(-20deg);
				background-image: -webkit-gradient(linear, right top, left bottom, from(rgba(58, 58, 58, 0.84)), to(rgba(177, 171, 171, 0.84)));
				background-image: -webkit-linear-gradient(right top, rgba(58, 58, 58, 0.84), rgba(177, 171, 171, 0.84));
				background-image: -o-linear-gradient(right top, rgba(58, 58, 58, 0.84), rgba(177, 171, 171, 0.84));
				background-image: linear-gradient(to left bottom, rgba(58, 58, 58, 0.84), rgba(177, 171, 171, 0.84));
				background-size: 480px 500px;
			}

			.list-gradient p {
				display: -webkit-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-pack: start;
				-webkit-justify-content: flex-start;
				-ms-flex-pack: start;
				justify-content: flex-start;
				-webkit-box-align: center;
				-webkit-align-items: center;
				-ms-flex-align: center;
				align-items: center;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				width: 360px;
				height: 120px;
				padding-left: 20px;
				-webkit-transform: skew(20deg);
				-ms-transform: skew(20deg);
				transform: skew(20deg);
				font-size: calc(1rem + 1.354vw);
				font-weight: 600;
			}

			.num-1 .list-gradient {
				background-position: left -120px top 0;
			}

			.num-2 .list-gradient {
				background-position: left -60px top -190px;
			}

			.num-3 .list-gradient {
				background-position: left 0 top -380px;
			}

			@media only screen and (max-width: 1200px) {
				.list ul {
					width: 40vw;
					height: 41.667vw;
					margin: 0.417vw 10vw 0.417vw 2.083vw;
				}

				.list li:not(:last-child) {
					margin-bottom: 5.833vw;
				}

				.list li:nth-of-type(1) {
					margin-left: 10vw;
				}

				.list li:nth-of-type(2) {
					margin-left: 5vw;
				}

				.list-gradient {
					background-size: 40vw 41.667vw;
				}

				.list-gradient, .list-gradient p {
					width: 30vw;
					height: 10vw;
				}

				.num-1 .list-gradient {
					background-position: left -10vw top 0;
				}

				.num-2 .list-gradient {
					background-position: left -5vw top -15.833vw;
				}

				.num-3 .list-gradient {
					background-position: left 0 top -31.667vw;
				}
			}

			@media only screen and (max-width: 576px) {
				.list ul {
					width: 85%;
					margin: 0.868vw 20.833vw 0.868vw 4.34vw;
				}

				.list li:nth-of-type(1) {
					margin-left: 0;
				}

				.list li:nth-of-type(2) {
					margin-left: 0;
				}

				.list-gradient {
					width: 85vw;
					max-width: 360px;
					background-size: 85vw 41.667vw;
				}

				.list-gradient p {
					width: 85vw;
					max-width: 360px;
					padding-left: 30px;
				}

				.num-1 .list-gradient {
					background-position: left 0 top 0;
				}

				.num-2 .list-gradient {
					background-position: left 0 top -15.833vw;
				}

				.num-3 .list-gradient {
					background-position: left 0 top -31.667vw;
				}
			}
</template>

<script lang="ts">
import Vue from 'vue';
import { highlightAll } from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-pug';
import 'prismjs/components/prism-scss';

export default Vue.extend({
	data() {
		return {
			header: {
				title: '特殊なグラデーションリスト',
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
.exsample-area {
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

.list {
	ul {
		width: 480px;
		height: 500px;
		margin: 5px 120px 5px 25px;
		list-style: none;
	}

	li {
		&:not(:last-child) {
			margin-bottom: 70px;
		}

		&:nth-of-type(1) {
			margin-left: 120px;
		}

		&:nth-of-type(2) {
			margin-left: 60px;
		}
	}
}

.list-gradient {
	width: 360px;
	height: 120px;
	-webkit-transform: skew(-20deg);
	-ms-transform: skew(-20deg);
	transform: skew(-20deg);
	background-image: -webkit-gradient(
		linear,
		right top,
		left bottom,
		from(rgba(58, 58, 58, 0.84)),
		to(rgba(177, 171, 171, 0.84))
	);
	background-image: -webkit-linear-gradient(right top, rgba(58, 58, 58, 0.84), rgba(177, 171, 171, 0.84));
	background-image: -o-linear-gradient(right top, rgba(58, 58, 58, 0.84), rgba(177, 171, 171, 0.84));
	background-image: linear-gradient(to left bottom, rgba(58, 58, 58, 0.84), rgba(177, 171, 171, 0.84));
	background-size: 480px 500px;

	p {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: start;
		-webkit-justify-content: flex-start;
		-ms-flex-pack: start;
		justify-content: flex-start;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: 360px;
		height: 120px;
		padding-left: 20px;
		-webkit-transform: skew(20deg);
		-ms-transform: skew(20deg);
		transform: skew(20deg);
		font-size: calc(1rem + 1.354vw);
		font-weight: 600;
	}
}

.num-1 .list-gradient {
	background-position: left -120px top 0;
}

.num-2 .list-gradient {
	background-position: left -60px top -190px;
}

.num-3 .list-gradient {
	background-position: left 0 top -380px;
}

@media only screen and (max-width: 1200px) {
	.list {
		ul {
			width: 40vw;
			height: 41.667vw;
			margin: 0.417vw 10vw 0.417vw 2.083vw;
		}

		li {
			&:not(:last-child) {
				margin-bottom: 5.833vw;
			}

			&:nth-of-type(1) {
				margin-left: 10vw;
			}

			&:nth-of-type(2) {
				margin-left: 5vw;
			}
		}
	}

	.list-gradient {
		background-size: 40vw 41.667vw;

		&,
		p {
			width: 30vw;
			height: 10vw;
		}
	}

	.num-1 .list-gradient {
		background-position: left -10vw top 0;
	}

	.num-2 .list-gradient {
		background-position: left -5vw top -15.833vw;
	}

	.num-3 .list-gradient {
		background-position: left 0 top -31.667vw;
	}
}

@media only screen and (max-width: 576px) {
	.list {
		ul {
			width: 85%;
			margin: 0.868vw 20.833vw 0.868vw 4.34vw;
		}

		li {
			&:nth-of-type(1) {
				margin-left: 0;
			}

			&:nth-of-type(2) {
				margin-left: 0;
			}
		}
	}

	.list-gradient {
		width: 85vw;
		max-width: 360px;
		background-size: 85vw 41.667vw;

		p {
			width: 85vw;
			max-width: 360px;
			padding-left: 30px;
		}
	}

	.num-1 .list-gradient {
		background-position: left 0 top 0;
	}

	.num-2 .list-gradient {
		background-position: left 0 top -15.833vw;
	}

	.num-3 .list-gradient {
		background-position: left 0 top -31.667vw;
	}
}
</style>
