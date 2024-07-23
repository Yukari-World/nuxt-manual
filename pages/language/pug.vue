<template lang="pug">
.category--language.page--pug
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
		BlockCode.language-pug {{ CBPugSample01 }}

		h4 HTML
		p
			| 出力結果。実際の出力結果は全く整形されていないので必要に応じて
			a(href="https://github.com/beautify-web/js-beautify", target="_blank", rel="external noopener") JS-Beautify
			| 等で整形する必要がある。尚、Pugの変換オプションに自動整形するオプションがあるが、現在は非推奨なので注意。
		BlockCode.language-html: pre.
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
		BlockCode.language-pug {{ CBPugSample02 }}
		h4 HTML
		BlockCode.language-html {{ CBHtmlSample02 }}

		h3 複数行の記述
		p
			TextTag p
			| タグの様に内容が長くなる場合や同一タグの中に文章とHTMLタグが混在する場合、文章部分は|で始める。
		h4 Pug
		BlockCode.language-pug {{ CBPugSample03 }}
		h4 HTML
		BlockCode.language-html {{ CBHtmlSample03 }}
		p 尚、どうしても一行で済ましたいならば以下のように記述する。
		h4 Pug
		BlockCode.language-html {{ CBHtmlSample03a }}

		h3 IDとクラス
		p IDとクラスはプロパティを記述する方法で記述してもよいが、以下のように記述することができる。
		h4 Pug
		BlockCode.language-pug {{ CBPugIDClass }}

		h4 HTML
		BlockCode.language-html {{ CBHtmlIDClass }}

		p
			| また、
			TextTag div
			| タグにIDやクラスを記述する場合、
			TextTag div
			| タグを省略して記述することができる。
		h4 Pug
		BlockCode.language-pug {{ CBPugWithoutDiv }}

		h4 HTML
		BlockCode.language-html {{ CBHtmlWithoutDiv }}

		p 同一のHTMLタグに複数のクラスを指定する場合は、CSSの記述方法の様に連続して記述する。
		h4 Pug
		BlockCode.language-pug {{ CBPugMultiClass }}

		h4 HTML
		BlockCode.language-html {{ CBHtmlMultiClass }}

	section
		h2 拡張機能
		h3 mixinの定義
		h4 Pug
		BlockCode(data-src="/pug/_mixin/_sql.pug", data-download-link, data-line="1, 5-16")

		h4 HTML
		BlockCode.language-html {{ CBHtmlMixin }}

		h3 include インクルード
		h4 Pug
		p 複数のパーツを使い回したり、パーツを細分化する際に使用する。尚、pugテンプレートファイルを指定する場合は拡張子を記述する必要はない。
		BlockCode(data-src="/pug/_mixin/_sideList.pug", data-download-link, data-line="13, 19, 25, 31, 37, 43, 49, 55, 61, 67, 73")

		h3 extends 継承
		h4 Pug
		p
			| 親(継承元)ファイル。
			br
			TextToken(type="pug").keyword block
			| を追加することで継承先にて要素を追加したり変更できるようになる。また、
			TextToken(type="pug").keyword block
			| 以降に要素を記述することでデフォルトの内容を記述することができる。追加しない場合、デフォルトは空となる。
		BlockCode(data-src="/pug/_includes/_layout.pug", data-download-link, data-line="5, 26, 37, 40, 48, 51, 58")
		p
			| 子(継承先)ファイル。
			br
			TextToken(type="pug").keyword extends
			| で継承元のテンプレートファイルを指定する。ファイル先頭コメントを挿入する場合を除いて必ず1行目に指定しなければならない(1行目以外指定した場合エラーとなる)。
			br
			TextToken(type="pug").keyword block
			| で継承元のブロック名を指定することでブロックの内容を置き換えることができる。
			br
			TextToken(type="pug").keyword block append
			| もしくは
			TextToken(type="pug").keyword append
			| でブロック要素を指定した場合、継承元の内容を保持しつつ要素を追加することができる。
			TextToken(type="pug").keyword block
			| を指定していない箇所がある場合、継承元の内容が出力される。
		BlockCode(data-src="/pug/css-textShadow.pug", data-download-link, data-line="1, 2, 5, 35, 37")

	section
		h2 変換方法
		p Pugはテンプレートエンジンであるため、そのままではHTMLとして認識されない。そのため変換する必要がある。これはその一例である。
			br
			| 尚、此等を利用するにあたって予めNode.jsのインストールが必要となる。インストールしていない場合は別途マニュアルを参照してインストールを行うこと。
			br
			| また、内容に応じてプロジェクトパッケージを必要とするためそちらも予め作成しておくように。

		h3 コマンドラインで変換
		ol
			li
				p コンソールを起動し、以下のコマンドからPugのインストールを行う
				BlockCode.language-batch: pre npm i pug-cli -g
				p ローカルパッケージにインストールする場合は以下のように入力を行う。ローカル環境インストールの場合、プロジェクトパッケージが存在するディレクトリに予め移動すること。
				BlockCode.language-batch: pre npm i pug-cli -D
			li
				p インストールに完了した場合、正しく動作するか確認するために以下のコマンドを入力する。
				BlockCode.language-batch: pre pug --version
				p ローカルパッケージにインストールした場合は以下のように入力を行う。
				BlockCode.language-batch: pre npx pug --version
			li
				p ファイルを変換する場合、以下のように入力する。ファイル名は変換する対象ファイルに応じて適時変更すること。
				BlockCode.language-batch: pre pug index.pug
				p ローカルパッケージにインストールした場合は以下のように入力を行う。
				BlockCode.language-batch: pre npx pug index.pug

		h3 Gulpで変換
		p 予めGulpをインストールすること。インストール方法と使用方法は別マニュアル参照。
		ol
			li
				p プロジェクトパッケージにがあるフォルダに移動し、以下のコマンドを入力を行う。
				BlockCode.language-batch: pre npm i -D gulp-pug
			li
				p gulpfile.jsが存在しない場合は作成を行い、以下のように入力を行う。
					span.text-decoration-line-through ファイル行頭が_(アンダーバー)のファイルを除外することで各種テンプレートファイルを変換しなくなる。
					br
					| ファイル行頭が_(アンダーバー)のファイルはデフォルトでコンパイラ側にて無視されるため、気にする必要はない。
				BlockCode.language-javascript(data-line="1, 4") {{ CBScriptGulp }}

			li
				p 保存した後に以下のコマンドを入力し、実行する。
				BlockCode.language-batch: pre gulp pug
				p gulpをローカルパッケージにインストールした場合は以下のように入力を行う。
				BlockCode.language-batch: pre npx gulp pug
		h3 Vueで使用
		p Vueで使用する場合、pugパッケージをインストールするだけで機能するため、特別な変換は必要としない

	section
		h2 使用上の注意
		ul
			li &amp;、&gt;、&lt;といった記号は、文字列として使用できるが推奨されておらず、それぞれ
				TextToken(type="html").tag &amp;amp;
				| 、
				TextToken(type="html").tag &amp;gt;
				| 、
				TextToken(type="html").tag &amp;lt;
				| といった特殊文字を使用することが推奨さている。また、&lt;&gt;で囲むとHTMLタグであると認識される。特殊文字については以下のリンクを参照。
				br
				a(href="http://www.htmq.com/text/", target="_blank", rel="external noopener") 特殊文字リファレンス - HTMLクイックリファレンス

	section
		h2 最後に
		p このマニュアルはPugで作られており、ソースを全て残しているので参考にする場合はPugフォルダ参照。クラシックなページデザイン故に参考になるか怪しいが。
		BlockCode(data-src="/pug/index.pug", data-download-link)

	section
		h2 リンク
		a(href="https://pugjs.org/", target="_blank", rel="external noopener") Pug: Getting Started
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'Pug' });
const indexStore = useIndexStore();

