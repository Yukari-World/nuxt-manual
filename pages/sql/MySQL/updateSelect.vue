<template lang="pug">
div
	section
		h2 説明
		p
			| SQLデータベースには『方言』が存在する。この『方言』の存在によって通常とは異なる方法で行う必要が出てくることがある。これはその『方言』の一つで、SQL Serverでは
			code.language-sql
				span.token.keyword.keyword-UPDATE UPDATE
				span.token.keyword.space &nbsp;
				span.token.keyword.keyword-SELECT SELECT
			| で行えることがMySQLでは行えない。しかし、以下の方法でそれと同じことができる。

	section
		h2 使用方法と解説
		p
			| 以下の方法で同じことを再現できる。
		pre.language-sql.line-numbers: code.
			UPDATE
				`table1`,
				`table2`
			SET
				`table1`.`value` = `table2`.`value`
			WHERE
				`table1`.`id` = `table2`.`id`
			;

	section
		h2 使用上の注意
		ul
			li
				code.language-sql: span.token.keyword.keyword-UPDATE UPDATE
				| 句なのでテストを行う際は
				code.language-sql: span.token.keyword.keyword-TRANSACTION TRANSACTION
				| 句と併用することを推奨する。
				code.language-sql: span.token.keyword.keyword-TRANSACTION TRANSACTION
				| 句の使用方法は既に解説があるので省略する。
</template>

<script lang="ts">
import Vue from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-sql';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'UPDATE SELECT',
			},
		};
	},
	head(): object {
		return {
			title: this.header.title,
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
