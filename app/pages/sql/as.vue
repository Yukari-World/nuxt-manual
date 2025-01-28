<template lang="pug">
.category--sql.page--as
	AlertStub

	section
		h2 説明
		p
			| SQLデータベースではデータテーブル単体参照するときは問題にならないが、式やテーブル同士の結合を行うとカラム名が不自然になることがある。この時、別名をつけることで参照しやすくすることができる

	section
		h2 使用方法と解説
		h3 使用するデータベース
		p
			span.text-decoration-line-through
				| 解説にあたり以下のデータベースを利用する。コピーすることで簡単に利用できる。尚このSQLコードは
				a(href="https://www.mysql.com/jp/", target="_blank", rel="external noopener") MySQL
				| もしくは
				a(href="https://mariadb.org/", target="_blank", rel="external noopener") MariaDB
				| で使用することを想定している。
			| 肥大化に伴い、
			NuxtLink(:to="localePath('/sample') + '#sqlSample'") サンプルデータに移行。

		h3 使用方法
		p 今回以下のSQL文から説明を行う
		BlockCode.language-sql {{ CBWithoutAS }}

		p
			| このまま使用してもエラーはなく実行できる。しかし出力結果は以下の通りである。
			br
			| 尚、このSQL出力結果のテーブルは
			a(href="https://www.heidisql.com/", target="_blank", rel="external noopener") HeidiSQL
			| で実行し、出力結果をHTML変換している。
		table
			caption SQL Code Result 1 (7 rows)
			thead
				tr
					th.col0 name
					th.col1 name
					th.col2 price
					th.col3 amount
					th.col4 `price` * `amount`
			tbody
				tr(v-for="(val, index) in tableData", :key="index")
					td.col0 {{ val.name }}
					td.col1 {{ val.productName }}
					td.col2 {{ val.price }}
					td.col3 {{ val.amount }}
					td.col4 {{ val.price * val.amount }}

		p
			| nameというカラムが2つもあり、何の名前を示しているのかわからない。
			br
			| また、金額を示すカラムについては式がカラム名となっており、不自然である。
			br
			| そこで
			TextToken(type="sql").keyword.keyword-AS AS
			| を使用することで別名をつけることができる

		BlockCode.language-sql {{ CBWithAS }}

		table
			caption SQL Code Result 2 (7 rows)
			thead
				tr
					th.col0 customerName
					th.col1 productName
					th.col2 price
					th.col3 amount
					th.col4 totalPrice
			tbody
				tr(v-for="(val, index) in tableData", :key="index")
					td.col0 {{ val.name }}
					td.col1 {{ val.productName }}
					td.col2 {{ val.price }}
					td.col3 {{ val.amount }}
					td.col4 {{ val.price * val.amount }}

	section
		h2 使用上の注意
		ul
			li 別名には日本語が使用することができる。しかし、それを使うのはMicrosoft Office Access位だろう。通常はプログラム側で表題をやカラム名を用意するのが好ましい
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'AS(別名)' });
const indexStore = useIndexStore();
const localePath = useLocalePath();

const tableData = reactive([
	{ name: '神崎商会', productName: 'りんご', price: 120, amount: 60 },
	{ name: '神崎商会', productName: 'みかん', price: 120, amount: 120 },
	{ name: '神崎商会', productName: 'バナナ', price: 90, amount: 50 },
	{ name: '神崎商会', productName: 'パイナップル', price: 300, amount: 50 },
	{ name: '神崎商会', productName: 'ブドウ', price: 400, amount: 30 },
	{ name: '神崎商会', productName: 'グレープフルーツ', price: 100, amount: 50 },
	{ name: '神崎商会', productName: '梨', price: 190, amount: 50 },
]);

const CBWithoutAS = ref(`SELECT
	\`customer\`.\`name\`,
	\`product\`.\`name\`,
	\`price\`,
	\`amount\`,
	\`price\` * \`amount\`
FROM
	\`order\`
INNER JOIN
	\`customer\`
		ON \`customer\`.\`id\` = \`order\`.\`customerID\`
INNER JOIN
	\`product\`
		ON \`product\`.\`id\` = \`order\`.\`productID\`
;`);

const CBWithAS = ref(`SELECT
	\`customer\`.\`name\` AS \`customerName\`,
	\`product\`.\`name\` AS \`productName\`,
	\`price\`,
	\`amount\`,
	\`price\` * \`amount\` AS \`totalPrice\`
FROM
	\`order\`
INNER JOIN
	\`customer\`
		ON \`customer\`.\`id\` = \`order\`.\`customerID\`
INNER JOIN
	\`product\`
		ON \`product\`.\`id\` = \`order\`.\`productID\`
;`);


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

<style lang="scss">
.category--sql {
	&.page--as {
		table {
			margin: 1rem auto;
			border-collapse: collapse;
		}

		thead {
			tr {
				color: CaptionText;
				background-color: ActiveCaption;
			}
		}

		th {
			color: #000000;
		}

		th, td {
			padding: 5px;
			font-family: "Tahoma", "Arial", "Helvetica", sans-serif;
			font-size: 1rem;
			vertical-align: top;
		}

		table, td {
			border: 1px solid silver;
		}

		.col2, .col3, .col4 {
			text-align: right;
		}
	}
}
</style>