const CBPugSample01 = ref(
`doctype html
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
		script(type='application/javascript', src='js/prism.js')`);

const CBPugSample02 = ref(
`input(type='text', name='school', placeholder='学校名')		//- ←OK
input (type='text', name='school', placeholder='学校名')	//- ←NG
input(type='text' name='school' placeholder='学校名')		//- ←一応OK`);

const CBHtmlSample02 = ref(`<input type="text" name="school" placeholder="学校名">`);

const CBPugSample03 = ref(
`p 参照元は
	a(href='#', target='_blank', rel='external noopener') こちら`);

const CBHtmlSample03 = ref(`<p>参照元は<a href="#" target="_blank" rel="external noopener">こちら</a></p>`);
const CBHtmlSample03a = ref(`p 参照元は<a href="#" target="_blank" rel="external noopener">こちら</a>`);

const CBPugIDClass = ref(
`table.contets
	tr
		td#test1 Test1
		td#test2 Test2`);

const CBHtmlIDClass = ref(
`<table class="contets">
	<tr>
		<td id="test1">Test1</td>
		<td id="test2">Test2</td>
	</tr>
</table>`);

const CBPugWithoutDiv = ref(
`#top.box
	p Message
#bottom.box
	p Message`);

const CBHtmlWithoutDiv = ref(
`<div id="top" class="box">
	<p>Message</p>
</div>
<div id="bottom" class="box">
	<p>Message</p>
</div>`);

