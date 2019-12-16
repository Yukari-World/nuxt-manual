<template lang="pug">
div
	section
		h2 説明
		h3 まず最初に
		p データテーブルに多大な影響を与える危険なコマンドであり、悪用しないように注意すること。

		h3 改めて説明
		p
			code.language-sql: span.token.keyword.keyword-TRUNCATE TRUNCATE
			| はテーブルにあるデータを白紙にするコマンドである。このコマンドは、
			code.language-sql: span.token.keyword.keyword-DELETE DELETE
			| 句では影響しない範囲も含めて白紙にする。

	section
		h2 使用方法と解説
		p 至って単純である。
		pre.language-sql.line-numbers: code.
			TRUNCATE `table_name1`, `table_name2`, ...;

	section
		h2 使用上の注意
		ul
			li コマンド使用時は必ずテーブル名を再度確認し、削除先を間違えないようにすること。また、バックアップを忘れずに。
			li 外部参照を行っていた場合、整合性を一切確認しないためデータベースに不釣合いが起こる場合がある。実行する場合は後述するコマンドの方が好ましい場合がある。但し、データベースによっては外部参照がある場合、実行されないことがある。
			li
				| 似た手法に
				pre.language-sql.line-numbers: code.
					DELETE FROM `table_name`;
				| があるが、こちらは
				code.language-sql: span.token.keyword.keyword-AUTO_INCREMENT AUTO_INCREMENT
				| のカウントをリセットしない(
				code.language-sql: span.token.keyword.keyword-TRUNCATE TRUNCATE
				| はカウントをリセットする)。
			li
				| 一部のデータベースの例外を除き
				code.language-sql: span.token.keyword.keyword-TRANSACTION TRANSACTION
				| を利用してもロールバックすることができない。これは
				code.language-sql: span.token.keyword.keyword-TRUNCATE TRUNCATE
				| 実行後、自動的に
				code.language-sql: span.token.keyword.keyword-COMMIT COMMIT
				| されるためである。
			li 非常に単純なコマンドではあるが、再度記述するがデータベースを空にする非常に危険なコマンドである。必要がない限りは使用しないこと。
			li
				| 悪用を防ぐために、パーミッションによりこのコマンドの使用できるユーザーを制限することができる。データベース管理者はコマンド権限の確認を忘れずに。MySQLの場合、DROP権限を無効化すると使用できなくなる。
				br
				| 特にPHP等のスクリプトを通す場合、外部からの悪質な入力対策を怠らないように。

	section
		h2 参考リンク
		p
			a(href='https://www.postgresql.jp/document/10/html/sql-truncate.html', target='_blank', rel='external noopener') PostgreSQL
			br
			a(href='https://ja.wikipedia.org/wiki/TRUNCATE_(SQL)', target='_blank', rel='external noopener') Wikipedia
</template>

<script>
import Prism from 'prismjs';

export default {
	data() {
		return {
			header: {
				title: 'TRUNCATE(テーブルを空にする)'
			}
		};
	},
	mounted() {
		Prism.highlightAll();
		Prism.fileHighlight();
		this.updateHeader();
	},
	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('updateHeader', this.header.title);
		}
	}
};
</script>
