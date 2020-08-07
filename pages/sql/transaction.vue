<template lang="pug">
div
	section
		h2 説明
		p
			code.language-sql: span.token.keyword.keyword-INSERT INSERT
			| ,&nbsp;
			code.language-sql: span.token.keyword.keyword-UPDATE UPDATE
			| ,&nbsp;
			code.language-sql: span.token.keyword.keyword-DELETE DELETE
			| といったSQLコマンドはデータベースの変動を伴うため、正確に記述しなければならない。しかし、テスト環境を構築した上で、データを崩さずに確認したい場合がある。そのときに使えるコマンドである。
			br
			| また、更新などで複数のデータテーブルの内容を更新を行う時、更新処理を行う途中でエラー等により処理を中断する際に発生するデータテーブルの一部は更新したが一部は更新しなかったことで起こるデータの不整合を防ぐ事にも使用できる。

	section
		h2 使用方法と解説
		h3 COMMIT
		p
			code.language-sql: span.token.keyword.keyword-COMMIT COMMIT
			| とは処理を確定させるために使う。使用方法は至って単純である。
		pre.language-sql.line-numbers: code.
			START TRANSACTION;
			-- ~~~ SQL CODE ~~~
			COMMIT;
		p トランザクションを挟むことで複数の処理で一つの処理として取り扱われる。

		h3 ROLLBACK
		p
			code.language-sql: span.token.keyword.keyword-ROLLBACK ROLLBACK
			| とは、データベースを更新前のデータに戻す時に使用される。こちらも使用方法は至って単純である。
		pre.language-sql.line-numbers: code.
			START TRANSACTION;
			-- ~~~ SQL CODE ~~~
			ROLLBACK;
		p
			| 尚、トランザクションを省略した時の通常動作は
			code.language-sql: span.token.keyword.keyword-COMMIT COMMIT
			| で動作する。

	section
		h2 使用上の注意
		ul
			li
				| ロールバックされるまでSQL実行結果は保持される。
				code.language-sql: span.token.keyword.keyword-INSERT INSERT
				| や
				code.language-sql: span.token.keyword.keyword-UPDATE UPDATE
				| 、
				code.language-sql: span.token.keyword.keyword-DELETE DELETE
				| を行った後に
				code.language-sql: span.token.keyword.keyword-SELECT SELECT
				| 文を実行することで反映されたデータテーブルを確認できる。
			li
				| ロールバックされるからと言って間違っても本番環境で使用しないように注意。
				code.language-sql
					span.token.keyword.keyword-START START
					span.token.keyword.space &nbsp;
					span.token.keyword.keyword-TRANSACTION TRANSACTION;
				| を入力することを忘れた場合、効果がないためである。
			li
				code.language-sql: span.token.keyword.keyword-AUTO_INCREMENT AUTO_INCREMENT
				| はSQLの結果がロールバックされる場合でも通常通りカウントされ、元に戻ることはない。このためID番号にて不揃いが発生する可能性がある。
			li
				| 一部のSQLコマンドはトランザクションの影響を受けない。これは実行後自動的に
				code.language-sql: span.token.keyword.keyword-COMMIT COMMIT
				| 動作が実行されるためである。
			li PHPでSQLトランザクションを行う場合、PHP側にその処理に該当する関数が存在するのでそちらを使用すると良い。

	section
		h2 参考リンク
		p
			a(href='https://dev.mysql.com/doc/refman/5.6/ja/commit.html', target='_blank', rel='external noopener') MySQL :: MySQL 5.6 リファレンスマニュアル :: 13.3.1 START TRANSACTION、COMMIT、および ROLLBACK 構文
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-sql';

export default {
	data() {
		return {
			header: {
				title: 'TRANSACTION(トランザクション)',
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
			this.$nuxt.$emit('updateHeader', this.header.title);
		},
	},
};
</script>
