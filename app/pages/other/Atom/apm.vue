<template lang="pug">
.category--other.sub--atom.page--apm
	AlertStub

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
				BlockCode.language-batch {{ CBInstallBatch01 }}
				p パッケージ名で指定してインストールする。スペースを空けて連続して入力することで複数導入できる。

			li
				BlockCode.language-batch {{ CBInstallBatch02 }}
				p バージョンを指定してインストールする。特定のバージョンにて不具合がある等古いバージョンである必要があるときに使う。指定しない場合、自動的に現行最新版が導入される。

			li
				BlockCode.language-batch {{ CBInstallBatch03 }}
				p Gitにて配布されているパッケージをインストールする。

			li
				BlockCode.language-batch {{ CBInstallBatch04 }}
				p Gitにて配布されているパッケージをインストールする。特定のバージョンにて不具合がある等古いバージョンである必要があるときに使う。

			li
				BlockCode.language-batch {{ CBInstallBatch05 }}
				p ファイルに記入されているパッケージ情報から一括でインストールを行う。統一環境を構築する時に扱いやすい。

		h3 apm list
		p インストールされているパッケージの一覧を表示する。

		ul
			li
				BlockCode.language-batch {{ CBListBatch01 }}
				p インストールされているパッケージの一覧を表示する。

			li
				BlockCode.language-batch {{ CBListBatch02 }}
				p インストールされているテーマの一覧を表示する。

			li
				BlockCode.language-batch {{ CBListBatch03 }}
				p インストールされているパッケージ(テーマは除く)の一覧を表示する。

			li
				BlockCode.language-batch {{ CBListBatch04 }}
				p apm listと同じ。

			li
				BlockCode.language-batch {{ CBListBatch05 }}
				p インストールされているパッケージの内、有効になっている一覧を表示する。

			li
				BlockCode.language-batch {{ CBListBatch06 }}

			li
				BlockCode.language-batch {{ CBListBatch07 }}

		h3 apm update
		h3 apm upgrade
		p インストールしているパッケージをアップデートする。

		ul
			li
				BlockCode.language-batch {{ CBUpgradeBatch01 }}
				p インストールされているパッケージの内、更新可能なパッケージがある場合、更新を行う。

			li
				BlockCode.language-batch {{ CBUpgradeBatch02 }}

			li
				BlockCode.language-batch {{ CBUpgradeBatch03 }}
				p パッケージ名で指定して更新を行う。スペースを空けて連続して入力することで複数更新できる。

	section
		ul
			li 使用できるコマンドの殆どはNode.jsのnpmコマンドに似通っている。
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'apm Command' });
const indexStore = useIndexStore();

const CBInstallBatch01 = ref(`apm install [<package_name>...]`);
const CBInstallBatch02 = ref(`apm install <package_name>@<package_version>`);
const CBInstallBatch03 = ref(`apm install <git_remote>`);
const CBInstallBatch04 = ref(`apm install <github_username>/<github_project>`);
const CBInstallBatch05 = ref(`apm install --packages-file my-packages.txt`);

const CBListBatch01 = ref(`apm list`);
const CBListBatch02 = ref(`apm list --themes`);
const CBListBatch03 = ref(`apm list --packages`);
const CBListBatch04 = ref(`apm list --installed`);
const CBListBatch05 = ref(`apm list --installed --enabled`);
const CBListBatch06 = ref(`apm list --installed --bare > my-packages.txt`);
const CBListBatch07 = ref(`apm list --json`);

const CBUpgradeBatch01 = ref(`apm upgrade`);
const CBUpgradeBatch02 = ref(`apm upgrade --list`);
const CBUpgradeBatch03 = ref(`apm upgrade [<package_name>...]`);


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
