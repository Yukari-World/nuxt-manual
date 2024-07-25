<template lang="pug">
.category--php.sub--code-igniter.page--database
	AlertStub

	section
		h2 説明
		p 記述前

	section
		h2 使用方法と解説
		h3 データベースに接続前の準備
		p データベースに接続にあたってまずコンフィグにデータベース接続情報を入力する必要がある。
			br
			| CodeIgniter\config\database.phpにある配列にデータベース接続情報を入力する。
			br
			| 共同作業等でデータベースの接続情報が各個人で異なる場合はCodeIgniter\configにdevelopmentフォルダを作成し、そこにdatabase.phpを複製し設置する。

		BlockCode.language-php {{ CBConfig }}

	section
		h2 使用上の注意
		ul
			li
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'データベース接続' });
const indexStore = useIndexStore();

const CBConfig = ref(
`$db['default'] = array(
	'dsn'	=> '',
	# xamppやローカルサーバーで利用する場合はこのままで問題ない
	'hostname' => 'localhost',
	# xamppで利用する場合rootと記述。本番環境の場合可能な限りrootは避けること
	'username' => '',
	# xamppで利用する場合は空白のままで問題ない
	'password' => '',
	# データベース名。各自予め作成すること
	'database' => '',
	# 利用するデータベース接続方法。PHPの設定を確認すること。xamppで利用する場合はこのままで問題ない
	# サポートされているドライバー: cubrid, ibase, mssql, mysql, mysqli, oci8, odbc, pdo, postgre, sqlite, sqlite3, sqlsrv
	'dbdriver' => 'mysqli',
	'dbprefix' => '',
	'pconnect' => FALSE,
	# データベースエラーを表示するかどうか。初期値にあるこの値は本番でなければ表示するという意味である
	'db_debug' => (ENVIRONMENT !== 'production'),
	# SQLクエリを保存するかどうか
	'cache_on' => FALSE,
	# SQLクエリの保存先
	'cachedir' => '',
	# SQLクエリの文字エンコード
	'char_set' => 'utf8',
	# データベース照合文字エンコード。作成したデータベースに応じて変更すること
	'dbcollat' => 'utf8_general_ci',
	'swap_pre' => '',
	'encrypt' => FALSE,
	'compress' => FALSE,
	'stricton' => FALSE,
	'failover' => array(),
	'save_queries' => TRUE
);`);


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
