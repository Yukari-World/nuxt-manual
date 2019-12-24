<template lang="pug">
div
	section
		h2 説明
		p
			| SQLのデータテーブルを元に別のテーブルを作成したい場合がある。それを実現する方法が
			code.language-sql
				span.token.keyword.keyword-INSERT INSERT
				span.token.keyword.space &nbsp;
				span.token.keyword.keyword-SELECT SELECT
			| 文である。

	section
		h2 使用方法と解説
		p 通常、INSERT文は
		pre.language-sql.line-numbers: code.
			INSERT INTO
				`table_name`(`column1`, `column2`, `column3`, ...)
				VALUES(value1, value2, value3, ...);
		p
			| と記述される。
			br
			code.language-sql
				span.token.keyword.keyword-INSERT INSERT
				span.token.keyword.space &nbsp;
				span.token.keyword.keyword-SELECT SELECT
			| 文の場合、以下の記述となる。
			br
			| ここでは移転先をtable_name_a、移転元をtable_name_bとする。
		pre.language-sql.line-numbers: code.
			INSERT INTO
				`table_name_a`(`column_a1`, `column_a2`, `column_a3`, ...)
				SELECT
					`column_b1`, `column_b2`, `column_b3`, ...
				FROM
					`table_name_b`
				WHERE
					Where Query...
			;

	section
		h2 使用上の注意
		ul
			li
				| MySQLで
				code.language-sql
					span.token.keyword.keyword-INSERT INSERT
					span.token.keyword.space &nbsp;
					span.token.keyword.keyword-WHERE WHERE
					span.token.keyword.space &nbsp;
					span.token.keyword.keyword-EXISTS EXISTS
				| を使用する場合、方言による制約でこの方法を使用しないと使用できない。この方法については
				nuxt-link(to='/sql/MySQLinsertWhereExists', title='[MySQL] INSERT WHERE EXISTS') 別のページにて参照されたし。
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-sql';

export default {
	data() {
		return {
			header: {
				title: 'INSERT SELECT'
			}
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
		}
	}
};
</script>
