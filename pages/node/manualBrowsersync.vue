<template lang="pug">
.category-node.page-manual-browser-sync
	section
		h2 説明
		p Browsersyncとは、ファイルの更新があった時に自動でブラウザを更新する機能である。更新するブラウザの更新は複数の端末や複数のブラウザで同時に行われ、逐次F5更新を行う必要がなくなる。また、CSSボックス配置のデバッグ、フォーム入力の同期等の機能もある。

	section
		h2 導入手順
		h3 グローバルインストール
		ol
			li
				a(href='https://nodejs.org/ja/', title='Node.js', target='_blank', rel='external noopener') Node.js
				| をインストールする。すでに済んでいる場合は省略。また、インストール手順はインストールマニュアル参照。
			li
				| コマンドプロンプトを起動し、
				pre.language-batch.line-numbers: code.
					npm install -g browser-sync
				| と入力する。これでグローバル環境にBrowsersyncがインストールされる。
		h3 ローカルインストール
		ol
			li
				a(href='https://nodejs.org/ja/', title='Node.js', target='_blank', rel='external noopener') Node.js
				| をインストールする。すでに済んでいる場合は省略。また、インストール手順はインストールマニュアル参照。
			li
				| コマンドプロンプトを起動し、プロジェクトフォルダに移動する。対象パスにpackage.jsonが存在しない場合
				pre.language-batch.line-numbers: code.
					npm init
				| と入力し、パッケージの作成を行う。作成手順は省略する。
			li
				| パッケージを作成した、もしくは存在する場合は
				pre.language-batch.line-numbers: code.
					npm install browser-sync --save-dev
				| と入力する。これでローカルのプロジェクト環境にBrowsersyncがインストールされる。

	section
		h2 使用方法
		h3 xamppに対して使用する
		ol
			li
				| コマンドプロンプトを起動し、
				pre.language-batch.line-numbers: code.
					browser-sync start --proxy localhost:80 --files "*.html, *.css, *.js"
				| と入力する。
				code.language-batch: span.token.parameter.attr-name --files
				| の引数を変更することでファイル更新時の再読み込み対象を指定する事が出来る。
				br
				| ローカルインストールの場合、 パッケージを作成したディレクトリに移動し
				pre.language-batch.line-numbers: code.
					npx browser-sync start --proxy localhost:80 --files "*.html, *.css, *.js"
				| と入力する。

		h3 サーバーとして起動する
		ol
			li
				| コマンドプロンプトを起動し、
				pre.language-batch.line-numbers: code.
					browser-sync start --server --files "css/*.css"
				| と入力する。コマンドを起動した地点をルートパスとして起動する。但し、Browsersync単体ではPHP等の動的ページには対応できない。
				br
				| ローカルインストールの場合、 パッケージを作成したディレクトリに移動し
				pre.language-batch.line-numbers: code.
					npx browser-sync start --server --files "css/*.css"
				| と入力する。尚、
				code.language-batch: span.token.keyword.keyword-npx npx
				| コマンド自体最近登場したnpm関連のコマンドではあるが、現在Node.jsを新しくインストールした場合は付属するので特に問題はないと思われる。

		h3 Browsersync UIにアクセスする
		ol
			li
				| ローカルPCのネットブラウザのURLに
				pre.language-http.line-numbers: code.
					http://127.0.0.1:3001/
				| と入力することで開く。
			li
				| 外部からのネットブラウザから開く場合、アドレスURLに
				pre.language-http.line-numbers: code.
					http://(対象のLocal IP Address):3001/
				| と入力することで開く。

	section
		h2 使用上の注意
		ul
			li デフォルト設定でポート3000-3001、を使用するのでファイアウォールの許可が必要。
			li ローカルで使用する場合、IPが毎回変更されることを防ぐために固定することを推奨する。
			li 端末や画面サイズによっては画面スクロールの位置がズレることがあるがこれは仕様である(ブラウザ毎、レスポンシブ等で幅が異なる、スクロール同期は全体の高さを基にした割合のため)。
			li 複数のブラウザや端末で同じページを開いており、その何れかでリンクに移動した場合そのページを開いていた全ての端末とブラウザがそのページに移動するため要注意(正しくはクリックしたエリアを同期している)。尚Browsersync UIの設定で無効化できる。
			li ブラウザバックには対応していない。そのため戻る場合はJavaScript操作によるブラウザバックを除き全て手動で戻る必要がある。
			li 複数のブラウザを同時にリロードする関係上、ブラウザの再描画及び通信等で一時的に負荷が非常に大きくなる。
			li
				| gulp等のスクリプトにも利用できるため、Sass/SCSSコンパイル後にリロードの指示が出来る。
				s 但し、gulpの性質上、非同期処理なので、少し特殊な記述が必要(後日記述予定)。
				| gulp4が公開されたことにより処理手順を直列化できるようになった。

	section
		h2 リンク
		p
			a(href='https://browsersync.io/', target='_blank', rel='external noopener') Browsersync - Time-saving synchronised browser testing
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';
import 'prismjs/components/prism-batch';
import 'prismjs/components/prism-http';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'Browsersync導入マニュアル' });
const indexStore = useIndexStore();


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	highlightAll();
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>
