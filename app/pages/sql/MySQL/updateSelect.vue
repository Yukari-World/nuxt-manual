<template lang="pug">
.category--sql.sub--mysql.page--update-select
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
		BlockCode.language-sql {{ CBSample }}

	section
		h2 使用上の注意
		ul
			li
				TextToken(type="sql").keyword.keyword-UPDATE UPDATE
				| 句なのでテストを行う際は
				TextToken(type="sql").keyword.keyword-TRANSACTION TRANSACTION
				| 句と併用することを推奨する。
				TextToken(type="sql").keyword.keyword-TRANSACTION TRANSACTION
				| 句の使用方法は既に解説があるので省略する。
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'UPDATE SELECT' });
const indexStore = useIndexStore();

const CBSample = ref(`UPDATE
	\`table1\`,
	\`table2\`
SET
	\`table1\`.\`value\` = \`table2\`.\`value\`
WHERE
	\`table1\`.\`id\` = \`table2\`.\`id\`
;
`);


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
