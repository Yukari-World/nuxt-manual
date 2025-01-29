<template lang="pug">
.category--node.page--npm
	section
		h2 説明
		p Node.jsのパッケージはコマンドプロンプトで操作を行う。その際によく利用されるコマンドを記述する。

	section
		h2 コマンド
		h3 npm audit
		BlockCode.language-batch: pre.
			npm audit [--json]
			npm audit fix [--force|--package-lock-only|--dry-run|--production|--only=(dev|prod)]
		p npm 6.0.0から登場したコマンド。
			br
			| パッケージに存在する脆弱性を確認するコマンド。解決策がある場合は解決策が提示される。
			br
			| 但し、解決策は常に万能なわけではなく、破壊的変更が含まれる事があるため(その場合の修正案はforeコマンドがないと実行されない)、必ずしもその場で修正できるわけではないので、こまめに確認すること。

		h3 npm clean-install
		BlockCode.language-batch: pre.
			npm clean-install
			npm ci
		p package-lock.jsonにある情報をもとにパッケージをインストールする。installによるインストールと異なり、package-lock.jsonに記述されている依存関係がそのまま再現されるため、どの開発環境でも同じ環境で構築できる。
			br
			| また、キャッシュされているパッケージからインストールするため、インストール作業が早い。
			br
			| 但し、yarnを使用している等でpackage-lock.jsonがそもそも存在しない場合、動作しない。

		h3 npm dedupe
		BlockCode.language-batch: pre.
			npm dedupe
			npm ddp
		p パッケージ毎に存在するパッケージの依存関係を整理する。パッケージ更新直後は大量のエラーが発生することが多いため、ここで整合性を整理する。

		h3 npm init
		BlockCode.language-batch: pre.
			npm init [--force|-f|--yes|-y|--scope]
			npm init &lt;@scope&gt; (same as `npx &lt;@scope&gt;/create`)
			npm init [&lt;@scope&gt;/]&lt;name&gt; (same as `npx [&lt;@scope&gt;/]create-&lt;name&gt;`)
		p package.jsonの作成を行う。作成をする際、パッケージの名前、作成者、ライセンス等幾つか尋ねられる。

		h3 npm install
		BlockCode.language-batch: pre.
			npm install &lt;package&gt; &lt;option&gt;
			npm i &lt;package&gt; &lt;option&gt;
		p パッケージをインストールする。インストール済みパッケージで且バージョンが異なる場合は最新バージョンにアップデートする。
			br
			| GithubのURL等を指定してnpmに登録されていないパッケージをインストールすることもできる。
			br
			| npm installのみでインストールする場合、package.jsonからインストールする。

		h4 &lt;option&gt;
		ul
			li -g：グローバルパッケージとして保存する。
			li --save：パッケージとして保存する。
			li --save-dev：開発用パッケージとして保存する。
			li -D：開発用パッケージとして保存する。

		h3 npm list
		BlockCode.language-batch: pre.
			npm list &lt;option&gt;
			npm ls &lt;option&gt;
		p インストールされているパッケージとその依存関係を表示する。

		h3 npm outdated
		BlockCode.language-batch: pre.
			npm outdated
		p パッケージリストにある更新のあるパッケージを表示する。更新は行われない。

		h3 npm prune
		BlockCode.language-batch: pre.
			npm prune
		p node_modulesに存在する不要なパッケージを削除する。

		h3 npm run-script
		BlockCode.language-batch: pre.
			npm run-script &lt;command&gt;
			npm run &lt;command&gt;
		p パッケージに記述されているスクリプトを起動する。ローカルに登録されているコマンドスクリプトは基本的にここから起動する。

		h3 npm substack
		BlockCode.language-batch: pre.
			npm substack
		p substackの名言を表示する。所謂イースターエッグの一つ。

		h3 npm update
		BlockCode.language-batch: pre.
			npm update &lt;package&gt; &lt;option&gt;
			npm upgrade &lt;package&gt; &lt;option&gt;
			npm up &lt;package&gt; &lt;option&gt;
		p パッケージの更新を行う。
		h4 &lt;option&gt;
		ul
			li -g：グローバルパッケージに対して更新を行う。
			li -D：開発用パッケージに対して更新を行う。

		h3 npm uninstall
		BlockCode.language-batch: pre.
			npm uninstall &lt;package&gt;
			npm un &lt;package&gt;
		p パッケージのアンインストールを行う。

		h3 npm visnup
		BlockCode.language-batch: pre.
			npm visnup
		p (海外での)イジられキャラvisnupさんを生成する。所謂イースターエッグの一つ。

		h3 npm xmas
		BlockCode.language-batch: pre.
			npm xmas
		p コマンドラインにクリスマスツリーを生成する。ツリーの飾りは生成毎に異なる。所謂イースターエッグの一つ。

	section
		h2 便利なコマンド
		p 覚えておくと便利なコマンドを記述する。

		BlockCode.language-batch: pre.
			npm i &lt;package&gt;@&lt;version&gt; &lt;option&gt;
		p パッケージの特定のバージョンをインストールする。ベータ版をインストールする場合や最新版に特定の問題がある場合等に使用される。

		BlockCode.language-batch: pre.
			npm list -g --depth=0
		p グローバルにインストールされている最上位階層のディレクトリを表示する。

		BlockCode.language-batch: pre.
			npm update npm -g
		p npmコマンドをアップデートする。npm自体もパッケージの一つであり、時々更新されたりする。
			br
			| 最近はnpmのパッケージ更新があった場合、npmコマンド動作終了時にアップデートのアナウンスされる。

	section
		h2 リンク
		p
			NuxtLink(to="https://www.npmjs.com/", target="_blank", rel="external noopener") npm
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'npm コマンド' });
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
});
</script>

<script lang="ts">
</script>
