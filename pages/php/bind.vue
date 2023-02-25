<template lang="pug">
.category-php.page-bind
	section
		h2 説明
		p SQLコードを作成する時、外部からの値を参照して実行することがある。その際入力欄に制限等が成されていない場合、不正な値やSQLコードを入力される可能性がある。その問題を全てではないが防ぐ事ができる方法でもあるバインドについて説明する。

	section
		h2 使用方法と解説
		p
			| まずはバインドを使用しない例から記述。
			br
			| よくあるミスだが、パスワードは文字列なのでクォーテーションで囲むのを忘れないように注意。
			br
			| また、本来アスタリスク(*)はテスト以外に使用することは推奨されないので要注意。これはデータベースのデータ数が多くなる程レスポンスの低下やメモリ使用量の増大、データの隠密性等多くの問題が発生するためである。
		h3 MySQLi
		pre.language-php.line-numbers(data-line='1'): code.
			$query = "SELECT * FROM `user` WHERE `id` = " . $id . " AND `password` = PASSWORD('" . $password . "')";
			// SQLの実行
			if ($result = $mysqli-&gt;query($query)) {
				// 結果の取得
				while ($row = $result-&gt;fetch_assoc()) {
					$user[] = $row;
				}

				// 結果を閉じる
				$result-&gt;close();
			}

		p fetch_allに関してはmysqlndというネイティブドライバでのみ使用可能なため、使用を避けている。しかし問題点として上記のSQLの内容では問題とはならないが、処理の結果数千行となる場合は処理方法を工夫する必要が出てくる可能性があるため注意。

		h3 PDO
		pre.language-php.line-numbers(data-line='2'): code.
			try {
				$query = "SELECT * FROM `user` WHERE `id` = " . $id . " AND `password` = PASSWORD('" . $password . "')";
				$stmt = $pdo-&gt;prepare($query); // SQL Queryの格納
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

		p
			| このままでも問題はないように見えるが、入力する変数の種類に指定がないため
			a(href='https://ja.wikipedia.org/wiki/SQL%E3%82%A4%E3%83%B3%E3%82%B8%E3%82%A7%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3', title='SQLインジェクション', target='_blank', rel='external noopener') SQLインジェクション
			| などの問題が発生する可能性がある。もちろんこの記述方法を使う場合は大抵の場合これより手前で整合性の確認や無害化が行われている筈であるが、行っていないのであればまずはそこから見直すべきである。起こってからでは手遅れである。

		p 次に上のソースコードを基にバインドを利用した記述。
		h3 MySQLi
		pre.language-php.line-numbers(data-line='1-9'): code.
			$query = "SELECT * FROM `user` WHERE `id` = ? AND `password` = PASSWORD(?)";
			// SQL Queryの格納
			if ($stmt = $mysqli-&gt;prepare($query)) {
				// バインド
				$stmt-&gt;bind_param("is", (int)$id, $password);
				$stmt-&gt;execute(); // SQLの実行

				// 結果の格納(列の数だけ指定)
				$stmt-&gt;bind_result($col1, $col2, $col3, ...);

				// 結果の取得
				while ($stmt-&gt;fetch()) {
					$user[] = array($col1, $col2, $col3, ...);
				}

				// 結果を閉じる
				$result-&gt;close();
			}

		p
			| MySQLiの例。SQLに値を代入する位置にプレースホルダ`?`を挿入して指定した後一度
			code.language-php: span.token.function prepare
			| に格納する必要がある。格納した後にバインドする。
			br
			code.language-php: span.token.function bind_param
			| の第一引数は代入する変数の型を示しており、iはinterger数値を示しており、sはstring文字列を示している。第二引数以降には変数を指定する。直接値や文字列を指定することはできないので注意が必要。

		h3 PDO
		pre.language-php.line-numbers(data-line='2, 4-6'): code.
			try {
				$query = "SELECT * FROM `user` WHERE `id` = :id AND `password` = PASSWORD(:password)";
				$stmt = $pdo-&gt;prepare($query); // SQL Queryの格納
				// バインド
				$stmt-&gt;bindValue(':id', (int)$id, PDO::PARAM_INT);
				$stmt-&gt;bindValue(':password', $password, PDO::PARAM_STR);
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

		p
			| PDOの例。基本的な記述方法は殆ど変わらない。
			br
			| プレースホルダ?を使用する代わりに文字列でプレースホルダを作成することができる。文字列で作成する場合、先頭は必ずコロンで始まる。
			br
			code.language-php: span.token.function bindValue
			| の第一引数は代入するプレースホルダの位置を示しており、第二引数は代入する変数、もしくは値を示している。第三引数は変数の型を指定する。指定できる内容は以下の通りである。
		ul
			li
				code.language-php
					span.token.scope PDO
						span.token.punctuation ::
					span.token.constant PARAM_BOOL
			li
				code.language-php
					span.token.scope PDO
						span.token.punctuation ::
					span.token.constant PARAM_NULL
			li
				code.language-php
					span.token.scope PDO
						span.token.punctuation ::
					span.token.constant PARAM_INT
			li
				code.language-php
					span.token.scope PDO
						span.token.punctuation ::
					span.token.constant PARAM_STR
			li
				code.language-php
					span.token.scope PDO
						span.token.punctuation ::
					span.token.constant PARAM_LOB
		p
			| 似た関数に
			code.language-php: span.token.function bindParam
			| があるが、こちらは変数の取扱が異なり文字列として扱われる。また、整合性の確認タイミングも異なり、
			code.language-php: span.token.function bindValue
			| は代入直後、
			code.language-php: span.token.function bindParam
			| は実行直前に行われる。また、
			code.language-php: span.token.function bindParam
			| は直接値を取り扱うことができず、必ず変数を指定する必要がある。

	section
		h2 使用上の注意
		ul
			li プレースホルダに代入する値は再代入が可能である。その仕様を利用して同じSQL文を繰り返して実行することができる。
			li MySQLiのプレースホルダには名前での宣言はできない。名前を利用してバインドする場合はPDOに頼るしかない。
			li 指定した型以外の変数が代入された場合、例外処理が実行される。
			li 文字列のクォーテーションは自動で囲われるので不要である。
			li 日付や時間を取り扱う場合は文字列を指定する。
			li
				| LIKEであいまい検索を行うときは以下のように変数に対して囲むように記述する
				pre.language-php.line-numbers: code.
					| $stmt-&gt;bindValue(':name', '%' . $name . '%', PDO::PARAM_STR);

	section
		h2 参考リンク
		p
			a(href='http://php.net/manual/ja/mysqli-stmt.bind-param.php', target='_blank', rel='external noopener') PHP.net / mysqli_stmt::bind_param
			br
			a(href='http://php.net/manual/ja/mysqli-stmt.bind-result.php', target='_blank', rel='external noopener') PHP.net / mysqli_stmt::bind_result
			br
			a(href='http://php.net/manual/ja/pdostatement.bindparam.php', target='_blank', rel='external noopener') PHP.net / PDOStatement::bindParam
			br
			a(href='http://php.net/manual/ja/pdostatement.bindvalue.php', target='_blank', rel='external noopener') PHP.net / PDOStatement::bindValue
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'バインドを利用したSQLの実行' });
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