const CBPugMultiClass = ref(
`.box.left
	p.this.is.four.pens Test`);

const CBHtmlMultiClass = ref(
`<div class="box left">
	<p class="this is four pens">Test</p>
</div>`);

const CBHtmlMixin = ref(
`<ul>
	<li role="menuitem"><a href="sql-as.html" title="AS(別名)">AS(別名)</a></li>
	<li role="menuitem"><a href="sql-in.html" title="IN()(複数選択)">IN()(複数選択)</a></li>
	<li role="menuitem"><a href="sql-insertSelect.html" title="INSERT SELECT">INSERT SELECT</a></li>
	<li role="menuitem"><a href="sql-join.html" title="JOIN(テーブル結合)">JOIN(テーブル結合)</a></li>
	<li role="menuitem"><a href="sql-like.html" title="[WIP] LIKE(あいまい検索)">[WIP] LIKE(あいまい検索)</a></li>
	<li role="menuitem"><a href="sql-transaction.html" title="TRANSACTION(トランザクション)">TRANSACTION(トランザクション)</a></li>
	<li role="menuitem"><a href="sql-truncate.html" title="TRUNCATE(テーブルを空にする)">TRUNCATE(テーブルを空にする)</a></li>
	<li role="menuitem"><a href="sql-deleteFlag.html" title="[WIP] 削除フラグ">[WIP] 削除フラグ</a></li>
	<li role="menuitem"><a href="sql-MySQLinsertWhereExists.html" title="[MySQL] INSERT WHERE EXISTS">[MySQL] INSERT WHERE EXISTS</a></li>
	<li role="menuitem"><a href="sql-MySQLint.html" title="[MySQL] INT(11) の意味">[MySQL] INT(11) の意味</a></li>
	<li role="menuitem"><a href="sql-MySQLupdateSelect.html" title="[MySQL] UPDATE SELECT">[MySQL] UPDATE SELECT</a></li>
	<li role="menuitem"><a href="#" title="[MySQL/WIP] UTF-8のあれこれ">[MySQL/WIP] UTF-8のあれこれ</a></li>
</ul>`);

const CBScriptGulp = ref(
`const pug = require('gulp-pug');

gulp.task('pug', function {
	return gulp.src(['pug/**/*.pug', '!pug/**/_*.pug'])
	.pipe(pug())
	.pipe(gulp.dest('/../'));
});`);


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
.category--language {
	&.page--pug {
		.v-application {
			.title {
				font-family: unset !important;
				font-size: unset !important;
				font-weight: unset;
				line-height: unset;
				letter-spacing: unset !important;
			}
		}
	}
}
</style>
