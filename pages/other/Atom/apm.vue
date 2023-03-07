<template lang="pug">
.category-other.sub-atom.page-apm
	v-alert(type='info', border='start', colored-border, dense, elevation='5', :title="$t('common.stub.workInProgress.title')", :text="$t('common.stub.workInProgress.desc')")

	section
		h2 説明
		p apmコマンドとはAtomインストール時に一緒にインストールされるコマンドである。apmコマンドを活用することでAtomを起動することなくインストールされているパッケージの管理を行う事が出来る。これは特定のパッケージが原因でAtomが起動できない場合でも重宝する。なお、Atom自体にもコマンドも存在するが、ここでは割愛する。

	section
		h2 使用する前に
		ul
			li 一部のapmコマンドを使用するにはGithubアカウントが必要であり、更にAtomとアカウントを連携させる必要がある。
			li apmコマンドはNode.jsのnpmコマンドそのものであり、その使用を理解している場合、一部の独自コマンドを除けばnpmコマンドの感覚で使用する事が出来る。

	section
		h2 コマンド

		h3 apm install(apm i)
		p パッケージをインストールする。

		ul
			li
				pre.language-batch.line-numbers: code.
					apm install [&lt;package_name&gt;...]
				p パッケージ名で指定してインストールする。スペースを空けて連続して入力することで複数導入できる。

			li
				pre.language-batch.line-numbers: code.
					apm install &lt;package_name&gt;@&lt;package_version&gt;
				p バージョンを指定してインストールする。特定のバージョンにて不具合がある等古いバージョンである必要があるときに使う。指定しない場合、自動的に現行最新版が導入される。

			li
				pre.language-batch.line-numbers: code.
					apm install &lt;git_remote&gt;

			li
				pre.language-batch.line-numbers: code.
					apm install &lt;github_username&gt;/&lt;github_project&gt;

			li
				pre.language-batch.line-numbers: code.
					apm install --packages-file my-packages.txt
				p ファイルに記入されているパッケージ情報から一括でインストールを行う。統一環境を構築する時に扱いやすい。

		h3 apm list
		p インストールされているパッケージの一覧を表示する。

		ul
			li
				pre.language-batch.line-numbers: code.
					apm list
				p インストールされているパッケージの一覧を表示する。

			li
				pre.language-batch.line-numbers: code.
					apm list --themes
				p インストールされているテーマの一覧を表示する。

			li
				pre.language-batch.line-numbers: code.
					apm list --packages
				p インストールされているパッケージ(テーマは除く)の一覧を表示する。

			li
				pre.language-batch.line-numbers: code.
					apm list --installed
				p apm listと同じ。

			li
				pre.language-batch.line-numbers: code.
					apm list --installed --enabled
				p インストールされているパッケージの内、有効になっている一覧を表示する。

			li
				pre.language-batch.line-numbers: code.
					apm list --installed --bare &gt; my-packages.txt

			li
				pre.language-batch.line-numbers: code.
					apm list --json

		h3 apm update
		h3 apm upgrade
		p インストールしているパッケージをアップデートする。

		ul
			li
				pre.language-batch.line-numbers: code.
					apm upgrade
				p インストールされているパッケージの内、更新可能なパッケージがある場合、更新を行う。

			li
				pre.language-batch.line-numbers: code.
					apm upgrade --list

			li
				pre.language-batch.line-numbers: code.
					apm upgrade [&lt;package_name&gt;...]
				p パッケージ名で指定して更新を行う。スペースを空けて連続して入力することで複数更新できる。

	section
		ul
			li 使用できるコマンドの殆どはNode.jsのnpmコマンドに似通っている。

</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';
import 'prismjs/components/prism-batch';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'apm Command' });
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
