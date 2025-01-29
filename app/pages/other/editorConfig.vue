<template lang="pug">
.category--other.page--editor-config
	section
		h2 EditorConfigとは
		p EditorConfigとはエディター毎に存在するインデント設定や改行コードの設定等を統一する設定ファイルとそのプラグインである。ファイル毎に応じてその設定を変更することができ、また、プロジェクト毎に管理できるので記述ルールの整合性をある程度ではあるが保つことができる。

	section
		h2 導入方法
		p エディターによってはデフォルトで対応している場合もあるが、プラグインを必要としているものもある。
			br
			| 詳細な導入方法は別日記述予定。

		h3 Atom
		h4 コマンドラインからインストール
		p コマンドラインに以下のコマンドを入力することでインストールできる。但し、Atomがマニュアルインストールの場合使用することができない。
		BlockCode.language-batch {{ CBApm }}

		h4 パッケージからインストール
		p EditorConfigと検索すると結果に出てくるのでそれをインストールする。

		h4 インストールにおける注意点
		p whitespace(Atomのデフォルトパッケージ)のパッケージが競合するため、設定変更、もしくは無効化をすること。
		p インデントの設定をautoに設定すること。

		h3 Visual Stdio Code
		p 拡張機能からEditorConfig for VS Codeをインストールする。
			span.text-decoration-line-through インストール後、エディタを再起動する。
			|現在は再起動不要、特別な設定は必要としない。

	section
		h2 設定ファイル
		p 設定ファイルは.editorconfigファイルに記述する。
		h3 .editorconfigの例
		BlockCode.language-ini {{ CBConfig }}

		p 設定は上から下へと適応される。

		h3 設定項目の説明

		h4 indent_style
		p TABキーを入力した時のインデント方法を指定する。指定可能な項目は以下の通り。
		ul
			each val in ['tab', 'space']
				li= val

		h4 indent_size
		p インデントサイズを指定する。

		h4 tab_width
		p タブのインデントサイズを指定する。未指定の場合、indent_sizeの値が適応される。

		h4 end_of_line
		p ファイルの改行コードを指定する。指定可能な項目は以下の通り。
		ul
			each val in ['lf', 'cr', 'crlf']
				li= val

		h4 charset
		p ファイルの文字コードを指定する。指定可能な項目は以下の通り。
		ul
			each val in ['latin1', 'utf-8', 'utf-8-bom', 'utf-16be', 'utf-16le']
				li= val

		h4 trim_trailing_whitespace
		p 行末にあるスペースやタブといった空白を削除するか指定する。trueに指定すると行末の空白を削る。指定可能な項目は以下の通り。
		ul
			each val in ['true', 'false']
				li= val

		h4 insert_final_newline
		p 最終行に空白の行を追加するか指定する。指定可能な項目は以下の通り。
		ul
			each val in ['true', 'false']
				li= val

		h4 root
		p このコンフィグファイルが最上階であるか指定する。falseの場合、ルートディレクトリまで遡って.editorconfigファイルを捜索する。指定可能な項目は以下の通り。
		ul
			each val in ['true', 'false']
				li= val

	section
		h2 リンク
		p
			NuxtLink(to="https://editorconfig.org/", target="_blank", rel="external noopener") EditorConfig
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'EditorConfig' });
const indexStore = useIndexStore();

const CBApm = ref(`apm install editorconfig`);

const CBConfig = ref(`# EditorConfigの最上位ファイルであることを示す
root = true

# 全体共通設定
[*]
charset = utf-8
end_of_line = lf
indent_size = 4
indent_style = tab
insert_final_newline = true
trim_trailing_whitespace = true

# PHPファイル全体に適応する内容
[*.php]
indent_style = space

# YAMLファイルへの指定。複数の拡張子指定も可能だが、カンマの間にスペースを入れてはならない
[*.{yaml,yml}]
indent_style = space
indent_size = 2

# ファイル名を直接指定することもできる
[package.json]
indent_size = 2`);


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
