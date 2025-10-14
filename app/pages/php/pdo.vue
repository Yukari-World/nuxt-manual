<template lang="pug">
.category--php.page--pdo
	section
		h2 説明
		p PDO(PHP Data Objects)とはデータベースの接続方法の一つである。PDOクラスを利用してデータベースから取得、更新、削除を行う。

	section
		h2 使用方法と解説
		h3 データベースへの接続
		p まずはデータベースの接続を行う。接続先等は適時書き換えること。
		BlockCode.language-php {{ CBConnect }}

		p xamppの設定が初期設定の場合、以下のように記述することで接続することができる。
		p データベースは適時書き換えること。
		BlockCode.language-php {{ CBConnectXampp }}

		h3 データの取得
		p 一般的なデータの取得を行う。PDOでは基本的にはtry文の中に記述していく。参照テーブルがuserとなっているが、必要に応じて参照先を変更すること。
		BlockCode.language-php {{ CBGet }}

		p バインドを利用した記述等は
			NuxtLink(:to="localePath('/php/bind')") 別のページ
			| にて説明する。

		h3 TRANSITIONの使用
		p 複数のSQLを一つの処理としてまとめて実行する場合、トランザクションを利用する。以下はトランザクションを利用した例である。
		BlockCode.language-php {{ CBTransition }}
		p トランザクションを利用する場合、全ての処理が成功した場合にのみコミットされる。もし一つでも失敗した場合、ロールバックされるため、データの整合性を保つことができる。

	section
		h2 使用上の注意
		ul
			li PDOを利用するには必要に応じたdllをphp.iniにて有効にする必要がある。例えばMySQLを利用する場合、pdo_mysqlを有効にする必要がある。
				br
				| 尚、MySQLはXAMPP環境ではデフォルトで有効になっているのでこの作業は不要である。
	section
		h2 参考リンク
		p
			NuxtLink(to="https://www.php.net/manual/ja/class.pdo.php", target="_blank", rel="external noopener") PHP.net
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'PDO(PHP Data Objects)' });
const indexStore = useIndexStore();
const localePath = useLocalePath();

const CBConnect = ref(`$dsn = 'mysql:host=**データベースドメイン**;dbname=**データベース名**;charset=utf8';
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
	die('Database Connection Failed: ' . $e->getMessage());
}`);

const CBConnectXampp = ref(`$dsn = 'mysql:host=localhost;dbname=**データベース名**;charset=utf8';
$username = 'root';
$password = '';

try {
	/**
	 * PHP Data Objects SQL Connector
	 * @var PDO
	 */
	$pdo = new PDO($dsn, $username, $password);
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
	die('Database Connection Failed: ' . $e->getMessage());
}`);

const CBGet = ref(`try {
	$query = "SELECT * FROM \`user\`";
	$stmt = $pdo->query($query);// SQLの実行
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC); // SQLの結果を取得

	// SQLの実行に失敗しておらず、取得結果がある場合、変数に格納
	if ($result !== false && count($result) > 0) {
		$user = $result;
	} else {
		throw(new Exception('Result is NULL!!'));
	}
} catch (PDOException $e) {
	die('Database Error: ' . $e->getMessage());
}`);

const CBTransition = ref(`try {
	// トランザクション開始
	$pdo->beginTransaction();

	// 処理1
	$query1 = "INSERT INTO \`user\` (\`name\`, \`email\`) VALUES (:name, :email)";
	$stmt1 = $pdo->prepare($query1); // SQLの格納
	$stmt1->bindValue(':name', $name, PDO::PARAM_STR);
	$stmt1->bindValue(':email', $email, PDO::PARAM_STR);
	$stmt1->execute(); // SQLの実行

	// 処理2
	$query2 = "UPDATE \`account\` SET \`status\` = :status WHERE \`id\` = :id";
	$stmt2 = $pdo->prepare($query2); // SQLの格納
	$stmt2->bindValue(':status', $status, PDO::PARAM_STR);
	$stmt2->bindValue(':id', (int)$id, PDO::PARAM_INT);
	$stmt2->execute(); // SQLの実行

	// コミット（変更を確定）
	$pdo->commit();
} catch (PDOException $e) {
	// エラーが発生した場合、ロールバック（変更を元に戻す）
	$pdo->rollBack();
	die('Transaction Failed: ' . $e->getMessage());
}`);


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
