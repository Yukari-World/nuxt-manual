<template lang="pug">
.category--sql.page--join
	AlertStub

	section
		h2 説明
		p
			| SQLデータベースではデータテーブル同士を参照し合うことが多い。その際使用するのが
			TextToken(type="sql").keyword.keyword-JOIN JOIN
			| であるが、内部結合と外部結合の2種類があるためそれぞれについて説明する。

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
			NuxtLink(:to="localePath('/sample#sqlSample')" title="サンプルデータ") サンプルデータに移行。

		h3 内部結合
		p
			| 内部結合を行う場合、
			code.language-sql
				span.token.keyword.keyword-INNER INNER
				span.token.keyword.space &nbsp;
				span.token.keyword.keyword-JOIN JOIN
			| を利用する。
			TextToken(type="sql").keyword.keyword-ON ON
			| 句の内容の順序は特に定められていないが記述順序を定めておくとミスが少なくなる。
		BlockCode.language-sql {{ CBInnerJoin }}
		p
			| 注意点としてcustomerテーブルとproductテーブルにはidとnameがどちらにも存在すること。この場合、id、もしくはnameのみを指定した場合、エラーとなる。このような重複が発生する場合、
			b テーブル名.カラム名
			| とすることで重複していても問題なく実行することができる

	section
		h2 使用上の注意
		ul
			li
				| まず起こりえないと思われるが、MySQLに置いて1つの参照に置いて結合できる
				TextToken(type="sql").keyword.keyword-JOIN JOIN
				| 句の限界は61個である。
			li
				code.language-sql
					span.token.keyword.keyword-INNER INNER
					span.token.keyword.space &nbsp;
					span.token.keyword.keyword-JOIN JOIN
				| と
				code.language-sql
					span.token.keyword.keyword-OUTER OUTER
					span.token.keyword.space &nbsp;
					span.token.keyword.keyword-JOIN JOIN
				| は共存することができる。しかし複雑になりがちなのでデータベースの構造と目的を予めよく確認した上で行うこと。

	section
		h2 おまけ『INNER JOINとOUTER JOINの混在の例』
		p 作業工程にて実際に使用した例。複雑に見えるが、実際のデータベースそのものは非常に単純な構造である。
		BlockCode.language-sql {{ CBMinifyInnerOuterJoin }}
		p 整形した内容。
		BlockCode.language-sql {{ CBInnerOuterJoin }}
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'JOIN(テーブル結合)' });
const indexStore = useIndexStore();
const localePath = useLocalePath();

const CBInnerJoin = ref(`SELECT
	\`customer\`.\`name\` AS \`customerName\`,
	\`product\`.\`name\` AS \`productName\`,
	\`price\`,
	\`amount\`
FROM
	\`order\`
INNER JOIN
	\`customer\`
		ON \`customer\`.\`id\` = \`order\`.\`customerID\`
INNER JOIN
	\`product\`
		ON \`product\`.\`id\` = \`order\`.\`productID\`
;`);

const CBMinifyInnerOuterJoin = ref('SELECT `name_f`, `gakuseki_num`, `school`.`name` AS `schoolName`, `school_course`.`name` AS `departmentName`, `school_class`.`name` AS `className`, IfNull(COUNT(`enq_answered`.`id`), 0) AS `answered` FROM `user` INNER JOIN `school` ON `school`.`id` = `user`.`school_id` INNER JOIN `school_course` ON `school_course`.`id` = `user`.`course_id` INNER JOIN `school_class` ON `school_class`.`id` = `user`.`class_id` INNER JOIN `post_movie` ON `post_movie`.`user_id` = `user`.`id` INNER JOIN `enq_group` ON DATE_FORMAT(`reserve_date`, \'%Y-%c-%d %H:%i:%s\') >= DATE_FORMAT(`date_start`, \'%Y-%c-%d %H:%i:%s\') AND DATE_FORMAT(`reserve_date`, \'%Y-%c-%d %H:%i:%s\') <= DATE_FORMAT(`date_end`, \'%Y-%c-%d %H:%i:%s\') LEFT OUTER JOIN `enq_answered` ON `enq_group`.`id` = `enq_answered`.`enq_group_id` AND `enq_answered`.`user_id` = `user`.`id` WHERE `user`.`is_regist` = 1 AND `user`.`is_delete` = 0 GROUP BY `user`.`id`, `enq_group`.`id`;');

const CBInnerOuterJoin = ref(`SELECT
	\`name_f\`,
	\`gakuseki_num\`,
	\`school\`.\`name\` AS \`schoolName\`,
	\`school_course\`.\`name\` AS \`departmentName\`,
	\`school_class\`.\`name\` AS \`className\`,
	IfNull(COUNT(\`enq_answered\`.\`id\`), 0) AS \`answered\`
FROM
	\`user\`
INNER JOIN
	\`school\`
		ON \`school\`.\`id\` = \`user\`.\`school_id\`
INNER JOIN
	\`school_course\`
		ON \`school_course\`.\`id\` = \`user\`.\`course_id\`
INNER JOIN
	\`school_class\`
		ON \`school_class\`.\`id\` = \`user\`.\`class_id\`
INNER JOIN
	\`post_movie\`
		ON \`post_movie\`.\`user_id\` = \`user\`.\`id\`
INNER JOIN
	\`enq_group\`
		ON DATE_FORMAT(\`reserve_date\`, '%Y-%c-%d %H:%i:%s') >= DATE_FORMAT(\`date_start\`, '%Y-%c-%d %H:%i:%s')
			AND DATE_FORMAT(\`reserve_date\`, '%Y-%c-%d %H:%i:%s') <= DATE_FORMAT(\`date_end\`, '%Y-%c-%d %H:%i:%s')
LEFT OUTER JOIN
	\`enq_answered\`
		ON \`enq_group\`.\`id\` = \`enq_answered\`.\`enq_group_id\`
			AND \`enq_answered\`.\`user_id\` = \`user\`.\`id\`
WHERE
	\`user\`.\`is_regist\` = 1
	AND \`user\`.\`is_delete\` = 0
GROUP BY
	\`user\`.\`id\`,
	\`enq_group\`.\`id\`
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
