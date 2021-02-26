<template lang="pug">
div
	section
		p
			| 左のメニューより閲覧したい内容を選択してください。
			br
			| このページのコードの表示には
			a(href='http://mix-mplus-ipa.osdn.jp/migu/', title='Miguフォント : M+とIPAの合成フォント', target='_blank', rel='external noopener') Migu 1M
			| フォントの導入を推奨しています。
			br
			| また、このフォントはプログラムコーディングにおいても優秀なため、導入を推奨します。
			br
			| 各ページのコードのハイライトには
			a(href='https://prismjs.com/', title='Prism', target='_blank', rel='external noopener') Prism
			| が使用されています。
		v-alert(type='info', border='left', colored-border, dense, elevation='5')
			//- h2 注意事項
			p
				| このサイトはJavaScriptに多くの新しい技術が使用されているためInternet Explorerは全て非対応、2016年辺りから更新されていないブラウザに関しても殆ど非対応です。
				br
				| また、JavaScript無効状態ではJavaScriptを使用したサンプルが、CSSを無効化したりオーバーライドしている場合、本マニュアルのデザインが崩れたり一部のサンプルが正しく動作しない可能性があります。予めご了承ください。

	section
		h2 Prismハイライトの例
		p
			| ソースコード右上のメニューからコードをコピーすることができます。
			br
			| HEXもしくはRGBカラーコード、グラデーションの内容はマウスオーバーで色彩を表示することができます。
			br
			| また、CSSの要素の場合、クリックすることで説明ページに飛ぶことができます(但し、英語)。
		h3 CSS
		pre.language-css.line-numbers: code.
			* {
				margin: 0;
				padding: 0;
				line-height: 1.4;
			}

			header {
				position: fixed;
				width: 100%;
				background-color: #175397;
			}

			header h1 {
				padding: 5px 0;
				text-align: center;
				font-size: 32px;
				color: #FFFFFF;
			}

		h3 Pug
		pre.language-pug.line-numbers: code.
			doctype html
			html(lang='ja')
				head
					meta(charset='utf-8')
					title Debug Checker
					script(type='application/javascript', src='js/prism.js')
					link(href='css/prism.css', rel='stylesheet', type='text/css')
				body
					header(role='banner')
						h1 Title
					main(role='main')
						h2 Easy?
					footer(role='contentinfo')

		h3 SCSS
		pre.language-scss.line-numbers: code.
			header {
				position: fixed;
				width: 100%;
				background-color: #175397;

				h1 {
					padding: 5px 0;
					text-align: center;
					font-size: 32px;
					color: #FFFFFF;
				}
			}

		h3 CodeMirror
		client-only(placeholder='Codemirror Loading...')
			codemirror(ref='cmEditor', :options='cmOptions', :value='code')

	section
		h2 マニュアル作成について
		p
			| このマニュアル作成に当たり以下のツールやエディター、言語等を使用しています。作成に使用したソースコードは
			a(href='https://github.com/Yukari-World/nuxt-manual', target='_blank', rel='external noopener') GitHub
			| に置いていますので参考にしてください。
		h3 開発言語
		ul
			li
				| JavaScript(ECMAScript 2017),&nbsp;
				s Babelにより後方互換確保済み
			li
				a(href='https://ja.nuxtjs.org/', title='Nuxt.js - ユニバーサル Vue.js アプリケーション', target='_blank', rel='external noopener') Nuxt.js
			li
				a(href='https://pugjs.org/', title='Pug: Getting Started', target='_blank', rel='external noopener') Pug(Jade)
			li
				a(href='http://sass-lang.com/', title='Sass: Syntactically Awesome Style Sheets', target='_blank', rel='external noopener') Sass(Syntactically Awesome Style Sheets)(SCSS)
		h3 画像
		ul
			li
				a(href='https://unsplash.com/', title='Unsplash: Beautiful Free Images & Pictures', target='_blank', rel='external noopener') Unsplash
		h3 テキストエディタ
		ul
			li
				a(href='https://atom.io/', title='Atom', target='_blank', rel='external noopener') Atom
			li
				a(href='https://notepad-plus-plus.org/', title='Notepad++ Home', target='_blank', rel='external noopener') Notepad++
			li
				a(href='https://code.visualstudio.com/', title='Visual Studio Code - Code Editing. Redefined', target='_blank', rel='external noopener') Visual Stdio Code
		h3 ツール
		ul
			li
				a(href='https://www.heidisql.com/', title='HeidiSQL', target='_blank', rel='external noopener') HeidiSQL
			li
				a(href='https://nodejs.org/ja/', title='Node.js', target='_blank', rel='external noopener') Node.js
			li
				a(href='http://nilposoft.info/index.html', title='Nilposoft', target='_blank', rel='external noopener') Ralpha Image Resizer
		h3 ライブラリ
		dl
			dt JavaScript
			dd
				ul
					li
						a(href='https://github.com/aFarkas/lazysizes', title='GitHub - aFarkas/lazysizes: High performance and SEO friendly lazy loader for images (responsive and normal), iframes and more, that detects any visibility changes triggered through user interaction, CSS or JavaScript without configuration.', target='_blank', rel='external noopener') lazysizes
					li
						a(href='https://prismjs.com/', title='Prism.js', target='_blank', rel='external noopener') Prism.js
			dt Node.js(関連パッケージは省略)
			dd
				ul
					li
						a(href='http://babeljs.io/', title='Babel · The compiler for next generation JavaScript', target='_blank', rel='external noopener') Babel
					li
						a(href='https://browsersync.io/', title='Browsersync - Time-saving synchronised browser testing', target='_blank', rel='external noopener') Browsersync
					li
						a(href='http://csscomb.com/', title='CSScomb: Makes your code beautiful', target='_blank', rel='external noopener') CSScomb
					li
						a(href='https://eslint.org/', title='ESLint - Pluggable JavaScript linter', target='_blank', rel='external noopener') ESLint
					li
						a(href='https://gulpjs.com/', title='gulp.js', target='_blank', rel='external noopener') gulp.js
					li
						a(href='https://ja.nuxtjs.org/', title='Nuxt.js - ユニバーサル Vue.js アプリケーション', target='_blank', rel='external noopener') Nuxt.js
					li
						a(href='https://postcss.org/', title='PostCSS - a tool for transforming CSS with JavaScript', target='_blank', rel='external noopener') PostCSS
					li
						a(href='https://vuetifyjs.com/ja/', title='マテリアルデザインコンポーネントフレームワーク — Vuetify.js', target='_blank', rel='external noopener') Vuetify.js
					li
						a(href='https://webpack.js.org/', title='webpack', target='_blank', rel='external noopener') webpack

	section
		h2 リクエストについて
		p マニュアル及び解説のリクエストはSlackもしくは本人に直接お願いします。一通り動作を検証した後マニュアル化を行います。

	section
		h2 よくありそうな質問
		h3 Nuxtになって何が変わったの?
		p
			| 全体的にサーバーサイドレンダリングに依存となり、スタイルはVuetifyに依存となりました。
			br
			| デザイン等は洗礼されましたが、その分若干のレスポンス低下とページの没個性化が発生しています。

		h3 白紙ページが多い
		p
			| 筆記者が1人なので記述が間に合っていません。
			br
			| 早く確認したい内容がある場合、報告してください。

		h3 HTMLソースが汚い
		p
			s
				| 自動整形ツールの仕様です。
				wbr
				| HTML自体はPugテンプレートに基づいてMinifyされたHTMLが出力されており、その後自動整形ツールでHTMLソースを整形しています。
				wbr
				| そのため出力結果は自動整形ツールの結果に依存しており、こちらで対処できる内容ではありません。
				br
				| また、コード整形は可能な限り自動化し手動で時間を掛けるものではないと考えているため、こちらで修正する予定もありませんので予めご了承ください。
			br.strike
			| このページは現在Nuxtで作られているため、整形ルール等はNuxtに従います。HTMLソースは整形されないものだと思ってください。

		h3 このHTMLに使用されているCSSファイルが読めない
		p
			s
				| 圧縮済みCSSファイルを使用しているので読めないのが仕様です。どうしても読みたい場合は
				a(href='https://gitlab.com/fcc-y/html-manual', target='_blank', rel='external noopener') Gitlabリポジトリ
				| から未圧縮のCSSファイルを取得するか、圧縮済みCSSファイルをテキストエディタのプラグイン等でフォーマットしてみてください。
				br
				| 但し、執筆者はSCSSファイルを使用してCSSファイルに変換したものを利用しているので可読性に関しては責任を取ることができませんので予めご了承ください。
			br.strike
			| 現在はNuxtとVuetifyにより作成されています。CSSスタイルは読めないものだと思ってください。

		h3 技術マニュアルなのにお遊びが多い
		p
			| あちらこちらにあるお遊びは技術の習得段階や練習の過程、興味本位のお試し程度で作られたものが多いです。
			br
			| 尚、本マニュアルですが、マニュアルと言いつつソースコードそのものはお遊びなしの本気で作られています。SEO考慮等含めると下手なホームページよりも最適化されています。

		h3 マニュアルの内容が難しすぎる
		p
			| そう?

		h3 マニュアルの互換性低くない?
		p
			| 最先端技術を取り扱うのを優先しているため、コーディングの互換性は大幅に犠牲になっています。
			wbr
			| 互換性のある記述方法も順次記述していきますが、いつになるかは不明です。

		h3 人によってこのページが白い(黒い)のは何故?
		p
			| このサイトではカラーテーマが有効となっており、現在使用しているブラウザのテーマがライトかダークかによって画面が変化します。
			br
			| Windowsのブラウザの場合、Windowsにあるテーマ側のダークモードが有効かどうかに委ねられることが多いため、初期設定でライトモードである場合が多くなります。
			br
			| またこのサイトのページの印刷を行う場合、インクの消費を抑える目的でライトモードと同等のテーマと色彩になるようにデザインが調整されます。
			br
			| 尚、この仕様が無効なブラウザの場合、デフォルトでダークテーマ(暗色モード)が適応されます。
			br
			| ※現在ライトモードとダークモードを切り替える機能は実装予定があるものの、未だ未実装です。

		h3 フッターにある取り消し線の内容は何?
		p
			| 全て元ネタがあります。わからない場合、調べてみましょう。尚、内容は秒が10の倍数毎に切り替わるようになっています。
			wbr
			| 現在
			span#countRandom ---
			| 個の表示候補があります。
			wbr
			| 表示内容は
			a(href='https://ja.wikipedia.org/wiki/Xorshift', target='_blank', rel='external noopener') 擬似乱数Xorshift
			| のランダムであり、表示結果が重複することがあります。

		h3 このサイトのソースはあるの?
		p
			a(href='https://github.com/Yukari-World/nuxt-manual', target='_blank', rel='external noopener') こちら
			| にて公開中です。是非とも技術を自分のものにしてください。

		h3 これ、本当に技術マニュアルなの?
		p
			| はい。
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import Prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-pug';
import 'prismjs/components/prism-scss';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'Nuxt Manual',
			},
			code: 'const a = 10',
			cmOptions: {
				extraKeys: {
					'F11'(cm: any) {
						cm.setOption('fullScreen', !cm.getOption('fullScreen'));
					},
					'Esc'(cm: any) {
						if (cm.getOption('fullScreen')) {cm.setOption('fullScreen', false);}
					},
				},
				foldGutter: true,
				gutters: [
					'CodeMirror-foldgutter',
					'CodeMirror-linenumbers',
				],
				indentUnit: 4,
				indentWithTabs: true,
				lineNumbers: true,
				lineWrapping: true,
				mode: 'text/javascript',
				styleSelectedText: true,
				tabSize: 4,
				theme: 'tomorrow-night-eighties',
			},
		};
	},
	computed: {
		// storeからのデータ読み込み
		...mapState({
			randomWords: (state: any) => state.randomWords,
		}),
	},
	mounted() {
		const cntRandom = document.getElementById('countRandom') as HTMLElement;
		cntRandom.textContent = this.randomWords.length;

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

<style lang="scss" scoped>
h3 {
	margin-top: 1.5em;
}

.strike {
	padding-bottom: 1rem;
}
</style>
