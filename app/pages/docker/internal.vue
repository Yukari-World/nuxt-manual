<template lang="pug">
.category--docker.page--internal
	section
		h2 説明
		p Docker for WindowsおよびDocker for Macにおいて、コンテナからホストマシンのサービスにアクセスするための特別なDNS名である。これにより、コンテナ内のアプリケーションがホスト上で動作しているデータベースやAPIなどのサービスに接続できるようになる。

	section
		h2 使用方法と解説
		p 例えば、コンテナ内のアプリケーションがホストマシン上で動作しているMySQLデータベースに接続する場合、以下のように設定する。
		BlockCode.language-batch mysql -h host.docker.internal -u ユーザー名 -p パスワード データベース名

		p また、アプリケーションの設定ファイルでホスト名としてhost.docker.internalを指定することもできる。例えば、PHPのPDOを使用してデータベースに接続する場合、以下のように記述する。
		BlockCode.language-php {{ CBConnect }}

	section
		h2 注意点
		ul
			li host.docker.internalはDocker for WindowsおよびDocker for Macでのみ利用可能であり、Linux環境ではサポートされていない。
			li セキュリティ上の理由から、ホストマシン上のサービスにアクセスする際には適切な認証とアクセス制御を行うことが重要である。
			li ネットワーク設定やファイアウォールの設定によっては、コンテナからホストマシンへの接続が制限される場合があるため、必要に応じて設定を確認すること。
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'Dockerからホストマシンへの接続' });
const indexStore = useIndexStore();

const CBConnect = ref(`$dsn = 'mysql:host=host.docker.internal;dbname=**データベース名**;charset=utf8';
$username = '**ユーザー名**';
$password = '**パスワード**';

try {
	/**
	 * PHP Data Objects SQL Connector
	 * @var PDO
	 */
	$pdo = new PDO($dsn, $username, $password);
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
	header('Content-Type: text/plain; charset=UTF-8', true, 500);
	echo 'Connection failed: ' . $e->getMessage();
	exit;
}`);


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function () {
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>
