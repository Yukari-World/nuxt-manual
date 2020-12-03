<template lang="pug">
div
	section
		h2 説明
		p Node.jsのパッケージはコマンドプロンプトで操作を行う。その際によく利用されるコマンドを記述する。

	section
		h2 コマンド
		h3 npm audit
		pre.language-batch.line-numbers: code.
			npm audit [--json]
			npm audit fix [--force|--package-lock-only|--dry-run|--production|--only=(dev|prod)]
		p
			| npm 6.0.0から登場したコマンド。
			br
			| パッケージに存在する脆弱性を確認するコマンド。解決策がある場合は解決策が提示される。

		h3 npm dedupe
		pre.language-batch.line-numbers: code.
			npm dedupe
			npm ddp
		p パッケージ毎に存在するパッケージの依存関係を整理する。パッケージ更新直後は大量のエラーが発生することが多いため、ここで整合性を整理する。

		h3 npm init
		pre.language-batch.line-numbers: code.
			npm init [--force|-f|--yes|-y|--scope]
			npm init &lt;@scope&gt; (same as `npx &lt;@scope&gt;/create`)
			npm init [&lt;@scope&gt;/]&lt;name&gt; (same as `npx [&lt;@scope&gt;/]create-&lt;name&gt;`)
		p package.jsonの作成を行う。作成をする際、パッケージの名前、作成者、ライセンス等幾つか尋ねられる。

		h3 npm install
		pre.language-batch.line-numbers: code.
			npm install &lt;package&gt; &lt;option&gt;
			npm i &lt;package&gt; &lt;option&gt;
		p
			| パッケージをインストールする。インストール済みパッケージで且バージョンが異なる場合は最新バージョンにアップデートする。
			br
			| GithubのURL等を指定してnpmに登録されていないパッケージをインストールすることもできる。
			br
			| npm installのみでインストールする場合、package.jsonからインストールする。

		h3 &lt;option&gt;
		ul
			li -g：グローバルパッケージとして保存する。
			li --save：パッケージとして保存する。
			li --save-dev：開発用パッケージとして保存する。
			li -D：開発用パッケージとして保存する。

		h3 npm list
		pre.language-batch.line-numbers: code.
			npm list &lt;option&gt;
			npm ls &lt;option&gt;
		p
			| インストールされているパッケージとその依存関係を表示する。

		h3 npm outdated
		pre.language-batch.line-numbers: code.
			npm outdated
		p
			| パッケージリストにある更新のあるパッケージを表示する。更新は行われない。

		h3 npm prune
		pre.language-batch.line-numbers: code.
			npm prune
		p
			| node_modulesに存在する不要なパッケージを削除する。

		h3 npm run-script
		pre.language-batch.line-numbers: code.
			npm run-script &lt;command&gt;
			npm run &lt;command&gt;
		p
			| パッケージに記述されているスクリプトを起動する。ローカルに登録されているコマンドスクリプトは基本的にここから起動する。

		h3 npm substack
		pre.language-batch.line-numbers: code.
			npm substack
		p
			| substackの名言を表示する。所謂イースターエッグの一つ。

		h3 npm update
		pre.language-batch.line-numbers: code.
			npm update &lt;package&gt; &lt;option&gt;
			npm upgrade &lt;package&gt; &lt;option&gt;
			npm up &lt;package&gt; &lt;option&gt;
		p
			| パッケージの更新を行う。
		h3 &lt;option&gt;
		ul
			li -g：グローバルパッケージに対して更新を行う。
			li -D：開発用パッケージに対して更新を行う。

		h3 npm uninstall
		pre.language-batch.line-numbers: code.
			npm uninstall &lt;package&gt;
			npm un &lt;package&gt;
		p
			| パッケージのアンインストールを行う。

		h3 npm visnup
		pre.language-batch.line-numbers: code.
			npm visnup
		p
			| (海外での)イジられキャラvisnupさんを生成する。所謂イースターエッグの一つ。

		h3 npm xmas
		pre.language-batch.line-numbers: code.
			npm xmas
		p
			| コマンドラインにクリスマスツリーを生成する。ツリーの飾りは生成毎に異なる。所謂イースターエッグの一つ。

	section
		h2 便利なコマンド
		p 覚えておくと便利なコマンドを記述する。

		pre.language-batch.line-numbers: code.
			npm i &lt;package&gt;@&lt;version&gt; &lt;option&gt;
		p パッケージの特定のバージョンをインストールする。ベータ版をインストールする場合や最新版に特定の問題がある場合等に使用される。

		pre.language-batch.line-numbers: code.
			npm list -g --depth=0
		p グローバルにインストールされている最上位階層のディレクトリを表示する。

		pre.language-batch.line-numbers: code.
			npm update npm -g
		p npmコマンドをアップデートする。npm自体もパッケージの一つであり、時々更新されたりする。

	section
		h2 リンク
		p
			a(href='https://www.npmjs.com/', target='_blank', rel='external noopener') npm
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-batch';

export default {
	data() {
		return {
			header: {
				title: 'npm コマンド',
			},
		};
	},
	mounted() {
		Prism.highlightAll();
		// Prism.fileHighlight();
		this.updateHeader();
	},
	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('update-header', this.header.title);
		},
	},
};
</script>
