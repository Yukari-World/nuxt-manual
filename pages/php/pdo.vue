<template lang="pug">
div
	section
		h2 説明
		p PDO(PHP Data Objects)とはデータベースの接続方法の一つである。PDOクラスを利用してデータベースから取得、更新、削除を行う。

	section
		h2 使用方法と解説
		h3 データベースへの接続
		p まずはデータベースの接続を行う。接続先等は適時書き換えること。
		pre.language-php.line-numbers: code.
			$dsn = 'mysql:host=*データベースドメイン*;dbname=*データベース名*;charset=utf8';
			$username = '*ユーザー名*';
			$password = '*パスワード*';

			try {
				/**
				 * PHP Data Objects SQL Connector
				 * @var PDO
				 */
				$pdo = new PDO($dsn, $username, $password);
				$pdo-&gt;setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			} catch (PDOException $e) {
				die('Database Connection Failed: ' . $e-&gt;getMessage());
			}

		p xamppの設定が初期設定の場合、以下のように記述することで接続することができる。
		p データベースは適時書き換えること。
		pre.language-php.line-numbers: code.
			$dsn = 'mysql:host=localhost;dbname=*データベース名*;charset=utf8';
			$username = 'root';
			$password = '';

			try {
				/**
				 * PHP Data Objects SQL Connector
				 * @var PDO
				 */
				$pdo = new PDO($dsn, $username, $password);
				$pdo-&gt;setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			} catch (PDOException $e) {
				die('Database Connection Failed: ' . $e-&gt;getMessage());
			}

		h3 データの取得
		p 一般的なデータの取得を行う。PDOでは基本的にはtry文の中に記述していく。参照テーブルがuserとなっているが、必要に応じて参照先を変更すること。
		pre.language-php.line-numbers: code.
			try {
				$query = "SELECT * FROM `user`";
				$stmt = $pdo-&gt;prepare($query); // SQLの格納
				$stmt-&gt;execute(); // SQLの実行
				$result = $stmt-&gt;fetchAll(PDO::FETCH_ASSOC); // SQLの結果を取得

				// SQLの実行に失敗しておらず、取得結果がある場合、変数に格納
				if ($result !== false &amp;&amp; count($result) &gt; 0) {
					$user = $result;
				} else {
					throw(new Exception('Result is NULL!!'));
				}
			} catch (PDOException $e) {
				die('Database Error: ' . $e-&gt;getMessage());
			}

		p バインドを利用した記述等は別のページにて説明する。

	section
		h2 使用上の注意
		ul
			li
				| PDOを利用するには必要に応じたdllをphp.iniにて有効にする必要がある。例えばMySQLを利用する場合、pdo_mysqlを有効にする必要がある。
				br
				| 尚、MySQLはXAMPP環境ではデフォルトで有効になっているのでこの作業は不要である。
	section
		h2 参考リンク
		p
			a(href='http://php.net/manual/ja/class.pdo.php', target='_blank', rel='external noopener') PHP.net
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';

export default {
	data() {
		return {
			header: {
				title: 'PDO(PHP Data Objects)',
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
