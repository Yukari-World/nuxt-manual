<template lang="pug">
div
	section
		h2 Pugとは
		p
			| PugはHTMLのテンプレートエンジンである。かつてはJadeと呼ばれていたが、商標権との関係でPugと呼ばれている。Jade自体は現在でも存在し、コンパイラも存在するが、非推奨となっている。
			br
			| 尚、PugもJadeも元は同じ為記述方法自体は変わらないが、基本的には現行環境であるPugを基に記述していく。

	section
		h2 記述方法
		h3 基本的な記述
		p 記述方法はRubyやYAMLの記述方法に近い。タブで階層を示し、HTMLタグを囲む必要はない。但し、HTMLタグをそのまま記述しても特に問題はない。
		h4 Pug
		pre.language-pug.line-numbers: code.
			doctype html
			html(lang='ja')
				head
					meta(charset='utf-8')
					title Debug Checker
					script(type='application/javascript', src='js/prism.js')
					link(href='css/prism.css', rel='stylesheet', type='text/css')
					link(href='css/style.css', rel='stylesheet', type='text/css')
				body
					header(role='banner')
						h1 Title
					main(role='main')
						h2 Hello World!!
					footer(role='contentinfo')
					script(type='application/javascript', src='js/prism.js')

		h4 HTML
		p
			| 出力結果。実際の出力結果は全く整形されていないので必要に応じて
			a(href='https://github.com/beautify-web/js-beautify', target='_blank', rel='external noopener') JS-Beautify
			| 等で整形する必要がある。尚、Pugの変換オプションに自動整形するオプションがあるが、現在は非推奨なので注意。
		pre.language-html.line-numbers: code.
			&lt;!DOCTYPE html&gt;
			&lt;html lang="ja"&gt;
			&lt;head&gt;
				&lt;meta charset="utf-8"&gt;
				&lt;title&gt;Debug Checker&lt;/title&gt;
				&lt;link href="css/prism.css" rel="stylesheet" type="text/css"&gt;
				&lt;link href="css/style.css" rel="stylesheet" type="text/css"&gt;
			&lt;/head&gt;
			&lt;body&gt;
				&lt;header role="banner"&gt;
					&lt;h1&gt;Title&lt;/h1&gt;
				&lt;/header&gt;
				&lt;main role="main"&gt;
					&lt;h2&gt;Hello World!!&lt;/h2&gt;
				&lt;/main&gt;
				&lt;footer role="contentinfo"&gt;&lt;/footer&gt;
				&lt;script type="application/javascript" src="js/prism.js"&gt;&lt;/script&gt;
			&lt;/body&gt;
			&lt;/html&gt;

		h3 プロパティ
		p
			| プロパティは括弧で記述する。括弧とHTMLタグの間にスペースを入れるとHTML要素内の文字として扱われるのでスペースを入れてはならない。
			br
			| 複数プロパティがある場合はカンマで区切る。但し、こちらは必須ではない。
		h4 Pug
		pre.language-pug.line-numbers: code.
			input(type='text', name='school', placeholder='学校名')		//- ←OK
			input (type='text', name='school', placeholder='学校名')	//- ←NG
			input(type='text' name='school' placeholder='学校名')		//- ←一応OK
		h4 HTML
		pre.language-html.line-numbers: code.
			&lt;input type="text" name="school" placeholder="学校名"&gt;

		h3 複数行の記述
		p
			code.language-markup
				span.token.punctuation &lt;
				span.token.tag p
				span.token.punctuation &gt;
			| タグの様に内容が長くなる場合や同一タグの中に文章とHTMLタグが混在する場合、文章部分は|で始める。
		h4 Pug
		pre.language-pug.line-numbers: code.
			p
				| 参照元は
				a(href='#', target='_blank', rel='external noopener') こちら
		h4 HTML
		pre.language-html.line-numbers: code.
			&lt;p&gt;参照元は&lt;a href="#" target="_blank" rel="external noopener"&gt;こちら&lt;/a&gt;&lt;/p&gt;
		p 尚、どうしても一行で済ましたいならば以下のように記述する。
		h4 Pug
		pre.language-pug.line-numbers: code.
			p 参照元は&lt;a href="#" target="_blank" rel="external noopener"&gt;こちら&lt;/a&gt;

		h3 IDとクラス
		p IDとクラスはプロパティを記述する方法で記述してもよいが、以下のように記述することができる。
		h4 Pug
		pre.language-pug.line-numbers: code.
			table.contets
				tr
					td#test1 Test1
					td#test2 Test2

		h4 HTML
		pre.language-html.line-numbers: code.
			&lt;table class="contets"&gt;
				&lt;tr&gt;
					&lt;td id="test1"&gt;Test1&lt;/td&gt;
					&lt;td id="test2"&gt;Test2&lt;/td&gt;
				&lt;/tr&gt;
			&lt;/table&gt;

		p
			| また、
			code.language-markup
				span.token.punctuation &lt;
				span.token.tag div
				span.token.punctuation &gt;
			| タグにIDやクラスを記述する場合、
			code.language-markup
				span.token.punctuation &lt;
				span.token.tag div
				span.token.punctuation &gt;
			| タグを省略して記述することができる。
		h4 Pug
		pre.language-pug.line-numbers: code.
			#top.box
				p Message
			#bottom.box
				p Message

		h4 HTML
		pre.language-html.line-numbers: code.
			&lt;div id="top" class="box"&gt;
				&lt;p&gt;Message&lt;/p&gt;
			&lt;/div&gt;
			&lt;div id="bottom" class="box"&gt;
				&lt;p&gt;Message&lt;/p&gt;
			&lt;/div&gt;

		p 同一のHTMLタグに複数のクラスを指定する場合は、CSSの記述方法の様に連続して記述する。
		h4 Pug
		pre.language-pug.line-numbers: code.
			.box.left
				p.this.is.four.pens Test

		h4 HTML
		pre.language-html.line-numbers: code.
			&lt;div class="box left"&gt;
				&lt;p class="this is four pens"&gt;Test&lt;/p&gt;
			&lt;/div&gt;

	section
		h2 拡張機能
		h3 mixinの定義
		h4 Pug
		pre.line-numbers(data-src='/pug/_mixin/_sql.pug', data-download-link, data-line='1, 5-16'): code.

		h4 HTML
		pre.language-html.line-numbers: code.
			&lt;ul&gt;
				&lt;li role="menuitem"&gt;&lt;a href="sql-as.html" title="AS(別名)"&gt;AS(別名)&lt;/a&gt;&lt;/li&gt;
				&lt;li role="menuitem"&gt;&lt;a href="sql-in.html" title="IN()(複数選択)"&gt;IN()(複数選択)&lt;/a&gt;&lt;/li&gt;
				&lt;li role="menuitem"&gt;&lt;a href="sql-insertSelect.html" title="INSERT SELECT"&gt;INSERT SELECT&lt;/a&gt;&lt;/li&gt;
				&lt;li role="menuitem"&gt;&lt;a href="sql-join.html" title="JOIN(テーブル結合)"&gt;JOIN(テーブル結合)&lt;/a&gt;&lt;/li&gt;
				&lt;li role="menuitem"&gt;&lt;a href="sql-like.html" title="[WIP] LIKE(あいまい検索)"&gt;[WIP] LIKE(あいまい検索)&lt;/a&gt;&lt;/li&gt;
				&lt;li role="menuitem"&gt;&lt;a href="sql-transaction.html" title="TRANSACTION(トランザクション)"&gt;TRANSACTION(トランザクション)&lt;/a&gt;&lt;/li&gt;
				&lt;li role="menuitem"&gt;&lt;a href="sql-truncate.html" title="TRUNCATE(テーブルを空にする)"&gt;TRUNCATE(テーブルを空にする)&lt;/a&gt;&lt;/li&gt;
				&lt;li role="menuitem"&gt;&lt;a href="sql-deleteFlag.html" title="[WIP] 削除フラグ"&gt;[WIP] 削除フラグ&lt;/a&gt;&lt;/li&gt;
				&lt;li role="menuitem"&gt;&lt;a href="sql-MySQLinsertWhereExists.html" title="[MySQL] INSERT WHERE EXISTS"&gt;[MySQL] INSERT WHERE EXISTS&lt;/a&gt;&lt;/li&gt;
				&lt;li role="menuitem"&gt;&lt;a href="sql-MySQLint.html" title="[MySQL] INT(11) の意味"&gt;[MySQL] INT(11) の意味&lt;/a&gt;&lt;/li&gt;
				&lt;li role="menuitem"&gt;&lt;a href="sql-MySQLupdateSelect.html" title="[MySQL] UPDATE SELECT"&gt;[MySQL] UPDATE SELECT&lt;/a&gt;&lt;/li&gt;
				&lt;li role="menuitem"&gt;&lt;a href="#" title="[MySQL/WIP] UTF-8のあれこれ"&gt;[MySQL/WIP] UTF-8のあれこれ&lt;/a&gt;&lt;/li&gt;
			&lt;/ul&gt;

		h3 include インクルード
		h4 Pug
		p 複数のパーツを使い回したり、パーツを細分化する際に使用する。尚、pugテンプレートファイルを指定する場合は拡張子を記述する必要はない。
		pre.line-numbers(data-src='/pug/_mixin/_sideList.pug', data-download-link, data-line='13, 19, 25, 31, 37, 43, 49, 55, 61, 67, 73')

		h3 extends 継承
		h4 Pug
		p
			| 親(継承元)ファイル。
			br
			code.language-pug: span.token.keyword block
			| を追加することで継承先にて要素を追加したり変更できるようになる。また、
			code.language-pug: span.token.keyword block
			| 以降に要素を記述することでデフォルトの内容を記述することができる。追加しない場合、デフォルトは空となる。
		pre.line-numbers(data-src='/pug/_includes/_layout.pug', data-download-link, data-line='5, 26, 37, 40, 48, 51, 58')
		p
			| 子(継承先)ファイル。
			br
			code.language-pug: span.token.keyword extends
			| で継承元のテンプレートファイルを指定する。ファイル先頭コメントを挿入する場合を除いて必ず1行目に指定しなければならない(1行目以外指定した場合エラーとなる)。
			br
			code.language-pug: span.token.keyword block
			| で継承元のブロック名を指定することでブロックの内容を置き換えることができる。
			br
			code.language-pug: span.token.keyword block append
			| もしくは
			code.language-pug: span.token.keyword append
			| でブロック要素を指定した場合、継承元の内容を保持しつつ要素を追加することができる。
			code.language-pug: span.token.keyword block
			| を指定していない箇所がある場合、継承元の内容が出力される。
		pre.line-numbers(data-src='/pug/css-textShadow.pug', data-download-link, data-line='1, 2, 5, 35, 37')

	section
		h2 変換方法
		p
			| Pugはテンプレートエンジンであるため、そのままではHTMLとして認識されない。そのため変換する必要がある。これはその一例である。
			br
			| 尚、此等を利用するにあたって予めNode.jsのインストールが必要となる。インストールしていない場合は別途マニュアルを参照してインストールを行うこと。
			br
			| また、内容に応じてプロジェクトパッケージを必要とするためそちらも予め作成しておくように。

		h3 コマンドラインで変換
		ol
			li
				p コンソールを起動し、以下のコマンドからPugのインストールを行う
				pre.language-batch.line-numbers: code.
					npm i pug-cli -g
				p ローカルパッケージにインストールする場合は以下のように入力を行う。ローカル環境インストールの場合、プロジェクトパッケージが存在するディレクトリに予め移動すること。
				pre.language-batch.line-numbers: code.
					npm i pug-cli -D
			li
				p インストールに完了した場合、正しく動作するか確認するために以下のコマンドを入力する。
				pre.language-batch.line-numbers: code.
					pug --version
				p ローカルパッケージにインストールした場合は以下のように入力を行う。
				pre.language-batch.line-numbers: code.
					npx pug --version
			li
				p ファイルを変換する場合、以下のように入力する。ファイル名は変換する対象ファイルに応じて適時変更すること。
				pre.language-batch.line-numbers: code.
					pug index.pug
				p ローカルパッケージにインストールした場合は以下のように入力を行う。
				pre.language-batch.line-numbers: code.
					npx pug index.pug

		h3 Gulpで変換
		p 予めGulpをインストールすること。インストール方法と使用方法は別マニュアル参照。
		ol
			li
				p プロジェクトパッケージにがあるフォルダに移動し、以下のコマンドを入力を行う。
				pre.language-batch.line-numbers: code.
					npm i gulp-pug -D
			li
				p
					| gulpfile.jsが存在しない場合は作成を行い、以下のように入力を行う。
					s ファイル行頭が_(アンダーバー)のファイルを除外することで各種テンプレートファイルを変換しなくなる。
					br
					| ファイル行頭が_(アンダーバー)のファイルはデフォルトでコンパイラ側にて無視されるため、気にする必要はない。
				pre.language-javascript.line-numbers(data-line='1, 4'): code.
					const pug = require('gulp-pug');

					gulp.task('pug', function {
						return gulp.src(['pug/**/*.pug', '!pug/**/_*.pug'])
						.pipe(pug())
						.pipe(gulp.dest('/../'));
					});

			li
				p 保存した後に以下のコマンドを入力し、実行する。
				pre.language-batch.line-numbers: code.
					gulp pug
				p gulpをローカルパッケージにインストールした場合は以下のように入力を行う。
				pre.language-batch.line-numbers: code.
					npx gulp pug

	section
		h2 使用上の注意
		ul
			li
				| &amp;、&gt;、&lt;といった記号は、文字列として使用できるが推奨されていない。また、&lt;&gt;で囲むとHTMLタグであると認識される。それぞれ
				code.language-html: span.token.tag &amp;amp;
				| 、
				code.language-html: span.token.tag &amp;gt;
				| 、
				code.language-html: span.token.tag &amp;lt;
				| といった特殊文字を使用することが推奨さている。特殊文字については以下のリンクを参照。
				br
				a(href='http://www.htmq.com/text/', target='_blank', rel='external noopener') 特殊文字リファレンス - HTMLクイックリファレンス

	section
		h2 最後に
		p このマニュアルはPugで作られており、ソースを全て残しているので参考にする場合はPugフォルダ参照。クラシックなページデザイン故に参考になるか怪しいが。
		pre.line-numbers(data-src='/pug/index.pug', data-download-link)

	section
		h2 リンク
		a(href='https://pugjs.org/', target='_blank', rel='external noopener') Pug: Getting Started
</template>

<script lang="ts">
import Vue from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-batch';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-pug';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'Pug',
			},
		};
	},
	mounted() {
		Prism.highlightAll();
		Prism.plugins.fileHighlight.highlight();
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
.v-application {
	.title {
		font-size: unset !important;
		font-weight: unset;
		line-height: unset;
		letter-spacing: unset !important;
		font-family: unset !important;
	}
}
</style>
