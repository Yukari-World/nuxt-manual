<template lang="pug">
div
	section
		h2 説明
		p
			| SQLデータベースには『方言』が存在する。この『方言』の存在によって通常とは異なる方法で行う必要が出てくることがある。これはその『方言』の一つで、一般的なSQL Serverでは
			code.language-sql
				span.token.keyword.keyword-INSERT INSERT
				span.token.keyword.space &nbsp;
				span.token.keyword.keyword-WHERE WHERE
				span.token.keyword.space &nbsp;
				span.token.keyword.keyword-EXISTS EXISTS
			| で行えることがMySQLでは行えない。しかし、以下の方法でそれと同じことができる。

	section
		h2 INSERT WHERE EXISTSについての解説
		p
			code.language-sql
				span.token.keyword.keyword-INSERT INSERT
				span.token.keyword.space &nbsp;
				span.token.keyword.keyword-WHERE WHERE
				span.token.keyword.space &nbsp;
				span.token.keyword.keyword-EXISTS EXISTS
			| とはデータを挿入する時、既に既存のデータが有る場合、データを挿入しないという処理である。主にインデックスやユニークの値の被りを防ぐ意味でも使われる。というのもSQLはインデックス重複が発生すると重複エラーと共に止まってしまうためである。

	section
		h2 使用方法と解説
		p 以下の方法で同じことを再現できる。以下の例ではインデックスが2つある場合の例である。
		pre.language-sql.line-numbers: code.
			INSERT INTO -- 挿入する値
				`insert_table`(`index_1`, `index_2`, `column_1`)
			SELECT -- カラム重複回避のための記述
				`from_table`.`index_1`,
				`from_table`.`index_2`,
				`from_table`.`column_1`
			FROM -- 移行元のテーブル名
				`from_table`
			WHERE -- 重複確認
				NOT EXISTS(
					SELECT
						`insert_table`.`index_1`,
						`insert_table`.`index_2`
					FROM
						`insert_table`
					WHERE
						`insert_table`.`index_1` = `from_table`.`index_1` AND `insert_table`.`index_2` = `from_table`.`index_2` -- 重複確認する値。参照先に此等の値が既に存在する場合、挿入されない
				)
			;

	section
		h2 使用上の注意
		ul
			li
				| 値として代入する内容に同じ値が存在する場合、重複エラーとなる。対策としてカラム名を付ける事で対処できる。PHP等を使用しての
				code.language-sql: span.token.keyword.keyword-INSERT INSERT
				| やのループ処理等で応用できるため非常に重要である。
			li
				| 近い方法に
				code.language-sql: span.token.keyword.keyword-IGNORE IGNORE
				| を使用する方法がある。SQL文が非常に短くなるメリットがあるが、こちらはエラーを出力しないのでこの方法は推奨しない。
</template>

<script lang="ts">
import Vue from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-sql';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'INSERT WHERE EXISTS',
			},
		};
	},
	mounted() {
		Prism.highlightAll();
		// Prism.plugins.fileHighlight.highlight();
		this.updateHeader();
	},
	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('update-header', this.header.title);
		},
	},
});
</script>
